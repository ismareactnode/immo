import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component
{


	render(){
		return(

			<div>
					<div id="header" className="col-sm-12">
						<div id="agence">
						<img id="logoAgence" src="logoD.png"/>
						Immo DEVAUX
						</div>
						<ul>
							<li>
							   <NavLink exact to="/" activeClassName="is-active">ACCUEIL</NavLink>
							</li>
							<li>
							   <NavLink to="/catalogue" activeClassName="is-active">ACHETER</NavLink>
							</li>
							<li>
							  <NavLink to="/estimation" activeClassName="is-active">ESTIMATION</NavLink>
							</li>
				      <li>
							   <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" id="menu1" type="button"
                    data-toggle="dropdown">L'AGENCE
                    <span className="caret"></span></button>

                      <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">

                      <li role="presentation">
                      	<NavLink role="menuitem" tabindex="-1" to="/votreAgence">
                       		 L'AGENCE DEVAUX
                       	</NavLink>
                      </li>



                       <li role="presentation" className="divider"></li>

                        <li role="presentation">
                      	<NavLink role="menuitem" tabindex="-1" to="/quartier">
                       		 LE QUARTIER
                       	</NavLink>
                      </li>



                      <li role="presentation" className="divider"></li>

                       <li role="presentation">
                  		<NavLink role="menuitem" tabindex="-1" to="/contact">
                       CONTACT
                      </NavLink>
                     </li>



                      </ul>
                  </div>
 </li>
						</ul>



					</div>
				</div>
			);
		}

}
