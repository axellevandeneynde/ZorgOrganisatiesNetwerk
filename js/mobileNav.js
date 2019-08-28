// Declareren van variabelen
var nav = $("#mobileNav");
// Navigatie voor op kleinere schermen
$("#mobileMenuIcon").click(function(){
	// De navigatie tevoorschijn laten komen
	$(nav).slideToggle();
	// Veranderen van hamburger icon naar een kruisje
	$(".mobileIconLijn1").toggleClass('knopAnimatie1');
	$(".mobileIconLijn2").toggleClass('knopAnimatie2');
	$(".mobileIconLijn3").toggleClass('knopAnimatie3');
});
// Fix voor het verdwijnen van de navigatie bij resize van schermbreedte
$(window).on('resize', function(){
		//Bij resizen van scherm de hamburger icon resetten
		$(".mobileIconLijn1").removeClass('knopAnimatie1');
		$(".mobileIconLijn2").removeClass('knopAnimatie2');
		$(".mobileIconLijn3").removeClass('knopAnimatie3');
	// Bij schermen onder de 890px 
	if($(this).width() <= 890){
		$("#mobileNav").css("display", "none");
	}
	// Bij schermen groter dan 890px 
	if($(this).width() > 890){
		$("#mobileNav").css("display", "inline-block");
		// Fix voor kruisje dat blijft staan wanneer die weer een hamburger icon moet zijn
		$(".mobileIconLijn1").removeClass('knopAnimatie1');
		$(".mobileIconLijn2").removeClass('knopAnimatie2');
		$(".mobileIconLijn3").removeClass('knopAnimatie3');
	};
});