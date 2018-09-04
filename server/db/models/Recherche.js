var { mongoose } = require('../mongoose');
var { Estimation } = require('./Estimation');
const validator = require ('validator');

var Recherche = mongoose.model('Recherche',{
  genre:{
    type: String,
    // required: true,
    default: 'appartement',
    minlength: 3,
  },
  superficie: {
    type: Number,
    // required: true,
    default: 0
  },
  quartier: {
    type: String,

    // required: true
  },
  budget:{
    type: Number
  },
  nom:{
    type: String,
    // required: true
  },
  mail: {
    type: String,
    minlength: 2,
    trim: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} : Adresse email invalide.'
    }
  },
  tel:{
    type: String,
    // required: true
  },
  precision:{
    type: String
  },
  date: {
    type: String
  },
  appart: {
    type: Array
  },
  estimation :
   [{
     type: mongoose.Schema.Types.ObjectId , ref: 'Estimation'
   }],
   estimationsMail :{
     type: Array
   }
});

module.exports = { Recherche };
