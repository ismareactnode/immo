import React from 'react';
import { connect } from 'react-redux';
import OptionModal from './OptionModal';

import { addEstimationDebut } from './actions/estimActions';
class Estimation extends React.Component{

constructor(props){
  super(props);
  this.state = {
    genre: 'appartement',
    superficie: '',
    ville: '',
    rue: '',
    sended: undefined,
  };
  this.estimer = this.estimer.bind(this);
}

 estimer(e){
  e.preventDefault();
  const estimation = {
    genre: this.state.genre,
    superficie: this.state.superficie,
    ville: this.state.ville,
    rue: this.state.rue
  };
  this.props.dispatch(addEstimationDebut(estimation));
  console.log(this.state, 'state');
  this.setState(()=>({sended: true}));
}

onChangeSuperficie(e){
  const superficie = e.target.value;
  this.setState({superficie});
}

onChangeGenre(e){
  const genre = e.target.value;
  this.setState({genre});
}
onChangeVille(e){
  const ville = e.target.value;
  this.setState({ville});
}
onChangeRue(e){
  const rue = e.target.value;
  this.setState({rue});
}
  render(){



    const desend = (e)=>{
      e.preventDefault();
      this.setState(() => ({sended: undefined}));
    }

    const envoyer = (e) => {
      e.preventDefault();
      console.log('appel à une api d envoi de mail confirmant l enregistrement de la demande d estimation gratuite');
    }



    return(
      <div className="col-sm-12 estimation">

  			    <div className="jumbotron">
    	 				<div className="container">
       		     		 <h2>Bien estimez, pour mieux vendre</h2>
   	 		        	 	<p>Vous souhaitez connaitre la valeur de votre bien
   	 		         	selon sa localisation et différents critères ?

  						Utilisez notre outil d'estimation, nos agents vous
  						répondront dans les plus brefs délais.
  						Veuillez choisir le type de bien et saisissez l'adresse
  						pour accéder
  						 au formulaire plus complet.
  						</p>

    						<p><a className="btn btn-primary btn-lg"
    						 role="button">
    						Plus de conseils</a></p>
    					</div>
  			  	</div>

  			  	<h3>Estimez gratuitement la valeur de votre bien : </h3>

  			  	<form
  			  	onSubmit={this.estimer}
  			  	>

  				<select
          name="genre"
          value={this.state.genre}
          onChange={(e)=>this.onChangeGenre(e)}
          selected="Appartement" name="genre">
    					<option>Appartement</option>
    					<option>Maison</option>
    					<option>Terrain</option>
              <option>Fond de commerce</option>
  				</select><br/><br/>

  				<input
          name="superficie"
          placeholder="superficie"
          value= {this.state.superficie}

          onChange = {e=>this.onChangeSuperficie(e)
            // this.setState(()=>({superficie: e.target.value}))
          }
           type="text"
  				name="superficie"  placeholder="superficie" className="input-group"/><br/>

  				<input
  				name="ville"
            placeholder="ville"
          value={this.state.ville}
          onChange = {e => this.onChangeVille(e)}
  				 type="text"  placeholder="ville" className="input-group"/><br/>
  				<input
          onChange = { e => this.onChangeRue(e)}
  				name="rue"
          value={this.state.rue}
  				 type="text"  placeholder="rue" className="input-group"/><br/>
  				<button type="submit" className="btn btn-primary" >Estimer</button>
  			  </form>
          <OptionModal sended={this.state.sended} desend={desend} envoyer={envoyer}/>
          <p>{this.state.appartements}</p>
  			</div>
    );
  }

};
export default connect(null, null)(Estimation);
