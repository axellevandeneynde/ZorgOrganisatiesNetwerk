$(document).ready(function(){
    $(".accordion").on("click", function(){
        $(this).children(".antwoord").toggle();
    })
    
    $(".accordion").on("keypress", function(){
        $(this).children(".antwoord").toggle();
    }) // makes it accesible with keyboard
    
});