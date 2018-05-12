import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{

	render(){
		console.log(this.props);
		return(
			<div>
					<div id="header" className="col-sm-12">
						<div id="agence">
						  <img id="logoAgence" src="logoD.png"/>
						    Immo DEVAUX
						  </div>
								<ul>

									   <NavLink exact to="/" activeClassName="is-active"><li>ACCUEIL</li></NavLink>


									   <NavLink to="/catalogue" activeClassName="is-active"><li>ACHETER</li>
	 									</NavLink>

									  <NavLink to="/estimation" activeClassName="is-active"><li>ESTIMATION</li></NavLink>

						   
									   <div className="dropdown">
		                    <button className="btn btn-primary dropdown-toggle" id="menu1" type="button"
		                    data-toggle="dropdown">L' AGENCE
		                    <span className="caret"></span></button>
		                      <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
		                    		<li role="presentation">
		                      			<NavLink role="menuitem" tabindex="-1" to="/votreAgence">
		                       		 		L' AGENCE DEVAUX
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

									<NavLink to="/admin" activeClassName="is-active"><li>
									Connexion
									</li></NavLink>
								</ul>
					</div>
				</div>
			);
		}
}

export default Header;
