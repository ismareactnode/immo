
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RecherchesList.css';

class RecherchesList extends Component{

  render(){
    return(
      <div id="recherchesList">
        <h3>Critères de recherche:</h3>
           <table className="table table-striped table-bordered table-hover ">
            <thead className="thead-light">
             <tr>
               <th scope="col">Genre</th>
               <th scope="col">Superficie</th>
               <th scope="col">A proximité de</th>
               <th scope="col">Quartier</th>
               <th scope="col">Etat</th>
               <th scope="col">Budget max</th>
               <th scope="col">Nom</th>
               <th scope="col">Email</th>
               <th scope="col">Tel</th>
               <th scope="col">Précisions</th>
               <th scope="col">Date</th>
               <th scope="col">Produits correspondants</th>
               <th scope="col">Estimations correspondants</th>


             </tr>
            </thead>
            <tbody>
              {
                Object.values(this.props.recherches).map(
                (produit)=>{ return(<tr key={produit._id}>
                            <td>{produit.genre}</td>
                            <td>{produit.superficie} m2</td>
                            <td>{produit.proximite}</td>
                            <td>{produit.quartier}</td>
                            <td>{produit.etat}</td>
                            <td>{produit.budget}</td>
                            <td>{produit.nom}</td>
                            <td>{produit.mail}</td>
                            <td>{produit.tel}</td>
                            <td>{produit.precision}</td>
                            <td>{produit.date}</td>
                            <td>{produit.appart}</td>
                            <td>{Object.values(produit.estimation).map(
                              estimation => <a className="matchingEstimations"
                               href="mailto:{estimation.email}">{estimation.email}</a>
                            )}</td>
                            <td>{}</td>
                          </tr>);}
              )}
              </tbody>
            </table>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return{
    recherches: state.recherches
  };
}
export default connect(mapStateToProps, null)(RecherchesList);
