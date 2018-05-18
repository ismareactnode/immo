import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import './OptionModal.css';
import moment from 'moment-js';

class OptionModal extends Component{

  constructor(props){
    super(props);
    this.state={
      nom: '',
      mail: '',
      tel: '',
      erreur: {}
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

  envoyer(e){
    console.log('fonction envoyer');
    e.preventDefault();
    const nom = this.state.nom;
    const mail = this.state.mail;
    const tel = this.state.tel;
    // if((nom.length)<2 || !nom.match(/^[a-zA-Z]$/)){
    //   return console.log('nom non valide.')
    // }michemouche
    // if(mail===''){
    //   return console.log('veuillez indiquer votre mail pour qu on vous contacte.');
    // }
    document.cookie=`name=${nom}`;

    const genre = this.getCookie('genre');
    const etat = this.getCookie('etat');
    const superficie = this.getCookie('superficie');
    const ville = this.getCookie('ville');
    const rue = this.getCookie('rue');
    const date = moment().format(' DD/MM/YYYY, h:mm ');

    const produit = {
      nom,
      mail,
      tel,
      genre,
      etat,
      superficie,
      ville,
      rue,
      date
    };
    console.log('produit', produit);
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
    const {sended, desend } = this.props;
      return(
        <Modal id="modal"
        isOpen={!!sended}
        onRequestClose={desend}
        contentLabel="Bien envoyé">
        <div id="optionModal">
          <h3>Pour recevoir votre estimation gratuitement</h3>
          <h4>dans les 24 heures</h4>
          <form id="modalForm">
            <div className="form-group col-sm-12 col-md-10 col-lg-6">
            <label>Votre nom</label>
            <input
            className="form-control"
             type="text"
            required
             value={this.state.nom}
             onChange={e=>this.onChangeNom(e)}/>
             </div>
            <div className="form-group col-sm-12 col-md-10 col-lg-6">
              <label>Votre adresse mail</label>
              <input
                className="form-control"
               required
               type="email"
               value={this.state.mail}
               onChange={e=>this.onChangeMail(e)}/>
              </div>
              <div className="form-group col-sm-12 col-md-10 col-lg-6">
              <label>Votre numéro</label>
              <input
                className="form-control"
              type="text"
              placeholder="facultatif"
              value={this.state.tel}
              onChange={e=>this.onChangeTel(e)}/>
              </div>

              <button className="btn btn-primary col-sm-12"
              onClick={this.envoyer}>Recevoir votre estimation gratuitement</button>


          </form>

          <div id="expert" className="col-md-6 col-lg-12"><h3> Notre expert immobilier se fera un
          plaisir de vous répondre</h3></div>
          <div id="retour">
          <button type="button" className="btn btn-light"
          onClick={desend}>Retour</button>
          </div>
          </div>
        </Modal>
      );
  };
}

export default connect(null, null)(OptionModal);
