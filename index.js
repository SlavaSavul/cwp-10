const express = require('express');
var bodyParser = require("body-parser");
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var jsonParser = bodyParser.json();

try{

    app.get('/api/films/readall', routes.readAll);
    app.get('/api/films/read', routes.read);
    app.post('/api/films/create',jsonParser, routes.create);
    app.post('/api/films/update',jsonParser, routes.update);
    app.post('/api/films/delete',jsonParser, routes.delete);

    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
      })
}
catch(error){
    console.log(error);
}

