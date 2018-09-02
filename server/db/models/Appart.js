var {mongoose} = require('../mongoose');

var Appart = mongoose.model('Appart',{
  genre:{
    type: String,
    default: 'Appartement',
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
  descriptif: {
    type: String
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
  recherche: {
    type: Array,
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
