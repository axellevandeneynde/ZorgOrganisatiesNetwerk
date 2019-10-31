'use strict';
const express = require('express');
const fs = require('fs'); //! install fs with node!
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => 
    res.send('Hello World!')
);

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`)
);

app.get('/getCentra', (req, res) => 
fs.readFileSync('json/centra.json', 'utf8', function(error, data){
    res.json(JSON.parse(data));
}));

app.post('/insertCentrum', (req, res) => {
    console.log('insert triggered!');
    var data = JSON.stringify(req.body);
    var file = JSON.parse(fs.readFileSync('json/centra.json', 'utf8'));
    console.log(data, file);
	var newCentraID = req.body.centra_ID;
    var arr = file.centra;
    console.log(arr)
    var dataString = JSON.parse(data);
    arr.push(dataString);
    file.centra = arr;
    
    fs.writeFile('json/centra.json', JSON.stringify(file), function(err){
       if (err) throw err;
    });
	
    res.send('OK');
});
