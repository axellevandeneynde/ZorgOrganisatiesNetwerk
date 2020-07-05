'use strict';

$(function(){


loadGetuigenis();

});

async function loadGetuigenis(){
   await $.ajax({
        url: '/API/getuigenissen',
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
        
        printGetuigenis(selectedGetuigenis);
        
    }).fail(function(a,b){
        console.log(a,b);
    });
    
}

function printGetuigenis(getuigenis){
    let naam = $('.mainNaamVanPersoon');
    let centrum = $('.mainCentrumVanGetuigenis span');
    let centrumID = getuigenis.centrum; 
    let centrumInfo = loadCentrumInfo(centrumID);
    let tekst = $('.mainTekstVanGetuigenis');
    let websiteLink = document.getElementById('mainLinkWebsiteCentrum');
    let detailPageLink = $('#mainDetailPageCentrum');

    let getuigenisID = getuigenis.getuigenisID;

    loadImage(getuigenisID);
    
    naam.text(getuigenis.auteur);
    centrum.text(centrumInfo.naam);
    tekst.text(getuigenis.body);
    websiteLink.href = centrumInfo.website;
    detailPageLink.attr("href", `centrum/${centrumInfo.naam}`);
}

function loadCentrumInfo(centrumID){
    var centrumInfo;
    $.ajax({
        url: '/API/centra',
        dataType: 'JSON',
        method: 'GET',
        async: false
    }).done(function(data){
        let centraArray = data.centra;
        for(let centrum of centraArray){
          if(centrum.centra_ID == centrumID){
            centrumInfo = centrum;
          } 
        }
        
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
    }); 
   
    return centrumInfo;
}

function loadImage(getuigenisID){
    
    $('.getuigenisFotoContainer').css("background-image", `url('/images/getuigenissen/${getuigenisID}.png')`);
}