import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default function(WrappedComponent){
  return class extends Component{
    render(){
      if(localStorage.getItem('token')){
        return(
          <WrappedComponent {...this.props}/>
        );
      }else{
        return <div><p style={{marginTop: '120px'}}>Vous devez vous connecter à l espace admin</p>
        <NavLink to='/admin'>Connexion</NavLink>
        </div>;
      }
    }
  }
};
