var { mongoose } = require('../mongoose');
const validator = require ('validator');

var Estimation = mongoose.model('Estimation',{
  genre:{
    type: String,
    required: true,
    default: 'appartement',
    // minlength: 3,
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
  renovations: {
    type: String,
    required: true
  },
  quartier: {
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
  email: {
    type: String,
    minlength: 2,
    trim: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} : Adresse email invalide.'
    }
  },
  date:{
    type: String,
  },
  recherche:{
    type: Array,
  }
});

var exemple = new Estimation({
  genre: 'genre',
  etat: 'etat',
  superficie: 'superficie',
  renovations: 'renovations',
  quartier: 'quartier',
  nom: 'nom',
  tel: 'tel',
  email: 'email',
  date: ''
});
exemple.save();

module.exports={Estimation};
