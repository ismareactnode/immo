const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
var decoded = jwt.verify(token, '123abc');

console.log('decoded:', decoded);

// var data = {
//   pseudo,
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'someSecret').toString()
// }
//
// data.pseudo = 'alputch';
// var resultHash = SHA256(JSON.stringify(token.data)+'someSecret').toString();
// if(resultHash===token.hash){
//   console.log('authentifié, data not changed');
// }else{
//   console.log('data have changed. Connexion refused.');
// };
