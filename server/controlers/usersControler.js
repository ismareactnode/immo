var _ = require('lodash');

var { mongoose } = require('../db/mongoose');
var { User } = require('../db/models/User');


const userLogin = (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  console.log('body', body);
  User.findByCredentials(body.email, body.password)
  .then((user)=>{
  return user.generateAuthToken().then(token =>{
    res.header('x-auth', token).send(user);
   })
   })
 .catch((e)=>{
  console.log('wrong user!!!!');
  res.status(400).send();
  });
}

const userCreate = (req, res) => {
  var body = _.pick(req.body, ['email', 'password', 'name']);
  var user = new User(body);
  user.save().then((user)=>{
  //   return user.generateAuthToken();
  // }).then((token)=>{
    // res.header('x-auth', token).send(user);
    res.send(user);
  })
  .catch((e)=>{
    console.log('error : ', e);
    res.status(400);
});
}

module.exports = {
  userLogin,
  userCreate,
}
