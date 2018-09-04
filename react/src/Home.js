import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Responsive from 'react-responsive';
import { connect } from 'react-redux';
import { connected } from './actions/connectedAction';
import annonceBleue from './annonceBleue';
import Caroussel from './Caroussel';
import Slider from './Slider';
import './Home.css';

/*  voici l'url de l'app déployée sur heroku*/
// const url = 'https://vast-chamber-79371.herokuapp.com';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

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
      <div className="fleche">
        <a href="#headerNavbar"><span className="glyphicon glyphicon-upload"></span></a>
      </div>
    <Desktop>
      <div
      onClick={e=>{this.estimer(e)}}
      className="estimerDiv hidden-xs">
        <p id="estimez">ESTIMEZ</p>
        <p>VOTRE BIEN EN LIGNE</p>
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
    </Desktop>

    <Tablet>
      <div
      onClick={e=>{this.estimer(e)}}
      className="estimerDiv hidden-xs">
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
    </Tablet>

    <Mobile>
      <div
      onClick={e=>{this.estimer(e)}}
      className="estimerDiv hidden-xs">
        <p id="estimez">Estimez</p>
        <p> votre bien en ligne</p>
      </div>

      <div className="banniereSlider">
            <Slider />
       </div>

      <div className="banniereEstimerMobile">
        <p>Estimez gratuitement votre bien en ligne !</p>
        <p>L estimation IMMO DEVAUX vous garantit une évaluation rapide et juste de la valeur de votre bien.</p>
      <p><Link to="estimation">Faire estimer mon bien</Link></p>
      </div>

       <div className="banniereCompetencesMobile">
       <h2>Pourquoi choisir IMMO DEVAUX ?</h2>
         <div className="containerCompetencesMobile">
          <div className="competencesMobile">
              <div className="compLeftMobile">

              <div className="iconePartieMobile">
                  <div className="iconeCompetencesMobile">
                    <i className="fa fa-mortar-board"></i>
                  </div>
                  <div className="textCompetencesMobile">
                    <h4>Une expertise locale</h4>
                    <p>Implantés à Pantin depuis plus de 25 ans</p>
                  </div>
              </div>


                <div className="iconePartieMobile">
                    <div className="iconeCompetencesMobile">
              <i className="fa fa-calculator"></i>
                    </div>
                    <div className="textCompetencesMobile">
                      <h4>Une estimation en ligne</h4>
                      <p>Une estimation gratuite et un certificat de valeur</p>
                    </div>
                </div>

            </div>
            <div className="compRightMobile">
              <div className="iconePartieMobile">
                  <div className="iconeCompetencesMobile">
                    <i className="fa fa-home"></i>
                  </div>
                  <div className="textCompetencesMobile">
                    <h4>Des biens en exclusivité</h4>
                    <p>Des biens à fort rapport qualité/prix</p>
                  </div>
              </div>
              <div className="iconePartieMobile">
                  <div className="iconeCompetencesMobile">
                    <i className="fa fa-building"></i>
                  </div>
                  <div className="textCompetencesMobile">
                    <h4>Des nouveautés régulières</h4>
                    <p>Nous vous proposons régulièrement des
                    nouveautés</p>
                  </div>
              </div>
          </div>
        </div>
        </div>
     </div>

     <div className="BanniereDerniersBiensMobile">

           <h2>Derniers biens publiés</h2>
           <Caroussel />
          <div>
          </div>
    </div>
    </Mobile>

  </div>

    );
  };
}

export default connect(null, { connected })(Home);
