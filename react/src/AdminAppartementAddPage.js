import React from 'react';
import AppartementForm from './AppartementForm';
import { connect } from 'react-redux';
import { startAddAppartement } from './actions/appartementsActions';


 class AdminAppartementAddPage extends React.Component{

   render(){
   const token = localStorage.getItem('token');
    return(
      <AppartementForm
        onSubmit= {(appartement)=>{
            this.props.startAddAppartement(appartement, token);
            this.props.history.push('/Admincatalogue');
             }
         }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddAppartement: (appartement, token) => dispatch(startAddAppartement(appartement, token))
});

export default connect (null, mapDispatchToProps)(AdminAppartementAddPage);
