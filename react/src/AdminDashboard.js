import React, {Component} from 'react';
import { connect } from 'react-redux';

import './AdminDashboard.css';

class AdminDashboard extends Component{
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  };

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
<div>
       <div id="AdminDashboard">
         <div>
            <p>Bienvenue, {localStorage.getItem('name')} ! </p>
            <button onClick={e => {this.logOut(e)}}>Déconnection</button>
         </div>
       </div>
    </div>

    );
  };
}

export default connect(null, null)(AdminDashboard);
