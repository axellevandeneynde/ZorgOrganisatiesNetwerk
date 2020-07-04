import Getuigenis from './classes/Getuigenis.js';

const url = "http://localhost:8000";
$(function(){
    $.ajax({
        url: url + '/API/getuigenissen',
        dataType: 'JSON',
        method: 'GET'
    }).done(function(data){
        let getuigenissenArray = [];
        for(let getuigenis of data){
            getuigenissenArray.push(getuigenis);
        }
        let getuigenissenArrayLengte = getuigenissenArray.length;
        let randomGetuigenis = Math.floor(Math.random() * Math.floor(getuigenissenArrayLengte));
        let selectedGetuigenis = getuigenissenArray[randomGetuigenis];
        let toPrintGetuigenis = new Getuigenis(selectedGetuigenis.getuigenisID, selectedGetuigenis.centrum, selectedGetuigenis.body, selectedGetuigenis.auteur, selectedGetuigenis.datum);
        
        $("#getuigenisContainer").append(toPrintGetuigenis.printGetuigenisHomepage());
    }).fail(function(a,b){
        console.log(a,b);
    });
});

