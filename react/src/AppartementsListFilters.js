import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByPrix, sortBySuperficie } from './actions/filtersActions';

const AppartementsListFilters = (props)=>(
  <div>
  <input type="text"
  onChange={e=>props.dispatch(setTextFilter(e.target.value))} value={props.filters.text}/>
  <button
  onClick={() => {props.dispatch(sortByPrix())}}
  >Prix</button>
    <button
  onClick={()=>{props.dispatch(sortBySuperficie())}}  >Superficie</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
export default connect (mapStateToProps)(AppartementsListFilters);
