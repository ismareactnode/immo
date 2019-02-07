import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './EstimationItem.css';

class EstimationItem extends Component{

  constructor(props){
    super(props);
    this.state = {
      genre : '',
      superficie: '',
      quartier: '',
      rue: '',
      etat: '',
      nom: '',
      mail: '',
      tel: '',
      date: '',
      recherche: []
    }
  }

  componentWillMount(){
    let estimation_id = this.props.match.params.estimation_id;
    console.log('estimation_id :', estimation_id);
    fetch(`/estimationItem/${estimation_id}`)
    .then((estimation)=>{
      return estimation.json();
    })
    .then((estimation)=>{
        const { genre, superficie, quartier, rue, etat, nom, mail, tel, date, recherche } = estimation;
       this.setState(()=>({genre, superficie, quartier, rue, etat,
          nom , mail, tel, date, recherche }));
          console.log(`this.state : `, this.state);
    })
    .catch((e)=>console.log('error : ', e));
  }
  render(){
  return(
    <div className="estimationItem">
      <div className="estimationInfos">
      <ul>
        <li className=""><label>Nom : </label>{this.state.nom}</li>
        <li className=""><label>Email : </label>{this.state.mail}</li>
        <li className=""><label>Tel :</label>{this.state.tel}</li>
        <li><label>désire estimer : </label></li>
        <li className=""><label>Type : </label>{this.state.genre}</li>
        <li className=""><label>Superficie : </label>{this.state.superficie}</li>
        <li className=""><label>Quartier : </label>{this.state.quartier}</li>
        <li className=""><label>Etat : </label>{this.state.etat}</li>        <li className="rechercheInfo"><label>Précisions : </label>{this.state.precision}</li>
        <li><label> A la date du : </label>{this.state.date}</li>
        <li className=""><label>Recherches correspondantes à cette demande d estimation : </label>
        {this.state.recherche ?
          <ul>
            {this.state.recherche.map((recherche)=><li><Link to={`/rechercheItem/${recherche}`}>{recherche}</Link></li>)}
          </ul>
        : 'Aucune'}</li>

        </ul>
      </div>


    </div>

  );
  }
}

export default connect(null, null)(EstimationItem);
