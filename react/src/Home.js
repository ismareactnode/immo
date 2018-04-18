import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banniere from './Banniere';
import Bande from './Bande';
import Devaux from './Devaux';
import Bande2 from './Bande2';
import Pantin from './Pantin';
import Bande3 from './Bande3';
import Dernieres from './Dernieres';

/*  voici l'url de l'app déployée sur heroku*/
// const url = 'https://vast-chamber-79371.herokuapp.com';

class Home extends Component{

  render(){
    return(
    <div>
    <Bande />
    <Devaux />
    <Bande2 />
    <Pantin />
    <Bande3 />
    <Dernieres />
    </div>

    );
  };
}

export default Home;
