import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AdminCatalogue.css';

import { connected } from './actions/connectedAction';
import { NavLink } from 'react-router-dom';

import { startSetAppartements } from './actions/appartementsActions';
import { initializeFilters } from './actions/filtersActions';

import AppartementsList from './AppartementsList';
import AppartementsListFilters from './AppartementsListFilters';
import AdminAppartementAddPage from './AdminAppartementAddPage';
import { Link } from 'react-router-dom';
import './AppartementDashboard.css';

class AdminCatalogue extends Component{

componentWillMount(){
  this.props.dispatch(connected());
  this.props.dispatch(startSetAppartements());
  this.props.dispatch(initializeFilters());
}
   render(){
     return(
      <div id="adminCatalogue">
      <NavLink to="/AdminDashboard"><button className="btn btn-light">
      Retour au menu</button></NavLink>
        <div id='AppartDashboard'>
         <button
         className="btn btn-primary"
         id="ajouter"><Link to='/AdminAddAppartement'>Ajouter un bien</Link></button>
          <AppartementsListFilters />
          <AppartementsList />
       </div>
     </div>
     );
}};

export default connect(null, null)(AdminCatalogue);
