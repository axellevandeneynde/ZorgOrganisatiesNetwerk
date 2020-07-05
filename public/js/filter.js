
//Globale variabelen
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


// Main Filter functie 
function filterCentra(){
	console.log("filtered")
	var begeleiding = document.getElementById('specFilter').value;
	var regio = document.getElementById('regioFilter').value;
	var leeftijd = document.getElementById('leeftijdFilter').value;
	console.log(begeleiding, regio, leeftijd)
	var windowWidth = $(window).width();
	//Bepalen van de filter dat getoond moet worden, en diegene dat moet verborgen worden
	var notFilter = $("div.organisatie:not("+"." + begeleiding +"."+ leeftijd +"."+ regio +")");
	
	//Op kleine schermen moet de display block zijn, en op grote schermen inline-flex. Deze stuk code toont de gewenste centra 
	$("div.organisatie").css("display", "inline-flex");
	//Deze stuk code verbergd de ongewenste centra 
	notFilter.css( "display", "none");
	
	// Eens je op bevestigen drukt, verdwijnt de mobiele filter blok

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
	var list = document.getElementById("org_titel");
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


async function loadedFromHomePage(option){
	document.getElementById('specFilter').value = homepageOption;
	console.log(option)
	if(option != "all"){
		await filterCentra()
		dropToList();
	}
	else{
		// nothing
	}
}



// Mobile versie van de filter balk


/*$(window).on('resize', function(){
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
});*/

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

function slideFilter(){
	let btn = document.getElementById('openFilterBtn')
	let filter = document.getElementById('filter')
	let icon = btn.childNodes[1]
	let opened = false;
	btn.addEventListener('click', function(){
		if(opened == false){
			filter.style.transform = "translateY(0%)"
			icon.style.setProperty('mask', "url('/images/assets/cross.svg') no-repeat center / contain");
			icon.style.setProperty('-webkit-mask',"url('/images/assets/cross.svg') no-repeat center / contain");
			opened = true;
		}else{
			filter.style.transform = "translateY(100%)"
			icon.style.setProperty('mask', "url('/images/assets/search.svg') no-repeat center / contain");
			icon.style.setProperty('-webkit-mask',"url('/images/assets/search.svg') no-repeat center / contain");
			opened = false;
		}
		
	})
}
slideFilter()

function filterStyleReset(){

}