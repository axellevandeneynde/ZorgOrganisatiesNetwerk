const express = require('express');
const app = express();
const path = require('path');

const port = 8000;
const url = "localhost" + "/";


// Middleware

// homepage render
app.get('/',()=>{
    
})
// Centra page render
app.get('/organisaties', ()=>{

})
// detail pagina voor centrum 
app.get('/centrum/:name', ()=>{

})
// over-ons page render
app.get('/over-ons', ()=>{
    
})
// Getuigenissen pagina render 
app.get('/getuigenissen', ()=>{
    
})
// Post feedback
app.post('/feedbackEAH', ()=>{
    
})
// centra API
app.get('/API/centra', ()=>{
    
})
// Centrum toevoegen (ENKEL VOOR ADMINPAGINA)


// getuigenissen API
app.get('/API/getuigenissen',()=>{
    
})
// Getuigenis toevoegen (ENKEL VOOR ADMINPAGINA)



app.listen(port,() => {
    console.log("Webserver started on port: "+ port);
});