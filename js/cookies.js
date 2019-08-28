// Cookies voor het bijhouden van data tussen home page en filtering voor centra pagina 
var begeleidingKeuze = document.cookie;
// Verklaren van keuze op de homepage 
if(begeleidingKeuze == ""){
	begeleidingKeuze = "all";
	document.cookie = begeleidingKeuze;
}
	//Kiezen welke type begeleiding je wenst te vertonen op centra pagina
	function setVisueel(){
		begeleidingKeuze = "visueel";
		document.cookie = begeleidingKeuze;	
	}
	function setAudio(){
		begeleidingKeuze = "auditief";	
		document.cookie = begeleidingKeuze;
	}
	function setMotorisch(){
		begeleidingKeuze = "neuromotorisch";
		document.cookie = begeleidingKeuze ;
	}
// Resetten van cookie naar "all" opties 
function resetCookie(){
	//begeleidingKeuze = "all";
	//document.cookie = begeleidingKeuze;
}
// De waarde van de select aanpassen aan de gekozen begeleidingsoptie 
function setOption(){
	// De gekozen specialeit vanop de homepage kiezen in de select element
	document.getElementById('specFilter').value = begeleidingKeuze;
	//Direct opzoeken naar gekozen specialiteit
	filterCentra();
	// Fix voor filterpijl dat fout afgebeeld word (omgekeerd)
	$(".arrowBtn>img").removeClass("arrowAnimation");
	$(".arrowBtn>p").removeClass("filterTextAnimation");
	// vermijden dat de filter menu open staat wanneer de pagina inlaad
	if($(window).width() <= 1193){
		$('.filter-container').toggle().removeClass('mobileFilterToggle');
	};
}