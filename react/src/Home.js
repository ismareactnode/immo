import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slices from './Slices';
import { connected } from './actions/connectedAction';
import Slices2 from './Slices2';
import annonceBleue from './annonceBleue';


/*  voici l'url de l'app déployée sur heroku*/
// const url = 'https://vast-chamber-79371.herokuapp.com';



/* regarder le pap.fr comme modele d ux et fonctionnalités et footer */
class Home extends Component{

constructor(props){
  super(props);
  this.state = {
    one: true,
    two: false
  };
  this.diaporama = this.diaporama.bind(this);
}

diaporama(){
  if(this.state.one){
    setTimeout(()=>{
      this.setState(()=>({one: false, two: true}));
    }, 2000)
  };
  if(this.state.two){
    this.setState(()=>({one: true, two: false}))
  }
}
componentWillMount(){
this.props.connected();
// this.diaporama();
}

componentWillUpdate(){
  this.diaporama();
}


  render(){
    return(
    <div>

  {this.state.one && <Slices />}
  {this.state.two && <Slices2 />}
  <div>derniers biens vendus (juste pour le titre, pas pour zizou
  , pour lui, on les mettra à la suite des produits à vendre),
   qui défilent ou bien avec une fleche pour les faire défiler</div>
  <div>banniere qui défile avec messages</div>
  <div>Textes de loi</div>

    </div>

    );
  };
}

export default connect(null, { connected })(Home);
