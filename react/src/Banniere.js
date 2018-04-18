import React from 'react';
import './Banniere.css';


const Banniere = ()=>{
	return(
		<div id="banniere">
			<div id className="titre">
				<h2>Ville de Pantin</h2>
				<h1>VOTRE AGENCE IMMO DEVAUX</h1>
			</div>

			<div id="tofs">
				<ul id="gallerie">
				  <li><img src="baraquePantin.jpg" /></li>
				  <li><img src="appartPantin.jpg" /></li>
				  <li><img src="immeublePantin.jpg" /></li>
				</ul>
			</div>
		</div>
	);
}

export default Banniere;
