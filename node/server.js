const express = require('express');
const fs = require('fs'); //! install fs with node!
const app = express();
const port = 3000;

app.get('/', (req, res) => 
    es.send('Hello World!')
);

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`)
);