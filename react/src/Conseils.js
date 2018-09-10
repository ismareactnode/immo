import React from 'react';
import Responsive from 'react-responsive';

import './Conseils.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const Conseils = () => {
  return(
    <div className="conseilsContainer">

    <div className="fleche">
      <a href="#headerNavbar">
        <span className="glyphicon glyphicon-upload">
        </span>
      </a></div>

    <Desktop>
    <div className="conseils">

      <div className="conseilsBanniere">
      </div>

        <div className="conseilsPapierPeint">
          <div className="conseilsContenu">
            <h3>Conseils pour mieux vendre</h3>
            <h5>Conseil juridique immobilier : pour qui ?</h5>

<p>Le conseil juridique immobilier est ouvert aussi bien aux personnes physiques, qu'aux personnes morales et aux professionnels de l'immobilier.</p>
<p>En droit français, une personne physique est une personne humaine, alors qu'une personne morale est une entité juridique telle que les sociétés, les fondations, l'État, les associations déclarées...
Ainsi, peuvent bénéficier d'un conseil juridique immobilier, aussi bien les propriétaires et les locataires, que les agences immobilières ou syndicats de copropriété.</p>


<h5>Conseil juridique immobilier : pour quoi ?</h5>

<p>L'avocat conseil juridique immobilier vous permettra de régler vos litiges immobiliers, au niveau de : </p>

<p>l'achat / vente : non-conformité de l'acte de vente, vices cachés du bien immobilier...</p>

<p>la location : relations entre propriétaire et locataire, loyers et charges impayées, non-conformité du bail de location...</p>
<p>la copropriété : non-respect du règlement de copropriété, problèmes avec le syndicat de copropriété...</p>
<p>le voisinage : troubles anormaux de voisinage, problèmes de mitoyenneté...</p>
<p>le droit de l'urbanisme : aménagement non conforme, non-respect des règles d'urbanisme...</p>


          </div>
        </div>
    </div>
    </Desktop>

    <Mobile>
    <div className="conseilsMobile">
      <div className="conseilsBanniereMobile">
      </div>

        <div className="conseilsPapierPeintMobile">
          <div className="conseilsContenuMobile">
            <h3>Conseils pour mieux vendre</h3>
            <h5>Conseil juridique immobilier : pour qui ?</h5>

<p>Le conseil juridique immobilier est ouvert aussi bien aux personnes physiques, qu'aux personnes morales et aux professionnels de l'immobilier.</p>
<p>En droit français, une personne physique est une personne humaine, alors qu'une personne morale est une entité juridique telle que les sociétés, les fondations, l'État, les associations déclarées...
Ainsi, peuvent bénéficier d'un conseil juridique immobilier, aussi bien les propriétaires et les locataires, que les agences immobilières ou syndicats de copropriété.</p>


<h5>Conseil juridique immobilier : pour quoi ?</h5>

<p>L'avocat conseil juridique immobilier vous permettra de régler vos litiges immobiliers, au niveau de : </p>

<p>l'achat / vente : non-conformité de l'acte de vente, vices cachés du bien immobilier...</p>

<p>la location : relations entre propriétaire et locataire, loyers et charges impayées, non-conformité du bail de location...</p>
<p>la copropriété : non-respect du règlement de copropriété, problèmes avec le syndicat de copropriété...</p>
<p>le voisinage : troubles anormaux de voisinage, problèmes de mitoyenneté...</p>
<p>le droit de l'urbanisme : aménagement non conforme, non-respect des règles d'urbanisme...</p>


          </div>
        </div>
    </div>
    </Mobile>

    </div>

  );
}

export default Conseils;
