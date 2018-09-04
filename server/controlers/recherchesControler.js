
var { mongoose, db } = require('../db/mongoose');
var { Recherche } = require('../db/models/Recherche');
var { Appart } = require('../db/models/Appart');
var { Estimation } = require('../db/models/Estimation');

const getRecherches = (req, res) => {
  Recherche.find()
  .populate({path:'estimation', select: 'email'})
 .then((recherches) => {
   res.status(200).send(recherches);
 })
 .catch((err)=>{
   res.status(400).send('error :',err);
 });
}

const getRechercheItem = (req, res) => {
const recherche_mail = req.params.recherche_mail.toString();
console.log(`recherche_mail : ${req.params.recherche_mail}`);
  Recherche.findOne({mail: recherche_mail})
  .then((recherche)=>{
    console.log(`rechercheItem : ${recherche}`);
    res.status(200).send(recherche);
  })
  .catch((e)=>{console.log('error :', e)});
}

const postRecherches = (req, res) =>   {
  let appart = [];
  let estimation = [];
  var recherche = req.body.recherche;
  var mail = recherche.mail;

  if (recherche.genre === ''){
    recherche.genre = 'appartement';
  }
recherche.appart=[];
recherche.estimation=[];
recherche.estimationsMail=[];
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
      product.recherche.push(mail);
      let id = product._id.toString();
      Appart.findByIdAndUpdate(id,
      {$set: product },
      {new: true}
      )
      .then((appartUpdated)=>console.log('appart updated : ', appartUpdated))
      .catch((e)=>console.log('error : ', e));
      });
  })
.then(()=>{
  Estimation.find({genre, quartier, superficie: {$gt: superficieMin}})
  .then((results)=>{
    console.log('une estim correspond à cette recherche');
    results.forEach((estimated)=>{
      estimation.push(estimated._id);
      Estimation.findById(estimated._id)
      .then((estimationSearched)=>{
        estimationSearched.recherche.push(mail);
      estimationSearched.recherche;
      var id = estimated._id.toString();
        Estimation.findByIdAndUpdate(id,
            {$set: estimationSearched},
            {new:true}
            )
            .then((updated)=>console.log('updated estimation : ', updated))
            .catch((e)=>console.log('error : ', e));
        });
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
  getRechercheItem
}
