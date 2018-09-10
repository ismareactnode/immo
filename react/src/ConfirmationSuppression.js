import React from 'react';
import { Link } from 'react-router-dom';
import AppartementForm from './AppartementForm';
import { connect } from 'react-redux';
import { removeAppartementFromMongo } from './actions/appartementsActions';
import './ConfirmationSuppression.css'
// import { startRemoveAppartment } from './actions/appartementsActions';


const ConfirmationSuppression = ({ history, dispatch, appartement })=> {

  return(
  <div id="confirmation">
    <div className="confirmationContenu">
        <h4>Etes vous sûr de vouloir supprimer ce bien ? </h4>
        <ul>
            <li>{appartement.genre}</li>
              <li>{appartement.quartier}</li>
              <li>{appartement.superficie} m2</li>
            <li>{appartement.prix} €</li>
          </ul>
       <button className="btn btn-primary confirmButton"
       onClick={()=>{
        dispatch(removeAppartementFromMongo(appartement._id, localStorage.getItem('token')));
        history.push('/AdminCatalogue');
      }}
       >Confirmer</button>
      <button className="btn btn-primary deleteBack">
      <Link to={`/editAppartement/${appartement._id}`}>Retour</Link>
      </button>
    </div>
  </div>
);
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement._id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(ConfirmationSuppression);
