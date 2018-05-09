const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123';

bcrypt.genSalt(10, (err, salt)=>{
  bcrypt.hash(password, salt, (err, hash)=>{
    console.log(hash);
  })
})

var hashedPassword = '$2a$10$5Jl8xJompZQTgCV/asrmO.GmbC2RWhhvM8pFJkxFNZV1w2IbJqwtq';

bcrypt.compare('abc123', hashedPassword, (err, res)=>{
  console.log(res);
})

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// var decoded = jwt.verify(token, '123abc');
//
// console.log('decoded:', decoded);

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
