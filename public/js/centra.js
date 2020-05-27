import Centrum from './classes/Centrum.js';
import * as p from './serverPath.js';

$(document).ready(function(){
    

    $.ajax({
        url: 'js/json/centra.json',
        dataType: 'JSON',
        method: 'GET'
    }).done(function(data){
        let centraArray = data.centra;
        for(let centrum of centraArray){
            let centrumID = centrum.centra_ID;
            let centrumName = centrum.naam;
            let centrumDoelgroep = centrum.doelgroep;
            let centrumLeeftijdsgroep = centrum.leeftijdsgroep;
            let centrumBeschrijving = centrum.beschrijving;
            let centrumWebsite = centrum.website;
            let centrumEmail = centrum.email;
            let centrumTel = centrum.telefoonnummer;
            let centrumAdres = centrum.adres;
            let centrumRegio= centrum.regio;
            let newcentrum = new Centrum(centrumID, centrumName, centrumDoelgroep, centrumLeeftijdsgroep, centrumBeschrijving, centrumWebsite, centrumEmail, centrumTel, centrumAdres, centrumRegio);
            $("#orgs_lijst").append(newcentrum.createCentrumThumbnail());
        }
       
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
    });
});
