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
  const estimation_id = req.params.estimation_id.toString();
    Recherche.findOne({_id: estimation_id})
    .then((estimation)=>{
      console.log('succes');
      res.status(200).send(estimation);
    })
    .catch((e)=>{console.log('error :', e)});
}





const postEstimation = (req, res) => {
  if(req.body.produit.genre === ''){
    req.body.produit.genre = 'Appartement';
  };

  const estimation = req.body.produit;
  let recherche = [];
  const genre = estimation.genre;
  const quartier = estimation.quartier;

 let superficie = parseInt(estimation.superficie);
 let superficieMin = superficie *= 0.9;


    estimation.recherche = recherche;
       var nouvelleEstimation = new Estimation(estimation);
      nouvelleEstimation.save()
      .then((nouvelleEstimation)=>{

        Recherche.find({quartier, genre})
        .then((results)=>{
          results.forEach((searched)=>{
            console.log('searched', searched);
            recherche.push(searched.mail);
            Recherche.findById(searched._id)
              .then((rechercheMatched)=>{
                console.log('rechercheMatched', rechercheMatched);

                let estimated = rechercheMatched.estimation;
                estimated.push(nouvelleEstimation._id);
                console.log('estimation._id', nouvelleEstimation._id);
                console.log('estimated :', estimated);
                var id = rechercheMatched._id.toString();
                Recherche.findByIdAndUpdate(id,
                  {$set: {estimation: estimated} },
                  {new:true}
                )
                .then((updated)=>console.log('updated recherche :',
              updated))
              .catch((e)=>console.log('error',e));
            });
           });
        });
        res.send(nouvelleEstimation);
      })
.catch((err)=>{console.log('error : ', err);});
}

module.exports = { getEstimation, postEstimation, getEstimationItem }
