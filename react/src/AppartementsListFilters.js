import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setGenreFilter, sortByPrix, sortBySuperficie,
  setNbPieces } from './actions/filtersActions';

const AppartementsListFilters = ({dispatch, filters})=>(
  <div>
    <select
      name = 'genre'
      onChange={
        e=>dispatch(setGenreFilter(e.target.value))}
    >
      <option
        value="AppartementMaisonTerrainCommerce"
      >Tous les types</option>
      <option>Appartement</option>
      <option>Maison</option>
      <option>Terrain</option>
      <option>Commerce</option>
    </select>

{
  filters.genre === 'Appartement' || filters.genre === 'Maison'?
    <select
    name= 'nbPieces'
    onChange={e => dispatch(setNbPieces(e.target.value))}
    >
      <option
        value='studio2345'
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
  onChange={e=>dispatch(setTextFilter(e.target.value))} />
  <button
  onClick={() => {dispatch(sortByPrix())}}
  >Prix</button>
    <button
  onClick={()=>{dispatch(sortBySuperficie())}}  >Superficie</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
export default connect (mapStateToProps)(AppartementsListFilters);
