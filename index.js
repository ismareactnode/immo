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



/*  voici l'url de l'app déployée sur heroku*/
// const url = 'https://vast-chamber-79371.herokuapp.com';


app.get('/apparts', (req, res)=> {
  User.find()
  .then((docs)=>{res.send(docs)})
  .catch((e)=>{res.status(400).send('error : ', e);})
});


app.post('/apparts', (req, res) => {
  User.insert({quartier: 'boulmiche',
                superficie: 45}), (result)=>{
                res.send(result);
                  }
})



// app.get('/users', (req, res) => {
//   User.findById({_id:"5aaa4c81734d1d6b71217f6b"})
//   .then((users)=>{console.log('users :', users);
// res.send(users)})
//   .catch((e)=>{console.log('error : ', e);})
// })

app.get('/users/:id', (req, res) => {
  const _id = req.params.id;
  User.findById({_id})
  .then((users)=>{console.log('users :', users);
res.send(users)})
  .catch((e)=>{console.log('error : ', e);})
})

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);
  user.save()
  .then((user)=>{res.send('inserted : ', user)})
  // .catch((err)=>{res.status(400).send('error : ', err)});
  })


/* on relie la racine, la page d'accueil de l'appli, à la version buildée de
react/ On relie ainsi le front au back. */
  app.use('/', express.static(path.join(__dirname, 'react/build')));


  /* les routes back sont gérées également, grace au proxy que l'on a déterminé
  dans le package.json de react ("proxy": "localhost://4000")
) */

/* en dev, on lance les 2 serveurs en mm temps, grace à concurrently. le 3000
se lance sur le navigateur automatiquement, mais il faut lancer
localhost:4000 car le serveur est dessus */


/*  les url farfelues sont gérées par le serveur sur node, qui balance alors
l'index.html du build de react, lequel enverra un notfound */
  app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'react/build/index.html'));
  })
