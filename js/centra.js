$(document).ready(function(){
    console.log("linked!");

    $.ajax({
        url: '../json/centra.json',
        dataType: 'JSON',
        method: 'GET'
    }).done(function(data){
        console.log(data);
        var centra_ID = data.centra[0].centra_ID;
        $("#testDiv").html(
           '<img src="../images/centra/'+ centra_ID +'/logo.png" alt="">'
        );
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
        console.log("Julien is the best!");
    });
});

function voegCentrumToe(){
    $("#centrumForm").submit(function(e){
        e.preventDefault();

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