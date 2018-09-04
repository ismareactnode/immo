import React from 'react';
import Responsive from 'react-responsive';

import './Agence.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const Agence = (props) => {
  return(
    <div className="agenceContainer">
    <div className="fleche">
      <a href="#headerNavbar"><span className="glyphicon glyphicon-upload"></span></a>
    </div>
    <Desktop>
      <div className="agence">
        <div className="agenceNom">
            <h2>Votre agence de Pantin</h2>

        </div>
        <div className="agenceContenu">
          <div className="agenceContenuText">
            <h3>IMMO DEVAUX</h3>
            <p>
               Votre agence immobilière IMMO DEVAUX à Pantin <br/>


            Vous souhaitez : <br/>

            Acheter un appartement ? Acheter une maison ? Louer un appartement ?
             Louer une maison ? Vendre votre bien ? Faire gérer votre bien ?
            <p>Depuis plus de 25 ans, votre agence immobilière Immo Devaux accompagne ses
             clients dans la réalisation de leur projets, d'achat, de vente ou de location.

            Les besoins de nos clients évoluent et sont différents pour chacun d'entre eux,
             nous nous adaptons donc pour optimiser leur recherche d'un bien immobilier, ou
              la vente de leur bien.</p>

            <p>Afin de toujours être à la page, notre équipe est régulièrement formée,
             ainsi, fort de leurs expériences, nos conseillers pourrons répondre à vos attentes.</p>

            <p>Cela fait le succès de votre agence sur le secteur du 20 ème arrondissement
            de Paris. Ainsi en nous confiant votre projet, vous bénéficierez de la
             connaissance locale d'un conseiller avec les outils et le savoir-faire d'un
             réseau national.</p>

            <p>N'hésitez pas à nous contacter ou à visiter notre site pour plus d'informations.</p>

            <p>L'agence immobilière Laforêt à Paris 20 Gambetta vous acceuille :</p>

            Du lundi au vendredi de 9h30 à 19h00 et le samedi de 10h00 à 18h00

            au 99, avenue Jean Lolive 93500 PANTIN</p>



            <h5>PANTIN</h5>


            <p>PANTIN est un quartier que vous allez aimer !</p>

            <p>La rue des Pyrénées et ses nombreux commerces, l'authentique cimetière du Père
             Lachaise, les nombreux parcs (bois de Vincennes, Parc de Belleville, Buttes
               Chaumont) et des vues en hauteur qui vous permettent de contempler Paris. Le 2...
                  </p>
          </div>
          <div className="agenceContenuTof">

              <div className="agenceTof">
              </div>

              <div className="agenceAdresseHoraires">

                      <div className="agenceTofAdresse">
                         <p> 99, avenue Jean Lolive </p>
                         <p>93500 PANTIN</p>
                      </div>

                      <div className="agenceHoraires">
                        <h5> <span className="glyphicon glyphicon-time"></span>Horaires de l'agence : </h5>
                        <ul className="horairesUl">
                          <li><span className="horairesJour">Lundi:</span> 9h00-19h00</li>
                          <li><span className="horairesJour">Mardi:</span> 9h00-19h00</li>
                            <li><span className="horairesJour">Mercredi:</span> 9h00-19h00</li>
                          <li><span className="horairesJour">Jeudi:</span> 9h00-19h00</li>
                          <li><span className="horairesJour">Vendredi:</span> 9h00-19h00</li>
                          <li><span className="horairesJour">Samedi:</span> 9h00-19h00</li>
                          <li><span className="horairesJour">Dimanche:</span> 9h00-19h00</li>
                        </ul>
                      </div>
                      <div className="agenceTel">
                         <span className="glyphicon glyphicon-earphone"></span>
                         <span>01 48 40 44 11</span>
                      </div>
                      <div className="agenceMail">
                         <span className="glyphicon glyphicon-envelope"></span>
                         <span> <a href="mailto:immo-devaux@wanadoo.fr">immo-devaux@wanadoo.fr</a></span>
                      </div>
              </div>


          </div>
        </div>
      </div>
      </Desktop>

      <Mobile>
        <div className="agenceMobile">
        <div className="agenceTofMobile">
        </div>
              <h3>Votre agence de Pantin</h3>
              <div className="agenceTofAdresseMobile">
                 <p> 99, avenue Jean Lolive </p>
                 <p>93500 PANTIN</p>
              </div>

          <div className="agenceContenuMobile">
            <div className="agenceContenuTextMobile">
              <h3>IMMO DEVAUX</h3>
              <p>
                 Votre agence immobilière IMMO DEVAUX à Pantin <br/>


              Vous souhaitez : <br/>

              Acheter un appartement ? Acheter une maison ? Louer un appartement ?
               Louer une maison ? Vendre votre bien ? Faire gérer votre bien ?
              <p>Depuis plus de 25 ans, votre agence immobilière Immo Devaux accompagne ses
               clients dans la réalisation de leur projets, d'achat, de vente ou de location.

              Les besoins de nos clients évoluent et sont différents pour chacun d'entre eux,
               nous nous adaptons donc pour optimiser leur recherche d'un bien immobilier, ou
                la vente de leur bien.</p>

              <p>Afin de toujours être à la page, notre équipe est régulièrement formée,
               ainsi, fort de leurs expériences, nos conseillers pourrons répondre à vos attentes.</p>

              <p>Cela fait le succès de votre agence sur le secteur du 20 ème arrondissement
              de Paris. Ainsi en nous confiant votre projet, vous bénéficierez de la
               connaissance locale d'un conseiller avec les outils et le savoir-faire d'un
               réseau national.</p>

              <p>N'hésitez pas à nous contacter ou à visiter notre site pour plus d'informations.</p>

              <p>L'agence immobilière Laforêt à Paris 20 Gambetta vous acceuille :</p>

              Du lundi au vendredi de 9h30 à 19h00 et le samedi de 10h00 à 18h00

              au 99, avenue Jean Lolive 93500 PANTIN</p>



              <h5>PANTIN</h5>


              <p>PANTIN est un quartier que vous allez aimer !</p>

              <p>La rue des Pyrénées et ses nombreux commerces, l'authentique cimetière du Père
               Lachaise, les nombreux parcs (bois de Vincennes, Parc de Belleville, Buttes
                 Chaumont) et des vues en hauteur qui vous permettent de contempler Paris. Le 2...
                    </p>
            </div>
            <div className="agenceContenuTofMobile">
                <div className="agenceAdresseHorairesMobile">
                        <div className="agenceHorairesMobile">
                          <h5> <span className="glyphicon glyphicon-time"></span>Horaires de l'agence : </h5>
                          <ul className="horairesUl">
                            <li><span className="horairesJour">Lundi:</span> 9h00-19h00</li>
                            <li><span className="horairesJour">Mardi:</span> 9h00-19h00</li>
                              <li><span className="horairesJour">Mercredi:</span> 9h00-19h00</li>
                            <li><span className="horairesJour">Jeudi:</span> 9h00-19h00</li>
                            <li><span className="horairesJour">Vendredi:</span> 9h00-19h00</li>
                            <li><span className="horairesJour">Samedi:</span> 9h00-19h00</li>
                            <li><span className="horairesJour">Dimanche:</span> 9h00-19h00</li>
                          </ul>
                        </div>
                        <div className="agenceTel">
                           <span className="glyphicon glyphicon-earphone"></span>
                           <span>01 48 40 44 11</span>
                        </div>
                        <div className="agenceMail">
                           <span className="glyphicon glyphicon-envelope"></span>
                           <span> <a href="mailto:immo-devaux@wanadoo.fr">immo-devaux@wanadoo.fr</a></span>
                        </div>
                </div>


            </div>
          </div>
        </div>
        </Mobile>
</div>

);
}
export default Agence;
