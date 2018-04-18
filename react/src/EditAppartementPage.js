import React from 'react';
import AppartementForm from './AppartementForm';
import { connect } from 'react-redux';
import { removeAppartementFromMongo } from './actions/appartementsActions';
import { Link } from 'react-router-dom';

import { startEditAppartment } from './actions/appartementsActions';

// import { startRemoveAppartment } from './actions/appartementsActions';;
import { removeAppartementFromRedux } from './actions/appartementsActions';
// import { RemoveAppartementFromMongo } from './actions/appartementsActions';
const EditAppartementPage = (props)=> {

  return(
  <div>

    <AppartementForm
    appartement = {props.appartement}

    onSubmit={(updates)=>{
        props.dispatch(startEditAppartment(props.appartement._id, updates));
        props.history.push('/catalogue');
      }
    }
  />
  <Link to={`/confirmationSuppression/${props.appartement._id}`}><li>Supprimer</li></Link>
  </div>
);
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement._id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditAppartementPage);
