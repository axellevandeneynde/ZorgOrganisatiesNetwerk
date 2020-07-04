import Getuigenis  from './classes/Getuigenis.js';
const url = "http://localhost:8000";
const getuigenissen = getuigenissenCall();
const centra = centraCall();
const buttons = [];


$(function(){
    loadButtons();
    loadGetuigenissen("01");
    createAllGetuigenissenCarousel(getuigenissen);
});

function loadButtons(){
    var centraMenu = $(".centraMenu");
    var buttonsMetGetuigenis = [];
    
    getuigenissen.forEach(getuigenis =>{
        buttonsMetGetuigenis.push(getuigenis.centrum);
    });
    var newButtons = dubbeleWaardesVerwijderen(buttonsMetGetuigenis);
    centra.forEach(centrum => {
       newButtons.forEach(newButton =>{
           if(centrum.centra_ID == newButton){
            centraMenu.append(maakButtons(centrum.naam, centrum.centra_ID));
           }
       });
     });
     centraMenu.children().each( function(){
        buttons.push(this);
    });
}

function maakButtons(centrumNaam, centrumID){
    return `<button type="button" id="${centrumID}" onClick='loadGetuigenissen("${centrumID}")'>${centrumNaam}</button>`;
}

function loadGetuigenissen(centrumID){
    var getuigenissenVanCentrum  = [];
    var centrumData = loadCentrumInfo(centrumID);
    getuigenissen.forEach(getuigenis => {
        if(getuigenis.centrum == centrumID){
            getuigenissenVanCentrum.push(getuigenis);
        }
     });
     if(getuigenissenVanCentrum.length < 1){
        console.log("Geen getuigenissen");
     }else{
        var firstGetuigenis =  getuigenissenVanCentrum[0];
        // Text in de HTML plaatsen 
        $(".naamPersoonGetuigenis").text(firstGetuigenis.auteur);
        $(".tekstGetuigenis").text(firstGetuigenis.body);
        //Data van het centrum zelf in de HTML plaatsen
        $(".naamCentrumTitel").text(centrumData.naam);
        $("#detailPageCentrum").attr("onclick", `setCentrum("${centrumID}")`);
        $("#linkWebsiteCentrum").attr("href",centrumData.website);
        // Knop van kleur veranderen voor duidelijkheid op welke centrum we zitten
        changeSelectedButton(centrumID);

     }
    
}

function centraCall(){
    var centraArray;
    $.ajax({
        url: url +'/API/centra',
        dataType: 'JSON',
        method: 'GET',
        async: false
    }).done(function(data){
        var centra = data.centra;
        centraArray = centra;
    }).fail(function(a,b){
        console.log(a, b);
    });
    return centraArray;
}

function getuigenissenCall(){
    var getuigenissen;
    $.ajax({
        url: url +'/API/getuigenissen',
        dataType: 'JSON',
        method: 'GET',
        async: false
    }).done(function(data){
        getuigenissen = data;
    }).fail(function(a,b){
        console.log(a, b);
    });
    return getuigenissen;
}

function changeSelectedButton(centrumID){
   var button = document.getElementById(centrumID);
   buttons.forEach(button => {
    if(button.id === centrumID){
        button.style.backgroundColor = "white";
        button.style.color = "#f79838";
       }else{
        button.style.backgroundColor = "";
        button.style.color = "";
       }
   });
}

function dubbeleWaardesVerwijderen(array){
    var seen = {};
    var ret_arr = [];
    for (var i = 0; i < array.length; i++) {
        if (!(array[i] in seen)) {
            ret_arr.push(array[i]);
            seen[array[i]] = true;
        }
    }
    return ret_arr;
}

function loadCentrumData(centrumID){
    var returnData;
    centra.forEach(centrum => {
        if(centrumID == centrum.centra_ID){
            returnData = centrum;
        }
    });
    return returnData;
}

function createCarouselPerCentrum(){

}

function createAllGetuigenissenCarousel(getuigenissen){
    for(let get of getuigenissen){
        let newGetuigenis = new Getuigenis(get.getuigenisID, get.centrum, get.body, get.auteur, get.datum);
    $(`#allGetuigenissenCarouselContainer .getuigenissenContainer`).append(newGetuigenis.printGetuigenis());      
    
    }
    $('#allGetuigenissenCarouselContainer .getuigenissenContainer').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1193,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 910,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
}