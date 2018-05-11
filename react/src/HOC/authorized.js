import React, { Component } from 'react';

export default function(WrappedComponent){
  return class extends Component{
    render(){
      if(localStorage.getItem('token')){
        return(
          <WrappedComponent {...this.props}/>
        );
      }else{
        return <p style={{marginTop: '120px'}}>Vous devez vous connecter à l espace admin</p>;
      }
    }
  }
};
