var {mongoose} = require('../mongoose');

var Appart = mongoose.model('Appart',{
  genre:{
    type: String,
    default: 'appartement',
    required: true,
    minlength: 3,
    trim: true
  },
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
  },
  nbPieces: {
    type: String,
  },
  photo: {
      type: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
  }
  // etage: {
  //   type: Number,
  // },
  // prix: {
  //   type: Number,
  //   required,
  // }
});

module.exports={Appart};
