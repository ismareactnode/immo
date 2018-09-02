import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import Modal from 'react-modal';
import moment from 'moment-js';

import './OptionModal.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class OptionModal extends Component{

  constructor(props){
    super(props);
    this.state={
      nom: '',
      email: '',
      tel: '',
      error: false,
      invalidEmail: false
      };
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.envoyer = this.envoyer.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }

onChangeNom(e){
  const nom = e.target.value;
  this.setState(()=>({nom}));
}
onChangeEmail(e){
  const email = e.target.value;
  this.setState(()=>({email}));
}
onChangeTel(e){
  const tel = e.target.value;
  this.setState(()=>({tel}));
}

getCookie(cname){
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i <ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0) == ' ') {
           c = c.substring(1);
       }
       if (c.indexOf(name) == 0) {
           return c.substring(name.length, c.length);
       }
   }
   return "";
}


formValidate(){
  if (!this.state.nom | !this.state.email){
    this.setState(()=>({error: true}));
    setTimeout(()=>{
      this.setState(()=>({error: false}))
    }, 1000);
    return false;
  }

  if(!this.state.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
    this.setState(()=>({invalidEmail: true}));
    setTimeout(()=>{
      this.setState(()=>({invalidEmail: false}))
    },1000)
  }
  return true;
}


  envoyer(e){
    e.preventDefault();
    if(!this.formValidate()){
      console.log('error');
      this.setState(()=>({error: true}));

      setTimeout(()=>{
        this.setState(()=>({error: false}));
      }, 1000);
      return;
    }
    if(this.state.invalidEmail){
      return;
    }
    const nom = this.state.nom;
    const email = this.state.email;
    const tel = this.state.tel;

    // if((nom.length)<2 || !nom.match(/^[a-zA-Z]$/)){
    //   return console.log('nom non valide.')
    // }michemouche
    // if(mail===''){
    //   return console.log('veuillez indiquer votre mail pour qu on vous contacte.');
    // }
    document.cookie=`name=${nom}`;

    const genre = this.getCookie('genre');
    const superficie = this.getCookie('superficie');
    const renovations = this.getCookie('renovations');
    const quartier = this.getCookie('quartier');
    const date = moment().format(' DD/MM/YYYY, h:mm ');

    const produit = {
      nom,
      email,
      tel,
      genre,
      superficie,
      renovations,
      quartier,
      date
    };
    fetch('/estimation',
    {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({produit})
    })
    .then(async(res)=>{
      await this.props.notify();
      await this.props.desend();
   })
  .catch((err)=>{console.log('error :', err);})

    /* ici, je vais fetcher toutes les infos vers une route express dans laquelle
    je vais faire l'insertion dans la collection estimation
    puis je peux ensuite effacer tous les cookies en les = ''


    à part ca, dans contact : enregistrement d'une question qui sera
    enregistrée ensuite dans une collection question avec informations
     à rajouter dans le
    dashboard admin
    rajouter aussi coté visiteur un enregistrement de recherche détaillée,
    criteres, budget maximum, etc, à enregistrer dans une collection aussi
    puis avec le contact acheteur

    quant au header Admin, enlever le nav, laisser juste le nom de l'agence et
    logo , et tout à droite, le lien de déConnexion
    le dashboard aura lui 4 parties, 4 carrés, un produits, un vers une api externe
    genre stats google ou autre, le lien vers les estimations, et celui vers les
    questions, ainsi que celui pour les recherches
  */
  }

  render(){

    const {sended, desend, style } = this.props;
      return(
        <Modal
        style={style}
        isOpen={!!sended}
        onRequestClose={desend}
        contentLabel="Bien envoyé">

        <Desktop>
          <form id="modalForm">
            <div className="form-group col-sm-12 col-md-10 col-lg-6">
            <input
            className="form-control"
             type="text"
            required
            placeholder="Votre nom"
             value={this.state.nom}
             onChange={e=>this.onChangeNom(e)}/>
             </div>
            <div className="form-group col-sm-12 col-md-10 col-lg-6">
              <input
                className="form-control"
               required
               placeholder="Votre email"
               type="email"
               value={this.state.email}
               onChange={e=>this.onChangeEmail(e)}/>
              </div>
              <div className="form-group col-sm-12 col-md-10 col-lg-6">
              <input
                className="form-control"
              type="text"
              placeholder="Votre numéro de téléphone"
              value={this.state.tel}
              onChange={e=>this.onChangeTel(e)}/>
              </div>
              <button className="btn btn-primary col-sm-12 sendButton"
              onClick={this.envoyer}>Recevoir votre estimation gratuitement</button>
              <p className="errorOrNotification">
                {this.state.error ? <span className="questionError">Merci de remplir nom et email</span> : ''}

                  {this.state.invalidEmail ? <span className="questionError">Email invalide</span> : ''}
                  </p>
                    </form>
          <button type="button" className="btn btn-primary backLinkButton"
          onClick={desend}>X</button>
          </Desktop>

          <Mobile>
          <form className="modalFormMobile">
            <div className="form-group col-sm-12 col-md-10 col-lg-6 ">
            <input
            className="form-control"
             type="text"
            required
            placeholder="Votre nom"
             value={this.state.nom}
             onChange={e=>this.onChangeNom(e)}/>
             </div>
            <div className="form-group col-sm-12 col-md-10 col-lg-6">
              <input
                className="form-control"
               required
               placeholder="Votre email"
               type="email"
               value={this.state.email}
               onChange={e=>this.onChangeEmail(e)}/>
              </div>
              <div className="form-group col-sm-12 col-md-10 col-lg-6">
              <input
                className="form-control"
              type="text"
              placeholder="Votre numéro de téléphone"
              value={this.state.tel}
              onChange={e=>this.onChangeTel(e)}/>
              </div>
              <button className="btn btn-primary col-sm-12 sendButtonMobile"
              onClick={this.envoyer}>Recevoir votre estimation</button>
              <p className="errorOrNotification">
                {this.state.error ? <span className="questionError">Merci de remplir nom et email</span> : ''}

                  {this.state.invalidEmail ? <span className="questionError">Email invalide</span> : ''}
                  </p>          </form>

          </Mobile>
        </Modal>
      );
  };
}

export default connect(null, null)(OptionModal);
