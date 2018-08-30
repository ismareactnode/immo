import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

import { setTextFilter, setGenreFilter, sortByPrix, sortBySuperficie,
  setNbPieces } from './actions/filtersActions';

import './AppartementsListFilters.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;


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
        <Desktop>
        <div className="listFiltersContainer">
        <div className="listFilters">
          <div className="listFiltersItem">
            <select
            className="form-control form-control-sm"
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
          </div>
      {
        this.props.filters.genre === 'Appartement' || this.props.filters.genre === 'Maison'?
        <div className="listFiltersItem">
          <select
          className="form-control"
          name= 'nbPieces'
          value={this.state.nbPieces}
          onChange={e => this.onChangePieces(e)}
          >
            <option
            >Pièces</option>
            <option>Studio</option>
            <option>2 pièces</option>
            <option>3 pièces</option>
            <option>4 pièces</option>
            <option>5 pièces et +</option>
          </select>
        </div>
        : null
      }
      <div className="listFiltersItem">
        <input type="text" placeholder="quartier"
          className="form-control"
        onChange={e=>this.props.dispatch(setTextFilter(e.target.value))} />
      </div>
      <div className="listFiltersItem">
        <button
        className="btn btn-primary"
        onClick={() => {this.props.dispatch(sortByPrix())}}
        >Prix</button>
        </div>
        <div className="listFiltersItem">
          <button
            className="btn btn-primary"
        onClick={()=>{this.props.dispatch(sortBySuperficie())}}  >Superficie</button>
      </div>
  </div>
  </div>
  </Desktop>

    <Mobile>

      <div className="btn-group dropright">
        <button type="button" className="btn btn-primary dropdown-toggle filterButton"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filtres
        </button>
        <div className="dropdown-menu">
            <select
            className="form-control form-control-sm"
              name = 'genre'
              onChange={e=>this.onChangeGenre(e)}
             >
              <option
                value={this.state.genre}
              >Tout type</option>
              <option>Appartement</option>
              <option>Maison</option>
              <option>Terrain</option>
              <option>Commerce</option>
            </select>
            {
              this.props.filters.genre === 'Appartement' ||
              this.props.filters.genre === 'Maison'?
              <div className="listFiltersItem">
                <select
                className="form-control"
                name= 'nbPieces'
                value={this.state.nbPieces}
                onChange={e => this.onChangePieces(e)}
                >
                  <option
                  >Pièces</option>
                  <option>Studio</option>
                  <option>2 pièces</option>
                  <option>3 pièces</option>
                  <option>4 pièces</option>
                  <option>5 pièces et +</option>
                </select>
              </div>
              : null
            }
            <input type="text" placeholder="quartier"
              className="form-control"
            onChange={e=>this.props.dispatch(setTextFilter(e.target.value))} />
            <button
            className="btn btn-primary"
            onClick={() => {this.props.dispatch(sortByPrix())}}
            >Prix</button>
            <button
              className="btn btn-primary"
          onClick={()=>{this.props.dispatch(sortBySuperficie())}}  >Superficie
          </button>
        </div>
    </div>
    </Mobile>

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
