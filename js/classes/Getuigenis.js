'use strict';
export default class Getuigenis{
   
    constructor(id, centrum, body, auteur, datum){
        this.getuigenisID = id;
        this.gelinkteCentrum = centrum;
        this.auteur = auteur;
        this.body = body;
        this.datum = datum;
    }
    
    printGetuigenisHomepage(){
        return `<article id="getuigenis">
                    <blockquote>
                        ${this.body}
                    </blockquote>
                    <section class="getuigenisInfoContainer">
                        <p class="getuigenisInfo"><span class="getuigenisAuthor"> ${this.auteur}</span>  over  <span class="getuigenisCentrum">${this.findCentrum(this.gelinkteCentrum)}</span></p>
                    </section>
                </article>`;
    }
    printGetuigenis(){
        return `<article class="getuigenis">
                    <blockquote>
                        ${this.body}
                    </blockquote>
                    <section class="getuigenisInfoContainer">
                        <p class="getuigenisInfo"><span class="getuigenisAuthor"> ${this.auteur}</span> - <span class="getuigenisDatum">${this.datum}</span></p>
                    </section>
                </article>
        `;
    }
    printFooterGetuigenis(){
        return `<article class="getuigenis">
                    <blockquote>
                        ${this.body}
                    </blockquote>
                    <section class="getuigenisInfoContainer">
                         <p class="getuigenisInfo"><span class="getuigenisAuthor"> ${this.auteur}</span>  over  <span class="getuigenisCentrum">${this.findCentrum(this.gelinkteCentrum)}</span></p>
                    </section>
                </article>
        `;
       
    }
    
    findCentrum(centrumID){
        var result;
        $.ajax({
            url: '../js/json/centra.json',
            dataType: 'JSON',
            method: 'GET',
            async: false
        }).done(function(data){
            for(let centrum of data.centra){
                if(centrum.centra_ID == centrumID){
                    result =  centrum.naam; 
                }    
            }
            return result;
        });
       
        return result;
    }
}