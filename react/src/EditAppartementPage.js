import React from 'react';
import AppartementForm from './AppartementForm';
import { connect } from 'react-redux';
import { removeAppartementFromMongo } from './actions/appartementsActions';

// import { startEditAppartment, startRemoveAppartment } from './actions/appartementsActions';

// import { startRemoveAppartment } from './actions/appartementsActions';;
import { removeAppartementFromRedux } from './actions/appartementsActions';
// import { RemoveAppartementFromMongo } from './actions/appartementsActions';
const EditAppartementPage = (props)=> {

  return(
  <div>

    <AppartementForm
    appartement = {props.appartement}

    // onSubmit={(appartement)=>{
    //     props.dispatch(startEditAppartment(props.appartement._id, appartement));
    //     props.history.push('/catalogue');
    //   }
    // }
  />
 <button
 onClick={()=>{
  props.dispatch(removeAppartementFromMongo(props.appartement._id));
  //  props.dispatch(removeAppartementFromMongo(props.appartement));
  //   props.history.push('/catalogue');
}}
 >Supprimer</button>
   <p></p>
  </div>
);
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement._id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditAppartementPage);
