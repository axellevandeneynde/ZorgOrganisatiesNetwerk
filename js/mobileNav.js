// Declareren van variabelen
var nav = $("#mobileNav");
// Navigatie voor op kleinere schermen
$("#mobileMenuIcon").click(function(){
	// De navigatie tevoorschijn laten komen
	$(nav).slideToggle();
	// Veranderen van hamburger icon naar een kruisje

});
// Fix voor het verdwijnen van de navigatie bij resize van schermbreedte
$(window).on('resize', function(){
	// Bij schermen onder de 1024px 
	if($(this).width() <= 1193){
		$("#mobileNav").css("display", "none");
	}
	// Bij schermen groter dan 1024px 
	if($(this).width() > 1193){
		$("#mobileNav").css("display", "inline-block");
	};
});