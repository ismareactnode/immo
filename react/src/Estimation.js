import React from 'react';
import OptionModal from './OptionModal';

class Estimation extends React.Component{

  state = {
    type: 'Appartement',
    number: 0,
    rue: '',
    ville: '',
    sended: undefined,
};


  render(){

    const estimer = (e) => {
      e.preventDefault();
    console.log(this.state, 'state');
    this.setState(()=>({sended: true}));
  }

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

  			  	<h2>Estimez la valeur de votre logement : </h2>

  			  	<form
  			  	onSubmit={estimer}
  			  	>

  				<select
          onChange={(e)=>this.setState({type: e.target.value})}
          selected="Appartement" name="genre">
    					<option>Appartement</option>
    					<option>Maison</option>
    					<option>Terrain</option>
  				</select><br/><br/>

  				<input
          onChange = {e=>this.setState({number: e.target.value})}
           type="number" min="0"
  				name="numero"  placeholder="numéro" className="input-group"/><br/>

  				<input
  				name="rue"
          onChange = {e => this.setState({rue: e.target.value})}
  				 type="text"  placeholder="rue" className="input-group"/><br/>
  				<input
          onChange = { e => this.setState({ville: e.target.value})}
  				name="ville"
  				 type="text"  placeholder="ville" className="input-group"/><br/>
  				<button type="submit" className="btn btn-primary" >Estimer</button>
  			  </form>
          <OptionModal sended={this.state.sended} desend={desend} envoyer={envoyer}/>
          <p>{this.state.appartements}</p>
  			</div>
    );
  }

};
export default Estimation;
