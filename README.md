# Expertise Als Hefboom 

## Opstarten website

### Wat heb je nodig: 
 - [Node.JS](https://nodejs.org/en/)
 - [NPM](https://www.npmjs.com/)
 - IDE naar keuze
 - Terminal naar keuze

1. ### **Set-up Node.JS en Git clone**
    Deze website is gemaakt aan de hand van [Node.JS](https://nodejs.org/en/). Node.JS is een runtime-omgeving in JavaScript dat asynchroon en event-driven is. Om deze op te starten moet je dus [Node.JS](https://nodejs.org/en/) en [NPM](https://www.npmjs.com/) op uw machine installeren als dit nog niet gedaan is.  

    Om te beginnen, gaan we deze repository clonen. Zorg voor een duidelijke map waar deze makkelijk terug te vinden is. 

    Voorbeeld: 

    ```
    C:/_GIT/
    ```
2. ### **Node_modules**
    Eens je alle bestanden hebt van GitHub, moet je nog de nodige **node modules** downloaden. Om dit te doen, open je best de folder in een **terminal** naar keuze. Dit kan je via Windows (Bash, cmd of Powershell ), MacOs(Terminal) of zelf via uw gekozen IDE doen. 
    ```
    npm install
    ```
3. ### **Opstarten server**
    Nu heb je al de modules en kan je te werk met de website.
    Dit doen we met Node.JS. 

    Om deze op te starten, gebruik je het **node** commando als volgt: 
    ```
    node server
    ```
    Deze commando maakt een locale server aan waar de website op staat. 

    /!\ Vergeet niet om na elke grote verandering uw server herop te starten! /!\

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

    De website is nu klaar om gebruikt te worden!

## Extra uitdaging: 

Zoals jullie misschien gaan merken, is het filter systeem dat ik op de 'Alle organisaties' pagina heb gemaakt niet zo optimaal. 
Ik zou deze graag willen verbeteren. 

Aangezien jullie de databank en onderhoud van de website gaan doen, hebben jullie meer kennis over wat jullie gaan gebruiken om de data te beheren en naar de website te sturen. Hiermee kunnen jullie een veel betere filter aanmaken die nauw samenwerkt met jullie back-end. 