import React from 'react';
import { Link } from 'react-router-dom';
import { removeAppartment } from './actions/appartementsActions';
import { connect } from 'react-redux';
import './AppartementForm.css';

class AppartementForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      genre: props.appartement ? props.appartement.genre : 'appartement',
      nbPieces: props.appartement ? props.appartement.nbPieces : 'studio',
      superficie: props.appartement ? props.appartement.superficie : '',
      prix: props.appartement ? props.appartement.prix.toString()  : '',
      quartier: props.appartement ? props.appartement.quartier : '',
      id: props.appartement ? props.appartement.id : '',
      error: '',
  }
}

onQuartierChange = e => {
  const quartier = e.target.value;
this.setState(()=>({
  quartier
}));
}
onSuperficieChange = e => {
  const superficie=e.target.value;
  this.setState(()=>({
    superficie
  }));
}

onGenreChange = e => {
  const genre = e.target.value;
  this.setState(() => ({
    genre
  }));
}

onNbPiecesChange = e => {
  const nbPieces = e.target.value;
  this.setState(() => ({
    nbPieces
  }));
}
onPrixChange = e => {
  const prix = e.target.value;
  if(!prix || prix.match(/^\d{1,}(\.\d{0,2})?$/))
  {
    this.setState(()=>{
      return(
        {prix});
    })
  }
}

onSubmit = e => {
  e.preventDefault();
if(!this.state.quartier || !this.state.prix || !this.state.superficie
   || !this.state.genre ){
      this.setState(()=>({
        error: 'il faut tout remplir'
      }))
}else{
  this.setState(()=>({
    error: '',
  }));
  this.props.onSubmit({
    quartier: this.state.quartier,
    prix: parseFloat(this.state.prix, 10),
    superficie: this.state.superficie,
    genre: this.state.genre,
    nbPieces: this.state.nbPieces,
  });
}}

render(){

  return(
  <div>
    <form
    id="appartementForm"
    onSubmit={e=>{this.onSubmit(e)}}
      className="appartAddForm"
      >
     <h2>{this.props.appartement?'Modifier' : 'Créer'}</h2>
      <p>
        <select name="genre" onChange={e=>this.onGenreChange(e)}
          value = {this.state.genre}>
         <option>Appartement</option>
         <option>Maison</option>
         <option>Terrain</option>
         <option>Commerce</option>
        </select>
      </p>
  { this.state.genre.toLowerCase() === 'appartement' ||
   this.state.genre.toLowerCase() === 'maison'?
      <p>
        <select
         name="nbPieces"
         onChange={e=>this.onNbPiecesChange(e)}
          value = {this.state.nbPieces}
          >
         <option defaultValue>Studio</option>
         <option>2 pièces</option>
         <option>3 pièces</option>
         <option>4 pièces</option>
         <option>5 pièces et +</option>
        </select>
      </p>
    : null
  }
       <p>Quartier : <input name="quartier"
       value={this.state.quartier}
       onChange={e=>{this.onQuartierChange(e)}}
        type="text" /></p>
    <p>Superficie : <input name="superficie" value={this.state.superficie}
    onChange={e=>{this.onSuperficieChange(e)}}
    type="number" /></p>
    <p>Prix :   <input name="prix"
    value={this.state.prix}
    onChange={e=>{this.onPrixChange(e)}}
    type="text" /></p>
       <p><button type="submit">
       {this.props.appartement?'Confirmer':'Ajouter'}</button></p>
       {this.state.error && <p>{this.state.error}</p>}
    </form>

    <Link to={'/catalogue'}>Retour à la liste</Link>
  </div>
  );
}
}

export default AppartementForm;
