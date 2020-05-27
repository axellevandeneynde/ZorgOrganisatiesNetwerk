import Centrum from './classes/Centrum.js';
import Getuigenis  from './classes/Getuigenis.js';

var centrumID;
var huidigeGetuigenis = 0;
var getuigenisPagina = 1;
var maxGetuigenissenPerLijn = 3;


centrumID = localStorage.getItem("centrumID");
$(function(){
      
      $.ajax({
        url: 'js/json/centra.json',
        dataType: 'JSON',
        method: 'GET'
    }).done(function(data){
        for(let centrum of data.centra){
            if(centrum.centra_ID == centrumID){
                document.title = centrum.naam;
                let newCentrum = new Centrum(centrum.centra_ID, centrum.naam, centrum.doelgroep, centrum.leeftijdsgroep, centrum.beschrijving, centrum.website, centrum.email, centrum.telefoonnummer, centrum.adres, centrum.regio);
                $("#centrumResult").append(newCentrum.createCentrumPage());
            }
        }
    }).fail(function(a,v){
        console.log(a,b);
    });
    
    $.ajax({
        url: 'js/json/getuigenissen.json',
        dataType: 'JSON',
        method: 'GET'
    }).done(function(data){
       
        for(let get of data){
            if(get.centrum == centrumID){
                let newGetuigenis = new Getuigenis(get.getuigenisID, get.centrum, get.body, get.auteur, get.datum);
                   $(`.getuigenissenContainer`).append(newGetuigenis.printGetuigenis());      
            }
        }
        $('.getuigenissenContainer').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 3000,
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
                  breakpoint: 600,
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
    });

   
    
    
});

function createGetuigenisLijn(newGetuigenis){
    if(huidigeGetuigenis != maxGetuigenissenPerLijn){
        $(`#getuigenisLijnContainer${getuigenisPagina}`).append(newGetuigenis.printGetuigenis());
        huidigeGetuigenis ++;
     }
     else{
        getuigenisPagina ++;
        $('.getuigenissenContainer').append(`<section id="getuigenisLijn${getuigenisPagina}" class="getuigenisLijn">
                                                <article class="getuigenisLijnContainer" id="getuigenisLijnContainer${getuigenisPagina}"></article>
                                            </section>`);
        huidigeGetuigenis = 0;
        createGetuigenisLijn(newGetuigenis);
    }
    }

