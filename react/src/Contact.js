import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment-js';
import Responsive from 'react-responsive';

import { connected } from './actions/connectedAction';

import './Contact.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

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
    <div className="contactContainer">

    <Desktop>
    <div id="Contact">
        <div id="formQuestion" className="col-sm-12 col-md-6">
            <form onSubmit={e=>this.envoyerQuestion(e)}>
              <h3>Posez votre question</h3>
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
            <textarea rows="4" cols="20"
              className="form-control"
            onChange={e=>this.onChangeInterrogation(e)}
            value={this.state.interrogation}
            ></textarea></div>
            <button className="btn btn-primary form-control btn-lg questionButton" type="submit">Envoyer</button>
            </form>
        </div>

        <div id="message" className="col-sm-12 col-md-6">

          <h3>Contact</h3>
           <div className="messagePart">
             <div className="contactMail">
               <span className="glyphicon glyphicon-envelope mailIcone"></span>
             </div>
             <div className="contactMail">
               <a href="mailto:immo-devaux@wanadoo.fr">immo-devaux@wanadoo.fr</a>
            </div>
           </div>
           <div className="messagePart">
             <div className="contactNumero"><span className="glyphicon glyphicon-earphone mailIcone"></span></div>
              <div className="contactNumero"><p>01 48 40 44 11</p></div>
          </div>
          <div className="messagePart">
            Votre expert vous répond de façon immédiate et gratuite</div>
          </div>
    </div>
    </Desktop>

    <Mobile>
    <div id="ContactMobile">
        <div id="formQuestionMobile" className="col-sm-12 col-md-6">
            <form onSubmit={e=>this.envoyerQuestion(e)}>
              <h3>Posez votre question</h3>
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
            <textarea rows="4" cols="20"
              className="form-control"
            onChange={e=>this.onChangeInterrogation(e)}
            value={this.state.interrogation}
            ></textarea></div>
            <button className="btn btn-primary form-control
             btn-lg questionButtonMobile" type="submit">Envoyer</button>
            </form>
        </div>

        <div id="messageMobile" className="col-sm-12 col-md-6">

          <h3>Contact</h3>
           <div className="messagePartMobile">
             <div className="contactMailMobile">
               <span className="glyphicon glyphicon-envelope mailIconeMobile"></span>
             </div>
             <div className="contactMailMobile">
               <a href="mailto:immo-devaux@wanadoo.fr">immo-devaux@wanadoo.fr</a>
            </div>
           </div>
           <div className="messagePartMobile">
             <div className="contactNumeroMobile"><span className="glyphicon glyphicon-earphone mailIconeMobile"></span></div>
              <div className="contactNumeroMobile"><p>01 48 40 44 11</p></div>
          </div>
          <div className="messagePartMobile">
            Votre expert vous répond de façon immédiate et gratuite</div>
          </div>
    </div>
    </Mobile>

    </div>
  );
  }
}

export default connect(null, {connected})(Contact);
