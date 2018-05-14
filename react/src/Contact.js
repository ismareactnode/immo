import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
  constructor(props){
    super(props);
    this.state={
      nom: '',
      mail: '',
      interrogation: ''
    };
  }
onChangeNom(e){
  const nom = e.target.value;
  this.setState(()=>({nom}))
}
onChangeMail(e){
  const mail = e.target.value;
  this.setState(()=>({mail}));
}
onChangeInterrogation(e){
  const interrogation = e.target.value;
  this.setState(()=>({interrogation}));
}
envoyerQuestion(e){
  e.preventDefault();
    const nom = this.state.nom;
    const mail = this.state.mail;
    const interrogation = this.state.interrogation;
  fetch('/question',
  {
    method: 'POST',
    headers:{
      'Accept' : 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({nom, mail, interrogation})
  })
  .then((question)=>{
    this.setState(()=>({
      nom: '',
      mail: '',
      interrogation: ''
    }));
    console.log('bien envoyé coté front retour')})
  .catch((err)=>{console.log('error : ', err);})
}
render(){

  return(
    <div id="Contact">

      <div id="gauche">

        <div id="formQuestion">
          <h3>Posez votre question</h3>
          <form onSubmit={e=>this.envoyerQuestion(e)}>
          <p><label>Votre nom : </label>
          <input
          onChange={e=>this.onChangeNom(e)}
          value={this.state.nom}
          type="text" required /></p>

          <p><label>Votre email : </label>
          <input
          onChange={e=>this.onChangeMail(e)}
          value={this.state.mail}
          type="text" required /></p>
          <p><label>Votre question : </label>
          <textarea
          onChange={e=>this.onChangeInterrogation(e)}
          value={this.state.interrogation}
          ></textarea></p>
            <p><button type="submit">Envoyer</button></p>
          </form>
        </div>

        <div id="message">
          <h3>Votre expert vous répond de façon</h3>
          <h3>immédiate et gratuite</h3>
        </div>
      </div>

      <div id="droite">
         <div id="mail"><img src="iconeMail7.png" />
           <a href="mailto:kl935780@gmail.com">kl935780@gmail.com</a>
         </div>

        <div id="tel"><img src="iconeTel2.png" alt="tel"/>
          06 75 40 25 00
        </div>
      </div>
    </div>
  );
  }
}

export default Contact;