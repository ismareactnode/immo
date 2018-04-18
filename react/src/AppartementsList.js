import React from 'react';
import { connect } from 'react-redux';
import AppartementItem from './AppartementItem';
import selectAppartements from './selectors/appartements';


class AppartementsList extends React.Component{

    render(){
      return(
       <div>
           <h2>Catalogue</h2>
           <p>Celui ci contiend tous les biens à la vente actuellement et est
           susceptible de changer dans les jours qui suivent.</p>
    {Object.values(this.props.appartements).map(appartement =>
      <AppartementItem key={appartement._id} {...appartement}  />)}
  </div>
       );
    }
}



const mapStateToProps  = (state) => {
  return {
    appartements: selectAppartements(state.catalogue, state.filters)
  }
}

export default connect(mapStateToProps)(AppartementsList);
