import Getuigenis from './classes/Getuigenis.js';

$(function(){
    $.ajax({
        url: 'js/json/getuigenissen.json',
        dataType: 'JSON',
        method: 'GET',
        async: false
    }).done(function(data){
        let getuigenissenArray = [];
        for(let getuigenis of data){
            getuigenissenArray.push(getuigenis);
        }
        let getuigenissenArrayLengte = getuigenissenArray.length;
        let randomGetuigenis = Math.floor(Math.random() * Math.floor(getuigenissenArrayLengte));
        let selectedGetuigenis = getuigenissenArray[randomGetuigenis];
        let toPrintGetuigenis = new Getuigenis(selectedGetuigenis.getuigenisID, selectedGetuigenis.centrum, selectedGetuigenis.body, selectedGetuigenis.auteur, selectedGetuigenis.datum);
        
        $("#footerGetuigenis article").append(toPrintGetuigenis.printFooterGetuigenis());
    }).fail(function(a,b){
        console.log(a,b);
    });
})