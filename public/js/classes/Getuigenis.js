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
                        <p class="getuigenisInfo"><span class="getuigenisAuthor"> ${this.auteur}</span></p>
                        <div class="linkButton">
                            <a class="getuigenisInfoLink" href="/getuigenissen">Lees meer getuigenissen...</a>
                        </div>
                        
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
                         <p class="getuigenisInfo"><span class="getuigenisAuthor"> ${this.auteur}</span></p>
                    </section>
                </article>
        `;
       
    }
    
    findCentrum(centrumID){
        var result;
        $.ajax({
            url: '/API/getuigenissen',
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