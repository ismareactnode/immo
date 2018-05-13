import React, { Component } from 'react';
import { connect } from 'react-redux';

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
         <Link to='/addAppartement'>Ajouter un bien</Link>
       <AppartementsListFilters />
          <AppartementsList />

       </div>
     );
}};

export default connect(null, null)(AdminCatalogue);
