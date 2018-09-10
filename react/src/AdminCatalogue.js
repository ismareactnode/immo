import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import './AdminCatalogue.css';

import { connected } from './actions/connectedAction';
import { NavLink } from 'react-router-dom';

import { startSetAppartements } from './actions/appartementsActions';
import { initializeFilters } from './actions/filtersActions';

import AppartementsList from './AppartementsList';
import AppartementsListFiltersAdmin from './AppartementsListFiltersAdmin';
import AdminAppartementAddPage from './AdminAppartementAddPage';
import { Link } from 'react-router-dom';
import './AppartementDashboard.css';


const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class AdminCatalogue extends Component{

componentWillMount(){
  this.props.dispatch(connected());
  this.props.dispatch(startSetAppartements());
  this.props.dispatch(initializeFilters());
}
   render(){
     return(
      <div className="adminCatalogue">
          <div id='AppartDashboard'>
          <Desktop>
           <Link to='/AdminAddAppartement'>
             <button
             className="btn btn-primary ajoutButton"
             id="ajouter">
             <span className="glyphicon glyphicon-plus"></span>
             </button>
            </Link>
           </Desktop>
           <Mobile>
            <Link to='/AdminAddAppartement'>
             <button
             className="btn btn-primary ajouterCatalogueMobile"
             id="ajouter">
 <span className="glyphicon glyphicon-plus"></span>

             </button>
            </Link>
           </Mobile>
            <AppartementsListFiltersAdmin />
            <AppartementsList />
         </div>
     </div>
     );
}};

export default connect(null, null)(AdminCatalogue);
