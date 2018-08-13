import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { connected } from './actions/connectedAction';
import annonceBleue from './annonceBleue';
import Caroussel from './Caroussel';
import Slider from './Slider';
import './Home.css';

/*  voici l'url de l'app déployée sur heroku*/
// const url = 'https://vast-chamber-79371.herokuapp.com';


/* regarder le pap.fr comme modele d ux et fonctionnalités et footer */
class Home extends Component{

estimer(e){
  e.preventDefault();
  this.props.history.push('/estimation');
}

componentWillMount(){
this.props.connected();
// this.diaporama();
}

  render(){
    return(
    <div className="home">

      <div
      onClick={e=>{this.estimer(e)}}
      className="estimerDiv">
        <p>Estimez</p>
        <p> votre bien en ligne</p>
      </div>

      <div className="banniereSlider">
            <Slider />
       </div>

      <div className="banniereEstimer">
        <p>Estimez gratuitement votre bien en ligne !</p>
        <p>L estimation IMMO DEVAUX vous garantit une évaluation rapide et juste de la valeur de votre bien.</p>
      <p><Link to="estimation">Faire estimer mon bien</Link></p>
      </div>
       <div className="banniereCompetences">
       <h2>Pourquoi choisir IMMO DEVAUX ?</h2>
         <div className="containerCompetences">
          <div className="competences">
              <div className="compLeft">

              <div className="iconePartie">
                  <div className="iconeCompetences">
                    <i className="fa fa-mortar-board"></i>
                  </div>
                  <div className="textCompetences">
                    <h4>Une expertise locale</h4>
                    <p>Implantés à Pantin depuis plus de 25 ans</p>
                  </div>
              </div>


                <div className="iconePartie">
                    <div className="iconeCompetences">
              <i className="fa fa-calculator"></i>
                    </div>
                    <div className="textCompetences">
                      <h4>Une estimation en ligne</h4>
                      <p>Une estimation gratuite et un certificat de valeur</p>
                    </div>
                </div>

            </div>
            <div className="compRight">
              <div className="iconePartie">
                  <div className="iconeCompetences">
                    <i className="fa fa-home"></i>
                  </div>
                  <div className="textCompetences">
                    <h4>Des biens en exclusivité</h4>
                    <p>Des biens à fort rapport qualité/prix</p>
                  </div>
              </div>
              <div className="iconePartie">
                  <div className="iconeCompetences">
                    <i className="fa fa-building"></i>
                  </div>
                  <div className="textCompetences">
                    <h4>Des nouveautés régulières</h4>
                    <p>Nous vous proposons régulièrement des
                    nouveautés</p>
                  </div>
              </div>
          </div>
        </div>
        </div>
     </div>

     <div className="BanniereDerniersBiens">

           <h2>Derniers biens publiés</h2>
           <Caroussel />
          <div>
          </div>
    </div>
  </div>

    );
  };
}

export default connect(null, { connected })(Home);
