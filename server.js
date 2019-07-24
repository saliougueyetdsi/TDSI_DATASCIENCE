//installation du serveur express
const express = require('express');
const path = require('path');

const app = express();

// Ne servir que les fichiers statiques du répertoire dist
app.use(express.static(__dirname + '/dist/dataanalysis'));

app.get('/*all', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/dataanalysis/index.html'));
});

// Lancez l'application en écoutant sur le port Heroku par défaut
app.listen(process.env.PORT || 8080);