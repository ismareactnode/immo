import React, {Component} from 'react';
import { connect } from 'react-redux';
import EstimationsList from './EstimationsList';
import { fetchEstimations } from './actions/estimationsActions';
import './AdminEstimation.css';

class AdminEstimation extends Component{

componentWillMount(){
  this.props.fetchEstimations();
}
  render(){
    return(
      <div>
        <h3>Demandes d estimation</h3>
        <EstimationsList />
      </div>
    );
  };
}



export default connect (null, {fetchEstimations}) (AdminEstimation);
