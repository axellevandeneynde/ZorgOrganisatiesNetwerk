// Declareren van variabelen
var nav = $("#mobileNav");
var opened = false;
var btn = document.getElementById('mobileMenuIcon')
// Navigatie voor op kleinere schermen
btn.addEventListener('click', ()=>{
	var buttonLines = btn.children;
	if(opened){
		showHideMenu(false)
		buttonLines[0].style.backgroundColor = 'var(--darker-orange)'
		buttonLines[1].style.backgroundColor = 'var(--darker-orange)'
		buttonLines[2].style.backgroundColor = 'var(--darker-orange)'

		buttonLines[0].style.transform = 'rotate(0) translate(0)'
		buttonLines[1].style.opacity = '1'
		buttonLines[2].style.transform = 'rotate(0) translate(0)'

		opened = false;
	}else{
		showHideMenu(true)

		buttonLines[0].style.backgroundColor = 'white'
		buttonLines[1].style.backgroundColor = 'white'
		buttonLines[2].style.backgroundColor = 'white'
		
		buttonLines[0].style.transform = 'rotate(45deg) translate(47.5%)'
		buttonLines[1].style.opacity = '0'
		buttonLines[2].style.transform = 'rotate(-45deg) translate(47.5%)'

		opened = true;
	}
})

function showHideMenu(opened){
	let nav = document.getElementById('mobileNav')
	if(opened){
		nav.style.transform = "translateX(0vw)"
		
	}else{
		nav.style.transform = "translateX(100vw)"
		
	}
}