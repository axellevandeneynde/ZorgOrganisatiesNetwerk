'use strict'
$(document).ready(function(){
    console.log("linked!");
    voegCentrumToe();
    toonCentra();
});
//! Centrum toevoegen aan lijst
function voegCentrumToe(){
    $("#centrumForm").submit(function(e){
        e.preventDefault();
        
        let centrumObject = {
            naam: $("#naamInput").val()
        };

        // POST methode
        $.ajax({
            url: "http://127.0.0.1:3000/insertCentrum",
            method:'POST',
            data: centrumObject
        }).done(function(data){
            console.log(data);
            console.log('Centrum toegevoegd!')
        }).fail(function(er1, er2){
            console.log(er1);
            console.log(er2);
        });
    });
}


//! Vertonen van lijst van centra en die aanpassen
function toonCentra(){
    $.ajax({
        url: 'http://127.0.0.1:3000/getCentra',
        method: 'GET',
        dataType: 'JSON'
    }).done(function(data){
        console.log("JSON Linked");
        var centraLijst = data.centra; 
        // ! for-OF loop voor objecten van in een json file te lezen!
        for (var centrum of centraLijst){
            $("#centraLijst").append("<li>"+ maakCentrumAan(centrum));
        }
    }).fail(function(er1, er2){
        console.log(er1, er2)
    });
}

function maakCentrumAan(centrum_object){
    var naam = centraObjectAanmaken(centrum_object).centrumNaam; 
    var doelgroepen = centraObjectAanmaken(centrum_object).centrumDoelgroepen;
    return "<div>" + naam + doelgroepen;
}
function centraObjectAanmaken(centrum_object){
    let centrumPrintObject = {
        centrumNaam: "<h2>"+centrum_object.naam+"</h2>",
        centrumDoelgroepen: "<ul class='doelgroepenList' id='centrum"+centrum_object.centra_ID+"'>"+ makeListFromArray('#centrum'+centrum_object.centra_ID, centrum_object.doelgroep) + "</ul>"
    };
    return centrumPrintObject;
}

function makeListFromArray(list, array){
    for(let index of array){
        let li = "<li>" + index + "</li>"
        $(list).append(li);
    }
}