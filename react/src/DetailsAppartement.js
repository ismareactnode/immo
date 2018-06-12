import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AppartementItem.css';


class DetailsAppartement extends Component{

  componentWillMount(){
    console.log(this.props.match.params);
  }
  render(){
    const { genre, quartier, superficie, prix, photo} = this.props.appartement;
    return(
      <div id="DetailsAppartement">

        <div id="carteBigPhoto">

          <ul>
            <li>{genre}</li>
            <li>{quartier}</li>
            <li>{superficie}</li>
            <li>{prix}</li>
            <li>{photo}</li>
<img src='tof7.jpeg' alt="photo"  />
          </ul>
        </div>


      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
    return{
    appartement: state.catalogue.find((appartement) => appartement._id === props.match.params.id)
  };
};
export default connect (mapStateToProps, null) (DetailsAppartement);
