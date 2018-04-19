import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setGenreFilter, sortByPrix, sortBySuperficie } from './actions/filtersActions';

const AppartementsListFilters = ({dispatch, filters})=>(
  <div>
    <select
      name = 'genre'
      onChange={
        e=>dispatch(setGenreFilter(e.target.value))}
    >
      <option
        value="AppartementMaisonTerrainCommerce"
      >Sélectionner un type</option>
      <option>Appartement</option>
      <option>Maison</option>
      <option>Terrain</option>
      <option>Commerce</option>
    </select>

  <input type="text" placeholder="quartier"
  onChange={e=>dispatch(setTextFilter(e.target.value))} value={filters.text}/>
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
