'use strict';
export default class Centrum{
    constructor(name, beschrijving, website, email, telefoonnummer, adres, regio){
        this.id = this.generateID();
        this.name = name; 
        this.doelgroep = [];
        this.leeftijdsgroep = [];
        this.beschrijving = beschrijving;
        this.website = website;
        this.email = email;
        this.telefoonnummer = telefoonnummer;
        this.adres = adres;
        this.regio = regio;
    }
    generateID(){
        return "69";
    }

    createCentrumPage(){
        return ``;
    }
    createCentrumThumbnail(){
        return `<div class="organisatie all ${this.doelgroep} all ${this.leeftijdsgroep} all ${this.regio}">
                    <figure><img src="" alt="logo ${this.name}"></figure>
                    <article class="org_tekst">
                        <h4>${this.name}</h4>
                        <p>${this.beschrijving}</p> 
                        <div class="org_buttons">
                            <a href="https://${this.website}" target="_blank">Website</a>
                            <a href="centrum.html:${this.name}">Meer informatie <span>→</span></a>
                        </div>
                    </article>
                </div>`;
    }
}
