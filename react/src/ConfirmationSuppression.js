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
  <p>Produit</p>
  <ul>
  <li>{appartement.type}</li>
    <li>{appartement.quartier}</li>
      <li>{appartement.superficie} m2</li>
        <li>{appartement.prix} €</li>
  </ul>
     <p>Etes vous sur de vouloir supprimer cet appartement ? </p>
 <button
 onClick={()=>{
  dispatch(removeAppartementFromMongo(appartement._id));
  history.push('/catalogue');
}}
 >Confirmer</button>
  <Link to={`/editAppartement/${appartement._id}`}>Retour</Link>
  </div>
);
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement._id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(ConfirmationSuppression);
