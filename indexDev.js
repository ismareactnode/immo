const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const { getApparts, postApparts, putApparts, deleteApparts } =
require('./server/controlers/appartementsControler');
const { getQuestions, postQuestions } =
require('./server/controlers/questionsControler');
const { getEstimation, postEstimation, getEstimationItem } =
 require('./server/controlers/estimationsControler');
const { getRecherches, postRecherches, getRechercheItem } =
require('./server/controlers/recherchesControler');
const { userLogin, userCreate } = require('./server/controlers/usersControler')

/*  on a installé dotenv et dans le fichier env à la racine, qui n'est plus
visible car on l'a mis dans gitignore, on rajoute la variable
DATABASE_URL à process.env, aux variables d'environnement
ainsi, non accessible pour le client .
sur heroku, dans le dashboard, on a ajouté aux variables d'environnemnet dans
la config cette clé DATABASE_URL avec en valeur l'url de la database sur
mlab */


var { mongoose, db } = require('./server/db/mongoose');
var { User } = require('./server/db/models/User');
var { Appart } = require('./server/db/models/Appart');
var { User } = require('./server/db/models/User');
var { Estimation } = require('./server/db/models/Estimation');
// var { Vendeur } = require('./server/db/models/Vendeur');
// var { Acheteur } = require('./server/db/models/Acheteur');
var { Question } = require('./server/db/models/Question');
var { Recherche } = require('./server/db/models/Recherche');
var {authenticate} = require('./server/middleware/authenticate');

const app = express();
const PORT = process.env.PORTserver || 4000;
app.listen(PORT, () => {console.log('port :', PORT);});

app.use(bodyParser.json());

/*  voici l'url de l'app déployée sur heroku*/
// const url = 'https://vast-chamber-79371.heconsole.log('server connected on port', PORT);});rokuapp.com';

app.get('/apparts', (req, res)=> {
  getApparts(req, res);
});

app.post('/apparts', authenticate, (req, res) => {
  postApparts(req, res);
});

app.put('/apparts/:id', authenticate, (req, res)=>{
  putApparts(req, res);
});

app.delete('/apparts/:id', authenticate, (req, res) => {
  deleteApparts(req, res);
});

app.get('/estimations', (req, res)=>{
  getEstimation(req, res);
});

app.get('/estimationItem/:estimation_mail', (req, res) => {
  getEstimationItem(req, res);
})
app.post('/estimation', (req, res)=>{
postEstimation(req, res);
});

app.post('/question', (req, res)=>{
  postQuestions(req, res);
});

app.get('/questions', (req, res)=>{
  getQuestions(req, res);
});

app.get('/recherches', (req, res)=>{
  getRecherches(req, res);
});

app.get('/rechercheItem/:recherche_mail', (req, res) =>{
  getRechercheItem(req, res);
})
app.post('/recherches', (req, res)=>{
  postRecherches(req, res);
});

//Création de user   (uniquement par le superAdmin) avec un autre authenticate propre à moi
app.post('/userCreation/PrivateUrlPassword', (req, res) => {
  userCreate(req, res);
});// ({_id:"5aaa4c81734d1d6b71217f6b"})

app.post('/users/login', (req, res) => {
  userLogin(req, res);
});

// app.patch('/apparts/:id', authenticate, (req, res)=>{
//   var id = req.params.id;
//   var body = _.pick(req.body, ['quartier', 'superficie', 'prix', 'genre', 'nbPieces']);
//   if(!Obconsole.log('server connected on port', PORT);});
//     return res.sendStatus(404).send('unexisting id!');
//   }kl935780@gmail.com
//   Appakl935780@gmail.comrt.findByIdAndUpdate((id), {
//     $set:{ body }
//   })
//   .thekl935780@gmail.comn(appart=>{if(!appart){
//     res.status(400).send('no apkl935780@gmail.compart!')
//     }kl935780@gmail.com
//     res.status(200).send('updated')
//   })kl935780@gmail.com
//   .catch(e=>console.log('error :', e));
// })








// app.get('/users', (req, res) => {
//   User.findById  console.log('body :', body);
// ({_id:"5aaa4c81734d1d6b71217f6b"})
//   .then((users)=>{console.log('users :', users);
// res.send(users)})kl935780@gmail.comkl935780@gmail.com
//   .catch((e)=>{console.log('error : ', e);})
// })



// app.get('/users/me', authenticate, (req, res)=>{
//   res.send(req.kl935780@gmail.com

// });
//
//
// //logdbOut
// app.delete('/users/me/token', authenticate, (req, res) => {
//   req.user.removeToken(req.token).then(()=>{
//     res.status(200).send();
//   }, () => {
//     res.status(400).send();
//   });
// });


/* on relie la racine, la page d'accueil de l'appli, à la version buildée de
react/ On relie ainsi le front au back. */
/* ici, on l'enleve car on est dans le dev, et on ne veut pas
avoir besoin de build à chaque fois */
  // app.use('/', express.static(path.join(__dirname, 'react/build')));


  /* les routes back sont gérées également, grace au proxy que l'on a déterminé
  dans le package.json de react ("proxy": "localhost://4000")
) */

/* en dev,  console.log('req.body.produit :', req.body.produit);
 on lance les 2 serveurs en mm temps, grace à concurrently ds
package.json. le 3000
se lance sur le navigateur automatiquement, mais il faut lancer
localhost:4000 car le serveur est dessus */


/*  les url farfelues sont gérées par le serveur sur node, qui balance alors
l'index.html du build de react, lequel enverra un notfound */
  // app.get('/*', (req, res)=>{
  //   res.sendFile(path.join(__dirname, 'react/build/index.html'));
  // })
