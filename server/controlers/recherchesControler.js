
var { mongoose, db } = require('../db/mongoose');
var { Recherche } = require('../db/models/Recherche');


const getRecherches = (req, res) => {
  Recherche.find()
 .then((recherches) => {
   res.status(200).send(recherches);
 })
 .catch((err)=>{
   res.status(400).send('error :',err);
 });
}

const postRecherches = (req, res) =>   {
  var recherche = req.body.recherche;
  if (recherche.genre === ''){
    recherche.genre = 'appartement';
  }
   var nouvelleRecherche = new Recherche(recherche);
  nouvelleRecherche.save().then((nouvelleRecherche)=>{
    res.send(nouvelleRecherche);
  }).catch((err)=>{console.log('error : ', err);});
}

module.exports = {
  getRecherches,
  postRecherches,
}
