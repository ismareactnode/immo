import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './AdminRecherches.css';

import RecherchesList from './RecherchesList';
import { connected } from './actions/connectedAction';
import { fetchRecherches } from './actions/recherchesActions';

class AdminRecherches extends Component{

componentWillMount(){
  this.props.connected();
  this.props.fetchRecherches();
}
  render(){
    return(
      <div id="adminRecherches">
        <h3>Recherches :</h3>

        <RecherchesList />
      </div>
    );
  };
}



export default connect (null, {fetchRecherches, connected }) (AdminRecherches);
