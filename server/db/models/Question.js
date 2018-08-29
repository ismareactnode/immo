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

var exemple = new Question({
  nom: 'zorro',
  mail: 'zorro@gmail.com',
  interrogation: 'ca a marché?'
})
exemple.save();
module.exports = { Question };
