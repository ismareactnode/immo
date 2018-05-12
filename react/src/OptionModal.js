import React, { Component } from 'react';
import Modal from 'react-modal';
import './OptionModal.css';


class OptionModal extends Component{

  constructor(props){
    super(props);
    this.state={
      nom: '',
      mail: '',
      tel: ''
    };
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.envoyer = this.envoyer.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }

onChangeNom(e){
  const nom = e.target.value;
  this.setState(()=>({nom}));
}
onChangeMail(e){
  const mail = e.target.value;
  this.setState(()=>({mail}));
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

  envoyer(){
    const nom = this.state.nom;
    const mail = this.state.mail;
    const tel = this.state.tel;

    const genre = this.getCookie('genre');
    const superficie = this.getCookie('superficie');
    const ville = this.getCookie('ville');
    const rue = this.getCookie('rue');

    console.log(nom, mail, tel, genre, superficie, ville, rue);

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
    const {sended, desend, envoyer} = this.props;
      return(
        <Modal
        isOpen={!!sended}
        onRequestClose={desend}
        contentLabel="Bien envoyé">
          <h1>Pour recevoir votre estimation gratuitement</h1>
          <h2>dans les 24 heures</h2>
          <form id="modalForm">
            <label>Votre nom</label>
            <input
             type="text"
             value={this.state.nom}
             onChange={e=>this.onChangeNom(e)}/>
            <label>Votre adresse mail</label>
            <input
             type="text"
             value={this.state.mail}
             onChange={e=>this.onChangeMail(e)}/>
              <label>Votre numéro</label>
              <input
              type="text"
              value={this.state.tel}
              onChange={e=>this.onChangeTel(e)}/>


          </form>
          <p>Vous allez recevoir un mail de
           confirmation de votre envoi, puis vous recevrez la
            réponse à votre question dans les 24 heures. Vous serez
            contacté si besoin est pour de plus amples informations.</p>
              <p>
            <button
            onClick={this.envoyer}>recevoir votre estimation gratuitement</button>
            </p>
          <button
          onClick={desend}>Retour</button>
        </Modal>
      );
  };
}

export default OptionModal;
