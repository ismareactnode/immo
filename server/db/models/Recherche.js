var { mongoose } = require('../mongoose');

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
  proximite: {
    type: String,
    // required: true
  },
  quartier:{
    type: String,
    // required: true
  },
  etat: {
    type: String
  },
  budget:{
    type: Number
  },
  nom:{
    type: String,
    // required: true
  },
  mail:{
    type: String,
    // required: true
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
  matchingProducts: {
    type: Array
  },
  matchingEstimations : {
    type: Array
  }
});

module.exports = { Recherche };
