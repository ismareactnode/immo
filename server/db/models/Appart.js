var {mongoose} = require('../mongoose');

var Appart = mongoose.model('Appart',{
  quartier: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  superficie: {
    type: Number,
    required: true
  },
  prix: {
    type: Number
  }
  // nbPieces: {
  //   type: Number,
  //   min: 1,
  // },
  // etage: {
  //   type: Number,
  // },
  // prix: {
  //   type: Number,
  //   required,
  // }
});

module.exports={Appart};
