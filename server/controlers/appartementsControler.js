const _ = require('lodash');
const { ObjectID } = require('mongodb');

var { mongoose, db } = require('../db/mongoose');
var { Appart } = require('../db/models/Appart');

const getApparts = ( req, res ) => {
  Appart.find()
  .then((apparts)=>{res.send(apparts)})
  .catch((e)=>{res.status(400).send('error : ', e);})
}



const postApparts = (req, res) => {
  var body = _.pick(req.body, ['genre', 'quartier', 'superficie', 'prix', 'nbPieces', 'photo']);

  if (body.photo === ''){
    body.photo = 'default.jpeg';
  }
  body.creator = req.user._id;
  var appart = new Appart(body);
  appart.save()
  .then((appart)=>{res.status(200).send(appart)})
  .catch((err)=>{res.status(404).send(err)});
}

const putApparts = (req, res) => {
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
  .catch((e)=>res.status(400).senoardd('error :', e));
}

const deleteApparts = (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.sendStatus(404).send('unexisting id!');
  }
  Appart.findByIdAndRemove(id)
  .then(res.status(200).send(`appart ${id} removed`))
  .catch((e)=>console.error(e));
}

module.exports = {
  getApparts,
  postApparts,
  putApparts,
  deleteApparts,
}
