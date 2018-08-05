import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
       <footer>
       <div className="footerMain">

         <div className="ligne">
          <img className="logoSnpi" src="Snpi.JPG" alt="logo_snpi" />
           <div>
           Copyright © 2018 IsmaWeb
           </div>
           <div id="dev">
                DEVAUX PANTIN
           </div>

            <ul className="footerMenu">
              <li><Link to="">Accueil</Link></li>
              <li><Link to="">Conditions générales</Link></li>
              <li><Link to="">Contact</Link></li>
            </ul>

          </div>

          <div>
            Toutes transactions immobilières 99, avenue Jean Lolive 93500 PANTIN
            TEL: 01 48 40 44 11
            FAX :  01 48 43 57 15
            CP N°T505 délivrée par la Préfecture de la Seine Saint Denis
            Adhérent N°16285 SNPI 26, avenue Victor Hugo 75116 PARIS
            RCS de BOBIGNY : B 351.550.843
          </div>
        </div>
       </footer>
);

export default Footer;
