var { mongoose } = require('../mongoose');
const validator = require ('validator');

var Vendeur = mongoose.model('Vendeur', {
  nom:{
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email: {
      type: String,
      minlength: 2,
      trim: true,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email.'
      }
  },
  tel: {
    type: String
  },
  projet: {
    type: String
  },
  bien_id: {
    type: String,
    required: true
  }
});
module.exports= { Vendeur };
