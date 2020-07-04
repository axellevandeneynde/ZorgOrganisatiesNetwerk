'use strict';

import Getuigenis from '../classes/Getuigenis.js';

export default class Centrum{
    constructor(id,name, doelgroep, leeftijdsgroep,beschrijving, website, email, telefoonnummer, adres, regio){
        this.id = id;
        this.name = name; 
        this.doelgroep =doelgroep;
        this.leeftijdsgroep = leeftijdsgroep;
        this.beschrijving = beschrijving;
        this.website = website;
        this.email = email;
        this.telefoonnummer = telefoonnummer;
        this.adres = adres;
        this.regio = this.stringifyArray(regio);
    }

    createCentrumPage(){
        let newDoelgroepen = [];
        for(let groep of this.doelgroep){
            let newGroepName = this.afkortingVervangen(groep);
            newDoelgroepen.push(newGroepName);
        };
        newDoelgroepen = this.oplijstingArray(newDoelgroepen);

   
        let newLeeftijden = this.oplijstingArray(this.leeftijdsgroep);
        return `
        <section class="centrumHeader">
            <div>
            <h2>${this.name}</h2>
            <span class="titleUnderline"></span>
            </div>
           
            <picture>
                <source srcset="images/centra/${this.id}/logo.png" type="image/svg+xml" />
                <img src="images/centra/${this.id}/logo.png" type="image/png"/>
            </picture>
        </section>
        <section class="centrumInfo">
               
            <article class="centrumDetails">
                
                <div>
                    <p class="cBeschrijving">${this.beschrijving}</p>
                  <table>
                    <tr>
                        <td>Leeftijdsgroep:</td>
                        <td class="tableInfo">${newLeeftijden}</td>
                    </tr>
                    <tr>
                        <td>Doelgroep:</td>
                        <td class="tableInfo"> ${newDoelgroepen} expertise</td>
                    </tr>
                    <tr>
                        <td>Adres:</td>
                        <td class="tableInfo">${this.adres}</td>
                    </tr>
                    <tr>
                        <td>Telefoonnummer:</td>
                        <td class="tableInfo">${this.telefoonnummer}</td>
                    </tr>
                    <tr>
                        <td>email:</td>
                        <td class="tableInfo">${this.email}</td>
                    </tr>
                  </table>
                </div>
                <div class="linkButton">
                    <a href="${this.website}" target="_blank"> Bezoek ${this.name}</a>
                </div>
                
            </article>
            <article class="centrumImage">
                <div class="cImageContainer">
                    <img src="images/centra/${this.id}/thumbnail.jpg">
                </div>
            </article>

        </section> `;
    }
    createCentrumThumbnail(){
        let stringifiedDoelgroepen = this.stringifyArray(this.doelgroep);
        let stringifiedLeeftijden = this.stringifyArray(this.leeftijdsgroep);
        return `<!-- ${this.name}-->
                <div class="organisatie all ${stringifiedDoelgroepen} all ${stringifiedLeeftijden} all ${this.regio} result">
                ​<picture>
                    <source srcset="images/centra/${this.id}/logo.png" type="image/png" />
                    <img src="images/centra/${this.id}/logo" type="image/png, image/svg+xml" alt="Logo ${this.name}"/>
                </picture>
                    <article class="org_tekst">
                        <div><h4 class="orgThumbnailTitle">${this.name}</h4></div>
                        <p>${this.beschrijving}</p> 
                        <div class="linkButton">
                            <a href="https://${this.website}" target="_blank">Website</a>
                            <a href="/centrum/${this.name}" onClick="setCentrum('${this.id}')">Meer informatie <span>→</span></a>
                        </div>
                    </article>
                </div>`;
    }

    stringifyArray(array){
        let string = array.toString();
        return string.replace(new RegExp(",", 'g'), " ");
    }
    // Deze functie zorgt er voor dat de oplijsting van doelgroepen en regio's schoner worden afgebeeld
    oplijstingArray(array){
        let newString;
       
        if(array.length > 2){
            
            let lastOfArray = array.pop();
            let secondLastOfArray = array.pop();
            let restOfArray = array.toString().replace(new RegExp(",", "g", ", "));
            return newString = `${restOfArray}, ${secondLastOfArray} & ${lastOfArray}`;
        }else if(array.length == 2){
            let lastOfArray = array.slice(-1)[0];
            let secondLastOfArray = array.slice(-2)[0];
            return newString = `${secondLastOfArray} & ${lastOfArray}`;
        }else{
            return newString =  array;
        }
    }
    // Afkortingen van in de json aanpassen naar duidelijkere tekst
    afkortingVervangen(afkorting){
        switch(afkorting){
            case 'nah': return "Niet aangeboren hersenletsels";
            case 'motorisch': return "(Neuro-)Motorsiche";
            case 'taal': return "Taal";
            case 'visueel': return "Visuele";
            case 'auditief': return "Auditieve";
            default: return "ERROR";
        }
    }
    //Getuigenis inladen van de 
    setMainGetuigenis(centrumID){
        $.ajax({
            url: '../js/json/getuigenissen.json',
            dataType: 'JSON',
            method: 'GET',
            async: true
        }).done(function(data){
            for(let getuigenis of data){
                if(getuigenis.centrum == centrumID){
                    let get = new Getuigenis(getuigenis.getuigenisID, this.centrum, getuigenis.body, getuigenis.auteur, getuigenis.datum);
                    $(".centrumGetuigenis").html(get.printGetuigenis()); 
                }else{
                }
            }
        });
    }
}
