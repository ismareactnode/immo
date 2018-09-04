var {mongoose} = require ('../mongoose');
const validator = require ('validator');

var Question =  mongoose.model('Question', {
  nom: {
    type: String
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
  interrogation:{
    type: String,
    required: true
  }
});

module.exports = { Question };
