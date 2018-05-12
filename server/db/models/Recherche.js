var { mongoose } = require('../mongoose');

var Recherche = mongoose.model('Recherche',{
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
  quartier:{
    type: String,
    required: true
  },
  etat: {
    type: String
  },
  budget_max:{
    type: Number
  }
});
