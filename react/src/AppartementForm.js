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
  <div id="appartementForm">
    <form
      id="appartementForm"
      onSubmit={e=>{this.onSubmit(e)}}
      className="appartAddForm"
      >
     <h2>{this.props.appartement?'Modifier' : 'Créer'}</h2>


        <div className="form-group">
        <select
         className="form-control"
          name="genre"
          onChange={e=>this.onGenreChange(e)}
          value = {this.state.genre}>
         <option>Appartement</option>
         <option>Maison</option>
         <option>Terrain</option>
         <option>Commerce</option>
        </select>
        </div>

  { this.state.genre.toLowerCase() === 'appartement' ||
   this.state.genre.toLowerCase() === 'maison'?
      <div className="form-group">
        <select
        className="form-control"
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
      </div>
    : null
  }
       <div className="form-group">
         <label>Quartier : </label>
         <input
         className="form-control"
         name="quartier"
         value={this.state.quartier}
         onChange={e=>{this.onQuartierChange(e)}}
          type="text" />
      </div>

     <div className="form-group">
       <label>Superficie : </label>
       <input
        className="form-control"
        name="superficie" value={this.state.superficie}
        onChange={e=>{this.onSuperficieChange(e)}}
        type="number" />
    </div>
    <div className="form-group">
      <label>Prix :   </label>
      <input
       className="form-control"
      name="prix"
      value={this.state.prix}
      onChange={e=>{this.onPrixChange(e)}}
      type="text" />
    </div>
       <p><button type="submit" className="btn btn-primary col-sm-12">
       {this.props.appartement?'Confirmer':'Ajouter'}</button></p>
       {this.state.error && <p>{this.state.error}</p>}
    </form>


    <Link to={'/AdminCatalogue'}>
   <button type="button" className="btn btn-light col-sm-4">Retour à la liste
     </button></Link>

  </div>
  );
}
}

export default AppartementForm;
