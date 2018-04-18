const { mongoose } = require('../server/db/mongoose');
const { Appart } = require ('../server/db/models/Appart');
const { ObjectID } = require('mongodb');

var id = '5aa6af7883f9172bb0452401';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}
Appart.findOneAndRemove({_id: id})
  .then((result) => {
      if(!result){
        return console.log('id not found');
      }
    console.log(result);
});
