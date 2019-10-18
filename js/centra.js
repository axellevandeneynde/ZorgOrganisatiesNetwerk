import Centrum from './Centrum.js';

$(document).ready(function(){
    console.log("linked!");

    $.ajax({
        url: 'http://localhost:3000/getCentra',
        dataType: 'JSON',
        method: 'GET'
    }).done(function(data){
        let centraArray = data.centra;
        console.log(centraArray);
        for(let centrum of centraArray){
            let centrumName = centrum.naam;
            let centrumBeschrijving = centrum.beschrijving;
            let centrumWebsite = centrum.website;
            let centrumEmail = centrum.email;
            let centrumTel = centrum.telefoonnummer;
            let centrumAdres = centrum.adres;
            let centrumRegio= centrum.regio;
            let newcentrum = new Centrum(centrumName, /*centrumDoelgroep, centrumLeeftijdsgroep,*/ centrumBeschrijving, centrumWebsite, centrumEmail, centrumTel, centrumAdres, centrumRegio);
            $("#testDiv").append(newcentrum.createCentrumThumbnail());
        }
       
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
        console.log("Julien is the best!");
    });
});
