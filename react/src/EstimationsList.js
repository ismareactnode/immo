
import React, { Component } from 'react';
import { connect } from 'react-redux';

class EstimationsList extends Component{
  render(){
    return(
      <div id="estimationsList">
        <h3>Demandes d estimation :</h3>
           <table>
             <tr>
               <th>genre</th>
               <th>superficie</th>
               <th>nom</th>
               <th>mail</th>
               <th>tel</th>
               <th>etat</th>
               <th>ville</th>
               <th>rue</th>
             </tr>
              {Object.values(this.props.estimations).map(
                (produit)=><tr key={produit._id}>
                            <td>{produit.genre}</td>
                            <td>{produit.superficie}</td>
                            <td>{produit.nom}</td>
                            <td>{produit.mail}</td>
                            <td>{produit.tel}</td>
                            <td>{produit.etat}</td>
                            <td>{produit.ville}</td>
                            <td>{produit.rue}</td>
                          </tr>
              )}
            </table>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return{
    estimations: state.estimations
  };
}
export default connect(mapStateToProps, null)(EstimationsList);
