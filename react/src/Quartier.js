import React from 'react';
import Responsive from 'react-responsive';

import './Quartier.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const Quartier = (props) => {
  return(
  <div>
   <Desktop>
    <div className="quartiers">
        <div className="quartiersBanniere">
        </div>
        <div className="quartiersPapierPeint">
            <div className="quartiersContenu">
              <h3>Les quartiers de Pantin</h3>
              <p>Pantin est une commune française située dans la banlieue nord-est de Paris dont elle est limitrophe, dans le département de la Seine-Saint-Denis en région Île-de-France. Elle est limitrophe de : Aubervilliers, le 19e arrondissement de Paris, La Courneuve, Bobigny, Noisy-le-Sec, Romainville, Les Lilas, Le Pré-Saint-Gervais.</p>
              <p>La ville est située en bordure de Paris et est principalement constituée par une plaine traversée par les routes nationales 2 et 3, la ligne de chemin de fer Paris - Strasbourg et le canal de l'Ourcq.
    Une petite rivière, le ru de Montfort, qui prend sa source à Bobigny et se jette dans la Seine à Saint-Denis, passe à Pantin, mais cette rivière est busée de longue date et n'est plus visible.</p>
    <ul>
       <li>Mairie-Ourcq</li>
       <li>Quatre-Chemins</li>
       <li>Petit-Pantin</li>
       <li>Haut-Pantin</li>
       <li>Les Courtillières</li>

    </ul>
            </div>

            <div className="quartiersPlan">
            </div>

        </div>

    </div>
   </Desktop>
   <Mobile>
    <div className="quartiers">
        <div className="quartiersBanniereMobile">
        </div>

        <div className="quartiersPapierPeintMobile">

            <div className="quartiersContenuMobile">
                  <h3>Les quartiers de Pantin</h3>
              <p>Pantin est une commune française située dans la banlieue nord-est de Paris dont elle est limitrophe, dans le département de la Seine-Saint-Denis en région Île-de-France. Elle est limitrophe de : Aubervilliers, le 19e arrondissement de Paris, La Courneuve, Bobigny, Noisy-le-Sec, Romainville, Les Lilas, Le Pré-Saint-Gervais.</p>
              <p>La ville est située en bordure de Paris et est principalement constituée par une plaine traversée par les routes nationales 2 et 3, la ligne de chemin de fer Paris - Strasbourg et le canal de l'Ourcq.
    Une petite rivière, le ru de Montfort, qui prend sa source à Bobigny et se jette dans la Seine à Saint-Denis, passe à Pantin, mais cette rivière est busée de longue date et n'est plus visible.</p>
    <ul>
       <li>Mairie-Ourcq</li>
       <li>Quatre-Chemins</li>
       <li>Petit-Pantin</li>
       <li>Haut-Pantin</li>
       <li>Les Courtillières</li>

    </ul>
            </div>

            <div className="quartiersPlanMobile">
            </div>

        </div>

    </div>
   </Mobile>
  </div>
);
}
export default Quartier;
