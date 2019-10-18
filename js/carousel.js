// Gehaald van http://jsfiddle.net/X2NqX/?fbclid=IwAR0hL3W9uH8MsiVzDjfwbXY_rBcUd1CuJNFU2Ked-Ja9ohfClIke6oUyT4w
$(document).ready(function() {
  var body = $('#fotoshome');
  var backgrounds = ['url(images/homepage/homepagebackground.jpg)', 'url(images/homepage/homepagebackground2.jpg)','url(images/homepage/homepagebackground3.jpg)','url(images/homepage/homepagebackground4.jpg)'];
var current = 0;

function nextBackground() {
  body.css(
   'background-image',
    backgrounds[current = ++current % backgrounds.length]
 );

 setTimeout(nextBackground, 5000);
 }
 setTimeout(nextBackground, 5000);
   body.css('background-image', backgrounds[0]);
 });
