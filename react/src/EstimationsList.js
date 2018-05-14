
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './EstimationsList.css';

class EstimationsList extends Component{
  render(){
    return(
      <div id="estimationsList">
        <h3>Demandes d estimation :</h3>
           <table className="table table-striped table-bordered table-hover">
            <thead className="thead-light">
             <tr>
               <th scope="col">Date</th>
               <th scope="col">Genre</th>
               <th scope="col">Superficie</th>
               <th scope="col">Ville</th>
               <th scope="col">Rue</th>
               <th scope="col">Etat</th>
               <th scope="col">Nom</th>
               <th scope="col">Email</th>
               <th scope="col">Tel</th>
             </tr>
            </thead>
            <tbody>
              {Object.values(this.props.estimations).map(
                (produit)=><tr key={produit._id}>
                            <td>{produit.date}</td>
                            <td>{produit.genre}</td>
                            <td>{produit.superficie} m2</td>
                            <td>{produit.ville}</td>
                            <td>{produit.rue}</td>
                            <td>{produit.etat}</td>
                            <td>{produit.nom}</td>
                            <td>{produit.mail}</td>
                            <td>{produit.tel}</td>
                          </tr>
              )}
              </tbody>
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