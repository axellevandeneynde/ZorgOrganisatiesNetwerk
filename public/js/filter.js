
//Globale variabelen


$(document).ready(function(){
	var filterMenuDown = false;
	console.log(filterMenuDown);
	
	$("#mobileFilter").click(function(){
		if(filterMenuDown == true){
			$('.arrowBtn>p').css("display", "none");
			$('.filter-container').css("display", "block");
			filterMenuDown = false;
			console.log(filterMenuDown);
		}else{ 	// de menu balk wordt geopend.
			$('.arrowBtn>p').css("display", "block");
			$('.filter-container').css("display", "none");
	
			filterMenuDown = true;
			console.log(filterMenuDown);
		}
	});
	filterCentra();
});

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
	}
	floatRight();
}
// Zig zag vertoning van resultaten
async function floatRight(){
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
	}
}
// Functie specifiek voor de filter button
function clickToFilter(){
	filterCentra();
	dropToList();
	geenCriteriaTekstTonen();	
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
    } else {
        $('#filter').removeClass('sticky');
    }
});
// Mobile versie van de filter balk


$(window).on('resize', function(){
	// Fix voor het verdwijnen van de filter balk bij resize van schermbreedte (Reset) 
	if($(this).width() <= 1193){
		
	}
	if($(this).width() >= 1193){
		
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
	}
});

function geenCriteriaTekstTonen(){
	var i = 0;
	$('#orgs_lijst .organisatie:visible').each(function(){
		i++;
	});
	if(i == 0){
		console.log("Geen criteria");
		$("#geenCriteria").css("display", "block");
	}else{
		console.log("Centrum Gevonden");
		$("#geenCriteria").css("display", "none");
	}
}