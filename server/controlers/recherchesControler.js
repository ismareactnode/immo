
var { mongoose, db } = require('../db/mongoose');
var { Recherche } = require('../db/models/Recherche');
var { Appart } = require('../db/models/Appart');
var { Estimation } = require('../db/models/Estimation');

const getRecherches = (req, res) => {
  Recherche.find()
  .populate({path:'estimation', select: 'email'})
 .then((recherches) => {
   console.log(`recherches:${recherches}`);
   res.status(200).send(recherches);
 })
 .catch((err)=>{
   res.status(400).send('error :',err);
 });
}

const postRecherches = (req, res) =>   {
  let appart = [];
  let estimation = [];
  var recherche = req.body.recherche;
  if (recherche.genre === ''){
    recherche.genre = 'appartement';
  }
recherche.appart=[];
recherche.estimation=[];
Object.values(recherche).forEach((data)=>console.log(data));
const genre = recherche.genre;
const quartier = recherche.quartier;
const budget = recherche.budget;

let prixMin = parseInt(budget);
prixMin *= 0.8;
let prixMax = parseInt(budget)
prixMax *= 1.2;

let superficie = parseInt(recherche.superficie);
let superficieMin = superficie *= 0.9;

Appart.find({genre, quartier, prix:{$gt: prixMin, $lt: prixMax}, superficie: {$gt: superficieMin}})
.then((results)=>{
results.forEach((product)=>{
  appart.push(product._id);
  });
})
.then(()=>{
  Estimation.find({genre, quartier, superficie: {$gt: superficieMin}})
  .then((results)=>{
  results.forEach((estimated)=>{
    estimation.push(estimated._id);
    });
    recherche.appart = appart;
    recherche.estimation = estimation;
    var nouvelleRecherche = new Recherche(recherche);
    nouvelleRecherche.save()
    .then((nouvelleRecherche)=>{
      res.send(nouvelleRecherche);
    });
  })
})
.catch((e)=>console.log('errorrr : ', e));
}

module.exports = {
  getRecherches,
  postRecherches,
}
