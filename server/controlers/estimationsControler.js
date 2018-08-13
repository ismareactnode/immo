var { mongoose } = require('../db/mongoose');
var { Estimation } = require('../db/models/Estimation');
var { Recherche } = require('../db/models/Recherche');

const getEstimation = (req, res) => {
  Estimation.find()
 .then((estimations) => {
   res.status(200).send(estimations);
 })
 .catch((err)=>{
   res.status(400).send('error :',err);
 });
}

const getEstimationItem = (req, res) => {
  const estimation_mail = req.params.estimation_mail.toString();
  console.log(`estimation_mail : ${req.params.estimation_mail}`);
    Recherche.findOne({mail: estimation_mail})
    .then((estimation)=>{
      res.status(200).send(estimation);
    })
    .catch((e)=>{console.log('error :', e)});
}

const postEstimation = (req, res) => {

  if(req.body.produit.genre === ''){
    req.body.produit.genre = 'appartement';
  };

  const estimation = req.body.produit;
  console.log(`estimation: ${estimation}`);
 let matchingRecherches = [];

 const renovations = estimation.renovations;
 const superficieMin = parseInt(estimation.superficie);
Recherche.find({quartier: estimation.quartier, superficie: {$gt:superficieMin}})
.then((results)=>{
  results.forEach((recherche)=>{
    matchingRecherches.push(recherche.mail);
  })
    estimation.recherche = matchingRecherches;
       var nouvelleEstimation = new Estimation(estimation);
      nouvelleEstimation.save()
      .then((nouvelleEstimation)=>{
        console.log('estimation enregistrée :', estimation);
        res.send(nouvelleEstimation);
      })
    })
.catch((err)=>{console.log('error : ', err);});
}

module.exports = { getEstimation, postEstimation, getEstimationItem }
