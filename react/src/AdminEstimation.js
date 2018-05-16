import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import EstimationsList from './EstimationsList';
import './AdminEstimation.css';

import { connected } from './actions/connectedAction';

import { fetchEstimations } from './actions/estimationsActions';
import './AdminEstimation.css';

class AdminEstimation extends Component{

componentWillMount(){
  this.props.connected();
  this.props.fetchEstimations();
}
  render(){
    return(
      <div id="adminEstimation">
        <h3>Demandes d estimation</h3>
          <NavLink to="/AdminDashboard"><button className="btn btn-light">
          Retour au menu</button></NavLink>
        <EstimationsList />
      </div>
    );
  };
}



export default connect (null, {fetchEstimations, connected }) (AdminEstimation);
