import React, { Component } from 'react';
import AppartementForm from './AppartementForm';
import { connect } from 'react-redux';
import { removeAppartementFromMongo } from './actions/appartementsActions';
import { Link } from 'react-router-dom';

import { startEditAppartment } from './actions/appartementsActions';
import { connected } from './actions/connectedAction';
// import { startRemoveAppartment } from './actions/appartementsActions';;
import { removeAppartementFromRedux } from './actions/appartementsActions';
// import { RemoveAppartementFromMongo } from './actions/appartementsActions';
import './EditAppartementPage.css';

class EditAppartementPage extends Component{


  componentWillMount(){
    this.props.connected();
  }

  render(){
  return(
  <div>

    <AppartementForm
    appartement = {this.props.appartement}

    onSubmit={(updates)=>{
        this.props.startEditAppartment(this.props.appartement._id, updates, localStorage.getItem('token'));
        this.props.history.push('/AdminCatalogue');
      }
    }
  />
  <div className="confirmationSupressionButton">
  <Link to={`/confirmationSuppression/${this.props.appartement._id}`}><button
     className="btn btn-primary">Supprimer</button></Link>
 </div>
  </div>
);
}
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement._id === props.match.params.id)
  };
};
export default connect(mapStateToProps, {connected, startEditAppartment})(EditAppartementPage);
