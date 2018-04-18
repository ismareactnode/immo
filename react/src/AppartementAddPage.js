import React from 'react';
import AppartementForm from './AppartementForm';
import { connect } from 'react-redux';
import { startAddAppartement } from './actions/appartementsActions';


 class AppartementAddPage extends React.Component{

   render(){

    return(
      <AppartementForm

        onSubmit= {
          (appartement)=>{
            this.props.startAddAppartement(appartement);
            this.props.history.push('/catalogue');
             }
         }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddAppartement: (appartement) => dispatch(startAddAppartement(appartement))
});

export default connect (null, mapDispatchToProps)(AppartementAddPage);
