import React, {Component} from 'react';
import Responsive from 'react-responsive';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { connected, setNotConnected } from './actions/connectedAction';

import './AdminDashboard.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class AdminDashboard extends Component{
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  };
componentWillMount(){
  this.props.connected();
}
  logOut(e){
    this.props.setNotConnected();
    const token = localStorage.getItem('token');

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
        this.props.history.push('/');
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
     <div className="adminContainer">

      <Desktop>
        <div className="adminMain">
          <div className="adminButton">
            <button onClick={e => {this.logOut(e)}}>Déconnexion</button>
         </div>


       <div id="AdminDashboard">
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


              <NavLink to="AdminRecherches">
                <div id="recherches">
                  <h4>Acheteurs</h4>
                    Leurs critères de recherche
                 </div>
              </NavLink>
           </div>
       </div>
      </div>
      </Desktop>

      <Mobile>
          <div id="button">
            <button onClick={e => {this.logOut(e)}}>Déconnexion</button>
         </div>


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


              <NavLink to="AdminRecherches">
                <div id="recherches">
                  <h4>Acheteurs</h4>
                    Leurs critères de recherche
                 </div>
              </NavLink>
           </div>
          </div>
       </div>
      </Mobile>


    </div>

    );
  };
}

export default connect(null, {connected, setNotConnected})(AdminDashboard);
