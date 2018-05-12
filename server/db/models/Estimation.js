var { mongoose } = require('../mongoose');

var Estimation = mongoose.model('Estimation',{
  genre:{
    type: String,
    required: true,
    default: 'appartement',
    minlength: 3,
    trim: true
  },
  etat: {
    type: String
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
  nom: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  tel: {
    type: String,
  },
  mail: {
    type: String,
  }
});

var exemple = new Estimation({
  genre: 'genre',
  etat: 'etat',
  superficie: 'superficie',
  ville: 'ville',
  rue: 'rue',
  nom: 'nom',
  tel: 'tel',
  mail: 'mail'
});
exemple.save();

module.exports={Estimation};
