const { mongoose } = require('../server/db/mongoose');
const { Appart } = require ('../server/db/models/Appart');
const { ObjectID } = require('mongodb');

var id = '5aa709fd992f9857b8feef96';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}
Appart.findById(id)
  .then((appart) => {
      if(!appart){
        return console.log('id not found');
      }
    console.log('appart : ', JSON.stringify(appart, undefined, 2))
});
