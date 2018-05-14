import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AdminCatalogue.css';

import { startSetAppartements } from './actions/appartementsActions';
import { initializeFilters } from './actions/filtersActions';

import AppartementsList from './AppartementsList';
import AppartementsListFilters from './AppartementsListFilters';
import AppartementAddPage from './AppartementAddPage';
import { Link } from 'react-router-dom';
import './AppartementDashboard.css';

class AdminCatalogue extends Component{

componentWillMount(){
  this.props.dispatch(startSetAppartements());
  this.props.dispatch(initializeFilters());
}
   render(){
     return(
       <div id='AppartDashboard'>
         <button
         className="btn btn-primary"
         id="ajouter"><Link to='/addAppartement'>Ajouter un bien</Link></button>
          <AppartementsListFilters />
          <AppartementsList />

       </div>
     );
}};

export default connect(null, null)(AdminCatalogue);
