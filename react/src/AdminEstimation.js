import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import EstimationsList from './EstimationsList';
import './AdminEstimation.css';

import { connected } from './actions/connectedAction';

import { fetchEstimations } from './actions/estimationsActions';
import './AdminEstimation.css';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class AdminEstimation extends Component{

componentWillMount(){
  this.props.connected();
  this.props.fetchEstimations();
}
  render(){
    return(
      <div className="adminEstimationContainer">
        <Desktop>
          <div id="adminEstimation">
            <h3>Estimations</h3>

            <EstimationsList />
          </div>
        </Desktop>
        <Mobile>
          <div id="adminEstimationMobile">
          <h3>Estimations</h3>

            <EstimationsList />
          </div>
        </Mobile>
      </div>
    );
  };
}



export default connect (null, {fetchEstimations, connected }) (AdminEstimation);
