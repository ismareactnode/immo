import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Catalogue.css';

import { connected } from './actions/connectedAction';
import { Link } from 'react-router-dom';

import { startSetAppartements } from './actions/appartementsActions';
import { initializeFilters } from './actions/filtersActions';

import AppartementsListVisitor from './AppartementsListVisitor';
import AppartementsListFilters from './AppartementsListFilters';
import AdminAppartementAddPage from './AdminAppartementAddPage';
import './AppartementDashboard.css';

class Catalogue extends Component{

componentWillMount(){
  this.props.dispatch(connected());
  // this.props.dispatch(startSetAppartements());
  // this.props.dispatch(initializeFilters());
}
   render(){
     return(
      <div className="catalogueVisitor">
        <div className="flexTop">
          <AppartementsListFilters />
            
        </div>
        <div className="flexBottom">
          <AppartementsListVisitor />
        </div>


     </div>
     );
}};

export default connect(null, null)(Catalogue);
