import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { connected } from './actions/connectedAction';

import './AdminDashboard.css';

class AdminDashboard extends Component{
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  };
componentWillMount(){
  this.props.connected();
}
  logOut(e){
    e.preventDefault();
    const token = localStorage.getItem('token');
    this.props.history.push('/');
    try{
      fetch('/users/me/token',
         {
           method: 'delete',
           headers: {
             'x-auth': token
           }
         }
      ).then(()=>{
        localStorage.setItem('name','');
        localStorage.setItem('email', '');
        localStorage.setItem('token', '');
      });
    }catch(e){
      console.log('error :', e);
    }
  }


  render(){
    return(

      // <p>
      // {localStorage.getItem("name")? '' :
      // Connectez vous pour accéder à ce contenu
      // }
      // </p>
     <div id="adminMain">

       <header>
          <div id="titre">
            <h2>ADMINISTRATEUR</h2>
          </div>
          <div id="button">
            <button onClick={e => {this.logOut(e)}}>Déconnexion</button>
         </div>
       </header>

       <div id="AdminDashboard">

          <div id="contenu">
            <div id="gauche">
            <NavLink to="/Admincatalogue">
              <div id="catalogueProduits">

                    <h4>Catalogue</h4>
                    <p>Gérer tous vos biens</p>

                  </div>
            </NavLink>

            <NavLink to="/AdminQuestions">
              <div id="questions">
                <h4>Visiteurs</h4>
                <p>Leurs questions posées</p>
              </div>
            </NavLink>
            </div>

            <div id= "droite">
               <NavLink to="AdminEstimation">
                  <div id="demandesEstimation">
                    <h4>Vendeurs</h4>
                    Leur demandes d estimation
                  </div>
                </NavLink>


              <NavLink to="AdminAlertes">
                <div id="alertes">
                  <h4>Acheteurs</h4>
                    Leurs critères de recherche
                 </div>
              </NavLink>
           </div>

          </div>
       </div>


    </div>

    );
  };
}

export default connect(null, {connected})(AdminDashboard);
