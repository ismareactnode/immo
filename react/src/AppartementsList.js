import React from 'react';
import { connect } from 'react-redux';

import './AppartementsList.css';
import AppartementItem from './AppartementItem';
import selectAppartements from './selectors/appartements';


class AppartementsList extends React.Component{

    render(){
      return(
       <div id="AppartementsList">
           <h4>{Object.keys(this.props.appartements).length} résultat{Object.keys(this.props.appartements).length>1 ? 's' : ''}</h4>
           <p>Celui ci contiend tous les biens à la vente actuellement et est
           susceptible de changer dans les jours qui suivent.</p>

          { Object.values(this.props.appartements).map(appartement =>
            <AppartementItem key={appartement._id} {...appartement}  />)
          }
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
