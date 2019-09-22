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
        voegCentrumToe();
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
        console.log("Julien is the best!");
    });
});
