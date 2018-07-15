var { mongoose } = require('../db/mongoose');
var { Estimation } = require('../db/models/Estimation');

const getEstimation = (req, res) => {
  Estimation.find()
 .then((estimations) => {
   res.status(200).send(estimations);
 })
 .catch((err)=>{
   res.status(400).send('error :',err);
 });
}



const postEstimation = (req, res) => {

  if(req.body.produit.genre === ''){
    req.body.produit.genre = 'appartement';
  };

  if(req.body.produit.etat === ''){
    req.body.produit.etat = 'moyen';
  };
  const { genre, etat, superficie, quartier } = req.body.produit;
  console.log(genre, etat, superficie, quartier );



  var produit = req.body.produit;

   var nouvelleEstimation = new Estimation(produit);

  nouvelleEstimation.save().then((nouvelleEstimation)=>{
    res.send(nouvelleEstimation);
  }).catch((err)=>{console.log('error : ', err);});
}

module.exports = { getEstimation, postEstimation }
