
//Globale variabelen
var filterMenuDown = false;

// Main Filter functie 

function filterCentra(){
	var begeleiding = $("#specFilter").val();
	var regio = $("#regioFilter").val();
	var leeftijd =$("#leeftijdFilter").val();
	var windowWidth = $(window).width();
	//Bepalen van de filter dat getoond moet worden, en diegene dat moet verborgen worden
	var filter = $(["class*='."+ begeleiding +"."+ leeftijd +"."+ regio +"'"]);	
	var notFilter = $("div.organisatie:not("+"." + begeleiding +"."+ leeftijd +"."+ regio +")");
	//Op kleine schermen moet de display block zijn, en op grote schermen inline-flex. Deze stuk code toont de gewenste centra 
	$("div.organisatie").css("display", "inline-flex");
	if(windowWidth <= 730){
		$("div.organisatie").css("display", "block");		
	}
	if(windowWidth > 730 && ".organisatie:visible" == true){
		$("div.organisatie").css("display", "inline-flex");	
	}
	//Deze stuk code verbergd de ongewenste centra 
	notFilter.css( "display", "none");
	// Eens je op bevestigen drukt, verdwijnt de mobiele filter blok
	if($(window).width() <= 1193){
		$('.filter-container').slideToggle().removeClass('mobileFilterToggle');
		$(".arrowBtn>img").toggleClass("arrowAnimation");
		$(".arrowBtn>p").toggleClass("filterTextAnimation");
	};
	floatRight();
}
// Zig zag vertoning van resultaten
function floatRight(){
	$("#orgs_lijst .organisatie:hidden").removeClass("result");
	$("#orgs_lijst .organisatie:visible").addClass("result");
	$(".result").css("float", "none");
	$(".result:odd").css("float", "right");	
}
// Wanneer je op zoeken drukt, word je naar de top van de lijst verplaatst 
function dropToList(){
	var list = document.getElementById("dropHere");
	if($(window).width() <= 1193){
	   list.scrollIntoView({behavior:"smooth", block:"center"});
	}
    if($(window).width() > 1193){
	   list.scrollIntoView({behavior:"smooth", block:"start"});
	};		
};
// Functie specifiek voor de filter button
function clickToFilter(){
	filterCentra();
	dropToList();
}
/*
Lijst van mogelijke waarden binnen de filters: 
- begeleiding: 
	- all
	- visueel
	- auditief
	- neuromotorisch
	- taal
	- nah
	
- leeftijd:
	- all
	- kinderen
	- jongeren
	- volwassenen
	
- regio
	- all
	- brussel
	- limburg
	- o-vlaanderen
	- v-brabant
	- w-vlaanderen
*/

// Sticky filter bar
var num = 60; // Grootte van navigatie balk boven de filterbalk

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#filter').addClass('sticky');
		$('.grid').css("padding-top","70px");
    } else {
        $('#filter').removeClass('sticky');
		$('.grid').css("padding-top","00px");
    }
});
// Mobile versie van de filter balk
$("#mobileFilter").click(function(){
	$('.filter-container').slideToggle().toggleClass('mobileFilterToggle');
	$(".arrowBtn>img").toggleClass("arrowAnimation");
	$(".arrowBtn>p").toggleClass("filterTextAnimation");
	filterMenuDown = true;
});

$(window).on('resize', function(){
	// Fix voor het verdwijnen van de filter balk bij resize van schermbreedte (Reset) 
	if($(this).width() <= 1193){
		$(".filter-container").addClass('mobileFilterToggle');
		$(".filter-container").css("display","none");
	}
	if($(this).width() >= 1193){
		$(".filter-container").removeClass('mobileFilterToggle');
		$(".filter-container").css("display","block");
	}
	// Vermijden van aanpassen van 'display' door het resizen van schermen, maar toch de 'display' mode dynamisch aanpassen tussen 'block' en 'inline-flex'
	var begeleiding = $("#specFilter").val();
	var regio = $("#regioFilter").val();
	var leeftijd =$("#leeftijdFilter").val();
	var windowWidth = $(window).width();
	var filter = $(["class*='."+ begeleiding +"."+ leeftijd +"."+ regio +"'"]);	
	var notFilter = $("div.organisatie:not("+"." + begeleiding +"."+ leeftijd +"."+ regio +")");
	
	if($(this).width() <= 731){
		$("div.organisatie").css("display", "block");
		notFilter.css("display","none");
	} 
	if($(this).width() > 731){
		$("div.organisatie").css("display", "inline-flex");	
		notFilter.css("display","none");
	};
	if(filterMenuDown == true){
		$(".arrowBtn>img").removeClass("arrowAnimation");
		$(".arrowBtn>p").removeClass("filterTextAnimation");
	};
});
