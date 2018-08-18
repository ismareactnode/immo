import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment-js';
import { Link } from 'react-router-dom';


import './Recherche.css';

class Recherche extends Component{


/*  Virer état des champs du formulaire, car ca ne rentre pas en ligne ds la recherche */


  constructor(props){
    super(props);
    this.state={
      genre: '',
      superficie: '',
      quartier: '',
      proximite: '',
      etat: '',
      budget: '',
      nom: '',
      mail: '',
      tel: '',
      precision: '',
      notification: false,
      error: false
    };
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeSuperficie = this.onChangeSuperficie.bind(this);

    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.envoyer = this.envoyer.bind(this);
  }
  onChangeGenre(e){
    const genre = e.target.value;
    this.setState(()=>({genre}));
  }
  onChangeSuperficie(e){
    const superficie = e.target.value;
    this.setState(()=>({superficie}));
  }
  onChangeQuartier(e){
    const quartier = e.target.value;
    this.setState(()=>({quartier}));
  }
onChangeProximite(e){
  const proximite = e.target.value;
  this.setState(()=>({proximite}));
}
onChangeEtat(e){
  const etat = e.target.value;
  this.setState(()=>({etat}));
}
onChangeBudget(e){
  const budget = e.target.value;
  this.setState(()=>({budget}));
}
onChangePrecision(e){
  const precision = e.target.value;
  this.setState(()=>({precision}));
}
onChangeMail(e){
  const mail = e.target.value;
  this.setState(()=>({mail}));
}
onChangeTel(e){
  const tel = e.target.value;
  this.setState(()=>({tel}));
}
onChangeNom(e){
  const nom = e.target.value;
  this.setState(()=>({nom}));
}



  envoyer(e){
      e.preventDefault();
    console.log('fonction envoyer');

    const date = moment().format(' DD/MM/YYYY, h:mm ');

    const recherche = {
      genre: this.state.genre,
      superficie: this.state.superficie,
      quartier : this.state.quartier,
      proximite: this.state.proximite,
      etat: this.state.etat,
      budget: this.state.budget,
      nom: this.state.nom,
      mail: this.state.mail,
      tel: this.state.tel,
      precision: this.state.precision,
      date
    };
    console.log('recherche : ', recherche);

    fetch('/recherches',
    {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({recherche})
    })
    .then(async(res)=>{
    this.setState(()=>({genre: ''}));
    this.setState(()=>({superficie: ''}));
    this.setState(()=>({proximite: ''}));
    this.setState(()=>({budget: ''}));
    this.setState(()=>({quartier: ''}));
    this.setState(()=>({etat: ''}));
    this.setState(()=>({nom: ''}));
    this.setState(()=>({mail: ''}));
    this.setState(()=>({tel: ''}));
    this.setState(()=>({precision: ''}));
    this.setState(()=>({notification: true}));
    setTimeout(()=>{this.setState(()=>({notification: false}))}, 1000);
    setTimeout(()=>{this.props.history.push('/')}, 1500);
   })
  .catch((err)=>{console.log('error :', err);})
  }

  render(){
    const {sended, desend } = this.props;
      return(

        <div className="recherche">
          <Link to="/catalogue">Retour</Link>
          <div className="rechercheFormulaire">
            <h3>Vous cherchez :</h3>
              <form
              onSubmit={e=>this.envoyer(e)}
               id="modalForm">
                <div
                className="form-group col-sm-12 col-md-10 col-lg-6"  >
                  <label>Type</label>
                  <select
                  className="form-control"
                  required
                  value={this.state.genre}
                  onChange={(e)=>this.onChangeGenre(e)}
                  name="genre">
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Terrain</option>
                    <option>Commerce</option>
                  </select>
                </div>
                <div className="form-group col-sm-12 col-lg-6">
                 <label>Superficie</label>
                 <input
                 className="form-control"
                 required
                 name="superficie"
                 placeholder="superficie"
                 value= {this.state.superficie}
                 onChange = {e=>this.onChangeSuperficie(e)
                   // this.setState(()=>({superficie: e.target.value}))
                 }
                 type="text"
                 name="superficie"  placeholder="superficie" />
               </div>

                 <div className="form-group col-sm-12 col-lg-6">
                   <label>A proximité de : </label>
                   <textarea
                   className="form-control"
                    required
                   onChange = { e => this.onChangeProximite(e)}
                   value={this.state.proximite}
                   >
                   ex: école, métro, à 5 mn à pied de ...
                   </textarea>
                 </div>
                 <div className="form-group col-sm-12 col-lg-6">
                   <label>Quartier</label>
                   <input
                   className="form-control"
                   required
                   placeholder="quartier"
                   value={this.state.quartier}
                   onChange = {e => this.onChangeQuartier(e)}
                   type="text"  placeholder="quartier" />
                   </div>

                 <div className="form-group col-sm-12 col-lg-6">
                   <label>Etat</label>
                   <select
                   className="form-control"
                    required
                   onChange = { e => this.onChangeEtat(e)}
                   name="etat"
                   value={this.state.etat}
                   >
                     <option>Moyen</option>
                     <option>Neuf</option>
                     <option>Ancien</option>
                     <option>A rénover</option>
                   </select>
                 </div>
                 <div className="form-group col-sm-12 col-lg-6">
                   <label>Budget</label>
                   <input
                   className="form-control"
                   onChange = { e => this.onChangeBudget(e)}
                   value={this.state.budget}
                   type="text"  placeholder="budget"
                   />
                   </div>

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
                   <label>Votre téléphone</label>
                   <input
                     className="form-control"
                   type="text"
                   placeholder="facultatif"
                   value={this.state.tel}
                   onChange={e=>this.onChangeTel(e)}/>
                   </div>

                   <div className="form-group col-sm-12 col-md-10 col-lg-6">
                   <label>Si vous avez des précisions :</label>
                   <textarea
                     className="form-control"
                   placeholder="facultatif"
                   value={this.state.precision}
                   onChange={e=>this.onChangePrecision(e)}>
                   </textarea>
                   </div>
                   <div className="notifError">
                     {this.state.error && <p>Merci de remplir tous les champs obligatoires</p>}
                   </div>
                   <button className="btn btn-primary col-sm-12"
                   onClick={this.envoyer}>Lancer la recherche</button>
                   <div className="notifError">
                   {this.state.notification ? <p className="envoye">Bien envoyé</p> : ''}
                   </div>
               </form>
               <div id="expert" className="col-md-6 col-lg-12"><h3> Notre expert immobilier se fera un
               plaisir de trouver votre bonheur</h3></div>
          </div>
      </div>
      );
  };
}

export default connect(null, null)(Recherche);
