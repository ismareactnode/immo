
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './RecherchesList.css';

class RecherchesList extends Component{

  render(){
    return(
      <div id="recherchesList">
           <table className="table table-striped table-bordered table-hover ">
            <thead className="thead-light">
             <tr>
             <th scope="col">Nom</th>
             <th scope="col">Email</th>
             <th scope="col">Tel</th>
               <th scope="col">Genre</th>
               <th scope="col">Superficie</th>
               <th scope="col">Quartier</th>
               <th scope="col">Budget max</th>
               <th scope="col">Date</th>
               <th scope="col">Produits correspondants</th>
               <th scope="col">Estimations correspondants</th>


             </tr>
            </thead>
            <tbody>
              {
                Object.values(this.props.recherches).map(
                (produit)=>{ return(<tr key={produit._id}>
                  <td>{produit.nom}</td>
                  <td>{produit.mail}</td>
                  <td>{produit.tel}</td>
                            <td>{produit.genre}</td>
                            <td>{produit.superficie} m2</td>
                            <td>{produit.quartier}</td>
                            <td>{produit.budget}</td>

                            <td>{produit.date}</td>
                            <td>{Object.values(produit.appart).map(
                              (appart)=><a href={`/editAppartement/${appart}`}>{appart} </a>
                            )}</td>
                            <td>{Object.values(produit.estimation).map(
                              estimation => <Link to={`/estimationItem/${estimation._id}`}>{estimation._id}</Link>
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
