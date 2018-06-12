var { mongoose, db } = require('../db/mongoose');
var { Question } = require('../db/models/Question');

const getQuestions = (req, res) => {
  Question.find()
  .then((questions) => {
    res.status(200).send(questions);
  })
.catch((err)=>{
  res.status(400).send();
});
}

const postQuestions = (req, res) => {
  const {nom, mail, interrogation, date} = req.body;
console.log(`nom:${nom}, mail:${mail}, interrogation:${interrogation}`);
  var nouvelleQuestion = new Question({nom, mail, interrogation, date});
  console.log(nouvelleQuestion);
  nouvelleQuestion.save().then((nouvelleQuestion)=>{
    res.send(nouvelleQuestion);
  }).catch((err)=>{console.log('error : ', err);});
}

module.exports = {
  getQuestions,
  postQuestions,
}
