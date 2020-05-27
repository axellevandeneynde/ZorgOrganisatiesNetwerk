function maakButtons(centrumNaam, centrumID){
    return `
        <button type="button" id="${centrumID}" onclick="makeGetuigenissenContent('${centrumID}');">${centrumNaam}</button>
    `;
}

function loadGetuigenissen(centrumID){
    var perCentrumGetuigenissen = [];
    console.log(perCentrumGetuigenissen);
    getuigenissen.forEach(getuigenis => {
        if(getuigenis.centrum == centrumID){
            perCentrumGetuigenissen.push(getuigenis);
        }
     });
    var firstGetuigenis = perCentrumGetuigenissen[0];
    // Text in de HTML plaatsen 
    $(".naamPersoonGetuigenis").text(firstGetuigenis.auteur);
    $(".tekstGetuigenis").text(firstGetuigenis.body);
    // Overblijvende getuigenissen in de slick zetten
    perCentrumGetuigenissen.forEach(get => {
        var newGetuigenis = new Getuigenis(get.getuigenisID, get.centrum, get.body, get.auteur, get.datum);
        $('.getuigenissenContainer').append(newGetuigenis.printGetuigenis());  
    });
 
}
function loadCentrumInfo(centrumID){
    centra.forEach(centrum => {
        if(centra.centra_ID == centrumID){
            console.log(centrum);
        }
    });
}
function makeGetuigenissenContent(centrumID){
    loadGetuigenissen(centrumID);
    loadCentrumInfo(centrumID);
}
function centraCall(){
    var centraArray;
    $.ajax({
        url: 'js/json/centra.json',
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
        url: 'js/json/getuigenissen.json',
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

function slick(){
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

}