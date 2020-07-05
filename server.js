const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port =  process.env.PORT || 8000;
const url = "localhost" + "/";


// Middleware

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// homepage render
app.get('/',(req, res)=>{
    res.render('index');
});
// Centra page render
app.get('/organisaties=:doelgroep&:leeftijd&:werkzaamIn', (req, res)=>{
    // Eventueel werken met parameters hier? voor filter 
    console.log(req.params)
    res.render('centra');
});

// detail pagina voor centrum 
app.get('/centrum/:centrum', (req, res)=>{
    let centrumExists = false;
    let query = req.params.centrum
    console.log(query);
    const centraList = require(__dirname + '/json/centra.json').centra;

    for(let i = 0; i <= centraList.length; i++){
        if(query == centraList[i].naam){
            let centrum = centraList[i]
            centrumExists = true;

            let centrumObject = {
                id: centrum.centra_ID,
                naam: centrum.naam,
                desc: centrum.beschrijving,
                doelgroep:  centrum.doelgroep,
                leeftijdsgroep: centrum.leeftijdsgroep,
                werkzaamIn:  centrum.regio,
                contactInfo: {
                    website:  centrum.website, 
                    tel:  centrum.telefoonnummer,
                    email:  centrum.email,
                    adres: centrum.adres
                }
            }

            res.render('centrum', {centrumExists: centrumExists, centrum: centrumObject});
            break;
        }else{
        }
    }
    res.render('centrum', {centrumExists: centrumExists});
});
// over-ons page render
app.get('/over-ons', (req, res)=>{
    res.render('over-ons');
});
// Getuigenissen pagina render 
app.get('/getuigenissen', (req, res)=>{
    res.render('getuigenissen');
});
// Post feedback
app.post('/feedbackEAH', (req, res)=>{
    
});
// centra API
app.get('/API/centra', (req, res)=>{
    res.sendFile(__dirname + '/json/centra.json');
});
// Centrum toevoegen (ENKEL VOOR ADMINPAGINA)


// getuigenissen API
app.get('/API/getuigenissen',(req, res)=>{
    res.sendFile(__dirname + '/json/getuigenissen.json');
});
// Getuigenis toevoegen (ENKEL VOOR ADMINPAGINA)

// Pagina indien er een pagina niet gevonden is
app.get('*', (req, res) => {
    res.status(404).render('error')
});

app.listen(port,() => {
    console.log("Webserver started on port: "+ port);
});