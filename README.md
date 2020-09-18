# Expertise Als Hefboom 

## Opstarten website
Deze website is gemaakt aan de hand van [Node.JS](https://nodejs.org/en/). Om deze op te starten moet je dus [Node.JS](https://nodejs.org/en/) en [NPM](https://www.npmjs.com/) op uw machine installeren als dit nog niet gedaan is.  

Om te beginnen, gaan we deze repository clonen. Zorg voor een duidelijke map waar deze makkelijk terug te vinden is. 



```
 npm install
```
Nu heb je al de modules en kan je te werk met de website.
Dit doen we met Node.JS. 

Om deze op te starten, gebruik je het **node** commando als volgt: 
```
node server
```
Deze commando maakt een locale server aan waar de website op staat. 

Vergeet niet om na elke grote verandering uw server herop te starten!

### Tip: 
Er bestaat een npm package genaamd [Nodemon](https://nodemon.io/). Met deze hoef je niet elke keer uw node server manueel op te starten. Nodemon gaat automatisch de Node server heropstarten wanneer hij een verandering ziet in de code. Nodemon geeft ook de juiste error informatie terug als er iets niet klopt.  

Nodemon installeer je globaal op uw machine aan de hand van NPM: 
```
npm install -g nodemon
```
Om de server dan op te starten is het exact hetzelfde als met **node**, maar met **nodemon** in de plaats: 
```
nodemon server
```