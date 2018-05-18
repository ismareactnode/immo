import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment-js';

import { connected } from './actions/connectedAction';

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
  componentWillMount(){
    this.props.connected();
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
    const date = moment().format(' DD/MM/YYYY, h:mm ');
  fetch('/question',
  {
    method: 'POST',
    headers:{
      'Accept' : 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({nom, mail, interrogation, date})
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


        <div id="formQuestion" className="col-sm-12 col-md-6">
          <h3>Posez votre question</h3>
          <form onSubmit={e=>this.envoyerQuestion(e)}>
          <div className="form-group">
          <label>Votre nom : </label>
          <input
          className="form-control"
          onChange={e=>this.onChangeNom(e)}
          value={this.state.nom}
          type="text" required />
          </div>
            <div className="form-group">
            <label>Votre email : </label>
          <input
            className="form-control"
          onChange={e=>this.onChangeMail(e)}
          value={this.state.mail}
          type="text" required />
          </div>
            <div className="form-group">
          <label>Votre question : </label>
          <textarea
            className="form-control"
          onChange={e=>this.onChangeInterrogation(e)}
          value={this.state.interrogation}
          ></textarea></div>
            <p><button className="btn btn-primary btn-" type="submit">Envoyer</button></p>
          </form>
        </div>

        <div id="message" className="col-sm-12 col-md-6">
          <h3>Votre expert vous répond de façon immédiate et gratuite</h3>
        </div>

         <div id="mail" className="col-sm-12 col-md-6"><img src="iconeMail7.png" />
           <a href="mailto:kl935780@gmail.com">kl935780@gmail.com</a>
         </div>

        <div id="tel" className="col-sm-12 col-md-6"><img src="iconeTel22.png" alt="tel"/>
          06 75 40 25 00
        </div>

    </div>
  );
  }
}

export default connect(null, {connected})(Contact);
