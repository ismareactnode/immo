import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

import './Catalogue.css';

import { connected } from './actions/connectedAction';
import { Link } from 'react-router-dom';

import { startSetAppartements } from './actions/appartementsActions';
import { initializeFilters } from './actions/filtersActions';

import AppartementsListVisitor from './AppartementsListVisitor';
import AppartementsListFilters from './AppartementsListFilters';
import AdminAppartementAddPage from './AdminAppartementAddPage';
import './AppartementDashboard.css';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={468} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={467} />;

class Catalogue extends Component{
  constructor(props){
    super(props);
  }


  componentWillMount(){
    this.props.dispatch(connected());

    this.props.dispatch(startSetAppartements());
    this.props.dispatch(initializeFilters());
  }
   render(){

     const backToHome=()=>{
       this.props.history.push('/');
     }

     return(
      <div className="catalogueVisitor">
      <div className="fleche">
        <a href="#headerNavbar"><span className="glyphicon glyphicon-upload"></span></a>
      </div>
          <AppartementsListFilters />
          <AppartementsListVisitor backToHome={backToHome} />
     </div>
     );
}};

export default connect(null, null)(Catalogue);
