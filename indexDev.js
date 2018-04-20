const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

/*  on a installé dotenv et dans le fichier env à la racine, qui n'est plus
visible car on l'a mis dans gitignore, on rajoute la variable
DATABASE_URL à process.env, aux variables d'environnement
ainsi, non accessible pour le client .
sur heroku, dans le dashboard, on a ajouté aux variables d'environnemnet dans
la config cette clé DATABASE_URL avec en valeur l'url de la database sur
mlab */

require('dotenv').config();

var { mongoose, db } = require('./server/db/mongoose');
var { Appart } = require('./server/db/models/Appart');
var { User } = require('./server/db/models/User');

const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => { console.log('server connected on port', PORT);});

app.use(bodyParser.json());

/*  voici l'url de l'app déployée sur heroku*/
// const url = 'https://vast-chamber-79371.herokuapp.com';


app.get('/apparts', (req, res)=> {
  Appart.find()
  .then((apparts)=>{res.send(apparts)})
  .catch((e)=>{res.status(400).send('error : ', e);})
});


app.post('/addAppart', (req, res) => {
  var body = _.pick(req.body, ['genre', 'quartier', 'superficie', 'prix', 'nbPieces']);
  var appart = new Appart(body);
  appart.save()
  .then((appart)=>{res.status(200).send(appart)})
  .catch((err)=>{res.status(404).send('error : ', err)});
});

app.patch('/apparts/:id', (req, res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['quartier', 'superficie', 'prix', 'genre', 'nbPieces']);
  if(!ObjectID.isValid(id)){
    return res.sendStatus(404).send('unexisting id!');
  }
  Appart.findByIdAndUpdate((id), {
    $set:{ body }
  })
  .then(appart=>{if(!appart){
    res.status(400).send('no appart!')
    }
    res.status(200).send('updated')
  })
  .catch(e=>console.log('error :', e));
})

app.delete('/apparts/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.sendStatus(404).send('unexisting id!');
  }
  Appart.findByIdAndRemove(id)
  .then(res.status(200).send(`appart ${id} removed`))
  .catch((e)=>console.error(e));
});

app.put('/apparts/:id', (req, res)=>{
  var id = req.params.id;
    if(!ObjectID.isValid(id)){
      return res.sendStatus(404).send('unexisting id!');
    }
    var updates = req.body;
  Appart.findByIdAndUpdate(id,
   {$set:updates},
   {new: true}
 )
  .then(appart => {
    if(!appart){
      return res.status(404).send('pas d\'appart');
    }
    res.status(200).send('updated!');
  })
  .catch((e)=>res.status(400).send('error :', e));
});





app.get('/', (req,res) => {
  res.send('ceci est le back, mec.');
})


// app.get('/users', (req, res) => {
//   User.findById({_id:"5aaa4c81734d1d6b71217f6b"})
//   .then((users)=>{console.log('users :', users);
// res.send(users)})
//   .catch((e)=>{console.log('error : ', e);})
// })


//
// app.post('/users', (req, res) => {
//   var body = _.pick(req.body, ['email', 'password']);
//   var user = new User(body);
//   user.save()
//   .then((user)=>{res.send('inserted : ', user)})
//   // .catch((err)=>{res.status(400).send('error : ', err)});
//   })


/* on relie la racine, la page d'accueil de l'appli, à la version buildée de
react/ On relie ainsi le front au back. */
/* ici, on l'enleve car on est dans le dev, et on ne veut pas
avoir besoin de build à chaque fois */
  // app.use('/', express.static(path.join(__dirname, 'react/build')));


  /* les routes back sont gérées également, grace au proxy que l'on a déterminé
  dans le package.json de react ("proxy": "localhost://4000")
) */

/* en dev, on lance les 2 serveurs en mm temps, grace à concurrently ds
package.json. le 3000
se lance sur le navigateur automatiquement, mais il faut lancer
localhost:4000 car le serveur est dessus */


/*  les url farfelues sont gérées par le serveur sur node, qui balance alors
l'index.html du build de react, lequel enverra un notfound */
  // app.get('/*', (req, res)=>{
  //   res.sendFile(path.join(__dirname, 'react/build/index.html'));
  // })
