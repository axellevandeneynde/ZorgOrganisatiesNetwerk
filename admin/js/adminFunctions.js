$(document).ready(function(){
    console.log("linked!");
    voegCentrumToe();
    toonCentra();
});

function voegCentrumToe(){
    $("#centrumForm").submit(function(e){
        e.preventDefault();
        var formResult = $(this).serializeArray();
        console.log(formResult);
        
        var centrumObject = {
            
        };

        // POST methode
        $.ajax({
            url: "http://mentenjulien.com/insertCentrum",
            data: centrumObject,
            method:'POST'
        }).done(function(data){
            console.log(data);
        });
    });
}

function toonCentra(){
    $.ajax({
        url: '../json/centra.json',
        method: 'GET',
        dataType: 'JSON'
    }).done(function(data){
        console.log("JSON Linked");
        var centraLijst = data.centra; 
        // ! for-OF loop voor objecten van in een json file te lezen!
        for (var centrum of centraLijst){
            $("#centraLijst").append();
        }
    });
}

function maakCentraAan(centrum_object){
    centrumPrintObject = {
        centrumNaam: "<h2>"+centrum_object.naam+"</h2>",
        centrumDoelgroepen: "<ul class='doelgroepenList' id='centrum"+centrum_object.centra_ID+"'>"+ makeListFromArray('#centrum'+centrum_object.centra_ID , centrum_object.doelgroep)
    };
    return centrumPrintObject;
}

function makeListFromArray(list, array){
    for(var index of array){
        $(list).append("<li>"+ index +"</li>");
        console.log("<li>"+index+"</li>");
    }
}