var { mongoose } = require('../mongoose');

var Estimation = mongoose.model('Estimation',{
  genre:{
    type: String,
    required: true,
    default: 'appartement',
    minlength: 3,
  },
  superficie: {
    type: Number,
    required: true,
    default: 0
  },
  ville: {
    type: String,
    required: true
  },
  rue: {
    type: String
  },
  numero: {
    type: Number
  },
  etat: {
    type: String
  },
  vendeur_id: {
    type: String,
    required: true,
  }
});
