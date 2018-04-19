import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
       <footer>
       <div id="ligne">
         <div>
         Copyright © 2018 IsmaWeb
         </div>
         <div id="dev">
           DEVAUX PANTIN
         </div>

          <ul>
            <li><Link to="">Accueil</Link></li>
            <li><Link to="">Conditions générales</Link></li>
            <li><Link to="">Contact</Link></li>
          </ul>

        </div>
       </footer>
);

export default Footer;