// Declareren van variabelen
var nav = $("#mobileNav");
// Navigatie voor op kleinere schermen
$("#mobileMenuIcon").click(function(){
	// De navigatie tevoorschijn laten komen
	$(nav).slideToggle();
		$(nav).css("display", "flex");
		console.log("icon clicked");
		$("#menuTopBar").addClass("knopAnimatie1");
	// Veranderen van hamburger icon naar een kruisje

});
// Fix voor het verdwijnen van de navigatie bij resize van schermbreedte
$(window).on('resize', function(){
	// Bij schermen onder de 600px 
	if($(this).width() <= 755){
		$("#mobileNav").css("display", "none");
	}
	// Bij schermen groter dan 600px 
	if($(this).width() > 755){
		$("#mobileNav").css("display", "flex");
	};
});