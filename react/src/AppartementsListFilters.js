import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setGenreFilter, sortByPrix, sortBySuperficie,
  setNbPieces } from './actions/filtersActions';

class AppartementsListFilters extends Component{


 constructor(props){
   super(props);
   this.state = {
     genre: 'AppartementMaisonTerrainCommerce',
     nbPieces:'studio 2 pièces 3 pièces 4 pièces 5 pièces',
   }
 }

 onChangeGenre(e){
   this.setState(()=>({nbPieces:'studio 2 pièces 3 pièces 4 pièces 5 pièces' }));
   this.props.dispatch(setGenreFilter(e.target.value));
 }

onChangePieces(e){
  const nbPieces = e.target.value;
 this.setState(()=>({nbPieces}));
 this.props.dispatch(setNbPieces(e.target.value));
 }
  render(){

    return(
        <div>
          <select
            name = 'genre'
            onChange={e=>this.onChangeGenre(e)}
           >
            <option
              value={this.state.genre}
            >Tous les types</option>
            <option>Appartement</option>
            <option>Maison</option>
            <option>Terrain</option>
            <option>Commerce</option>
          </select>

      {
        this.props.filters.genre === 'Appartement' || this.props.filters.genre === 'Maison'?
          <select
          name= 'nbPieces'
          value={this.state.nbPieces}
          onChange={e => this.onChangePieces(e)}
          >
            <option
            >Nombre de pièces</option>
            <option>Studio</option>
            <option>2 pièces</option>
            <option>3 pièces</option>
            <option>4 pièces</option>
            <option>5 pièces et +</option>
          </select>
        : null
      }
        <input type="text" placeholder="ville, quartier"
        onChange={e=>this.props.dispatch(setTextFilter(e.target.value))} />
        <button
        onClick={() => {this.props.dispatch(sortByPrix())}}
        >Prix</button>
          <button
        onClick={()=>{this.props.dispatch(sortBySuperficie())}}  >Superficie</button>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
export default connect (mapStateToProps)(AppartementsListFilters);
