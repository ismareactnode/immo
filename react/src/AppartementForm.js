import React from 'react';
import { Link } from 'react-router-dom';
import { removeAppartment } from './actions/appartementsActions';
import './AppartementForm.css';

import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class AppartementForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      genre: props.appartement ? props.appartement.genre : 'Appartement',
      nbPieces: props.appartement ? props.appartement.nbPieces : 'studio',
      superficie: props.appartement ? props.appartement.superficie : '',
      prix: props.appartement ? props.appartement.prix.toString()  : '',
      quartier: props.appartement ? props.appartement.quartier : '',
      descriptif: props.appartement ? props.appartement.descriptif : '',
      photo: props.appartement ? props.appartement.photo : '',
      id: props.appartement ? props.appartement.id : '',
      recherche : props.appartement ? props.appartement.recherche : '',
      error: '',
  }
}


/*   rajouter dans le formulaire Descriptif (nombre max de characteres : 300 )*/
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
  console.log(`genre : ${genre}`);
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

onPhotoChange = e => {
  const photo = e.target.value;
  this.setState(()=>({photo}));
}

onDescriptifChange = e => {
  const descriptif = e.target.value;
  this.setState(()=>({descriptif}));
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
   || !this.state.genre || !this.state.descriptif){
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
    photo: this.state.photo,
    descriptif: this.state.descriptif
  });
}}

render(){

  return(

  <div className="appartementFormContainer">
  <Link to={'/AdminCatalogue'}>
  <button type="button" className="btn btn-primary retourListeCatalogue">
  <span className="glyphicon glyphicon-arrow-left"></span>
   </button></Link>
    <Desktop>
    <form
      id="appartementForm"
      onSubmit={e=>{this.onSubmit(e)}}
      className="appartAddForm"
      >
     <h2>{this.props.appartement?'Modifier' : 'Ajouter'}</h2>


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
      <label>Descriptif : </label>
      <textarea
       className="form-control"
       name="descriptif" value={this.state.descriptif}
       onChange={e=>{this.onDescriptifChange(e)}}
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
    <div className = "form-group">
      <label>nom du fichier photo : </label>
      <input
      onChange={e=>this.onPhotoChange(e)}
       type="text"
       className="form-control"
       name="photo"
       value = {this.state.photo}
      placeholder="fichier à ranger dans le dossier public"
      />
    </div>
       <p><button type="submit" className="btn btn-primary col-sm-12 ajouterButton">
       {this.props.appartement?'Confirmer':'Ajouter'}</button></p>
       {this.state.error && <p>{this.state.error}</p>}
    </form>
  </Desktop>

  <Mobile>
  <form
    id="appartementFormMobile"
    onSubmit={e=>{this.onSubmit(e)}}
    className="appartAddForm"
    >
   <h2>{this.props.appartement?'Modifier' : 'Ajouter'}</h2>


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
    <label>Descriptif : </label>
    <textarea
     className="form-control"
     name="descriptif" value={this.state.descriptif}
     onChange={e=>{this.onDescriptifChange(e)}}
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
  <div className = "form-group">
    <label>nom du fichier photo : </label>
    <input
    onChange={e=>this.onPhotoChange(e)}
     type="text"
     className="form-control"
     name="photo"
     value = {this.state.photo}
    placeholder="fichier à ranger dans le dossier public"
    />
  </div>
     <p><button type="submit" className="btn btn-primary col-sm-12">
     {this.props.appartement?'Confirmer':'Ajouter'}</button></p>
     {this.state.error && <p>{this.state.error}</p>}
  </form>
</Mobile>

{
  this.state.recherche ?
    <div>
      <h3>Recherches correspondantes</h3>
      <ul>
      {this.state.recherche.map(recherche =>{
         return (<li><Link to={`/rechercheItem/${recherche}`}>{recherche}</Link></li>);
      } )}
      </ul>
    </div>
  : ''
}
    <div>
    </div>




  </div>
  );
}
}

export default AppartementForm;
