import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './RechercheItem.css';

class RechercheItem extends Component{

  constructor(props){
    super(props);
    this.state = {
      genre : '',
      superficie: '',
      quartier: '',
      proximite: '',
      etat: '',
      budget: '',
      nom: '',
      mail: '',
      tel: '',
      precision: '',
      date: '',
      appart: [],
      estimation: []
    }
  }

  componentWillMount(){
    let recherche_mail = this.props.match.params.recherche_mail;
    fetch(`/rechercheItem/${recherche_mail}`)
    .then((recherche)=>{
      return recherche.json();
    })
    .then((recherche)=>{
        const { genre, superficie, quartier, proximite, etat, budget, nom, mail, tel, precision, date, appart, estimation } = recherche;
       this.setState(()=>({genre, superficie, quartier, proximite, etat, budget,
          nom , mail, tel, precision, date, appart, estimation }));
          console.log(`this.state : `, this.state);
    })
    .catch((e)=>console.log('error : ', e));
  }
  render(){
  return(
    <div className="rechercheItem">
      <h2>Recherche</h2>
      <div className="rechercheInfos">
      <ul>
        <li className="rechercheInfo"><label>Nom : </label>{this.state.nom}</li>
        <li className="rechercheInfo"><label>Email : </label>{this.state.mail}</li>
        <li className="rechercheInfo"><label>Tel :</label>{this.state.tel}</li>
        <li><label>Recherche : </label></li>
        <li className="rechercheInfo"><label>Type : </label>{this.state.genre}</li>
        <li className="rechercheInfo"><label>Superficie : </label>{this.state.superficie}</li>
        <li className="rechercheInfo"><label>Quartier : </label>{this.state.quartier}</li>
        <li className="rechercheInfo"><label>Etat : </label>{this.state.etat}</li>
        <li className="rechercheInfo"><label>A proximité de : </label>{this.state.proximite}</li>
        <li className="rechercheInfo"><label>Précisions : </label>{this.state.precision}</li>
        <li> <label>Pour un budget de : </label>{this.state.budget} €</li>
        <li><label> A la date du : </label>{this.state.date}</li>
        <li className="rechercheInfo"><label>Produits correspondants dans le catalogue : </label>
        {this.state.appart ?
          <ul>
            {this.state.appart.map((appart)=><li><Link to={`/editAppartement/${appart}`}>{appart}</Link></li>)}
          </ul>
        : 'Aucun'}</li>
        <li className="rechercheInfo"><label>Demandes d estimations correspondants à la recherche : </label>
        {this.state.estimation ?
          <ul>
            {this.state.estimation.map((estimation)=><li>{estimation}</li>)}
          </ul>
        : 'Aucune'}</li>
        </ul>
      </div>


    </div>

  );
  }
}

export default connect(null, null)(RechercheItem);
