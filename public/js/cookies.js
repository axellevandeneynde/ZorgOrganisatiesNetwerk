// Cookies voor het bijhouden van data tussen home page en filtering voor centra pagina 
var begeleidingKeuze = localStorage.getItem("filter");
var centrumKeuze = localStorage.getItem("centrumID");
// Verklaren van keuze op de homepage 
if(begeleidingKeuze == ""){
	begeleidingKeuze = "all";
	localStorage.setItem("filter", begeleidingKeuze);
}
// Resetten van cookie naar "all" opties 
function resetCookie(){
	begeleidingKeuze = "all";
	localStorage.setItem("filter", begeleidingKeuze);
}
// De waarde van de select aanpassen aan de gekozen begeleidingsoptie 
function setOption(){
	// De gekozen specialeit vanop de homepage kiezen in de select element
	document.getElementById('specFilter').value = localStorage.getItem("filter");
	//Direct opzoeken naar gekozen specialiteit
	filterCentra();
	// Fix voor filterpijl dat fout afgebeeld word (omgekeerd)
	$(".arrowBtn>span").removeClass("arrowAnimation");
	$(".arrowBtn>p").css("display", "none");
	// vermijden dat de filter menu open staat wanneer de pagina inlaad
	if($(window).width() <= 1193){
		//$('.filter-container').toggle().removeClass('mobileFilterToggle');
	}
}
//Kiezen welke type begeleiding je wenst te vertonen op centra pagina
function setFilter(filterString){
	begeleidingKeuze = filterString;
	localStorage.setItem("filter", filterString);	
}


function setCentrum(id){
	localStorage.setItem("centrumID", id);
}

function getCentrumID(){
	localStorage.getItem("centrumID");
}