const { mongoose } = require('../server/db/mongoose');
const { Appart } = require ('../server/db/models/Appart');
const { ObjectID } = require('mongodb');

var id = '5aa6bc77037ffe338ccf499a';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}
Appart.findByIdAndUpdate((id), {$set: {quartier: 'bahamas'}}, {new: true})
  .then((appart) => {
    if(!appart){
      return res.status(404).send('bad id');
    }
    console.log('appart : ', appart);
});
