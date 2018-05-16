import React, {Component} from 'react';
import { connect } from 'react-redux';

import './AdminRecherche.css';

import EstimationsList from './RecherchesList';
import { connected } from './actions/connectedAction';
import { fetchEstimations } from './actions/estimationsActions';

class AdminRecherche extends Component{

componentWillMount(){
  this.props.connected();
  this.props.fetchEstimations();
}
  render(){
    return(
      <div>
        <h3>Recherches de biens</h3>
        <RecherchesList />
      </div>
    );
  };
}



export default connect (null, {fetchEstimations, connected }) (AdminRecherche);
