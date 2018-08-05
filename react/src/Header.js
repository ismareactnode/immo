import React from 'react';
import { connect } from 'react-redux';

import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
	render(){
		if(this.props.connected === true){
			return(
				<div>
						<div id="headerAdmin" className="col-sm-12">
							<div id="agence">
							  <img id="logoAgence" src="logoD.png"/>
							    Immo DEVAUX
							  </div>
								<ul>
								  <li><h3>Espace ADMINISTRATEUR</h3></li>
								<li><h3><strong>{localStorage.getItem('name')}</strong></h3></li>
								</ul>
						</div>
					</div>
			);
		}else{
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

											<NavLink to="/recherche" activeClassName="is-active"><li>RECHERCHER</li>
										 </NavLink>

										  <NavLink to="/estimation" activeClassName="is-active"><li>ESTIMATION</li></NavLink>

											<NavLink to="/conseils" activeClassName="is-active"><li>CONSEILS</li></NavLink>


										   <div className="dropdown" id="drop">
			                    <button className="btn btn-primary dropdown-toggle" id="menu1" type="button"
			                    data-toggle="dropdown">L' AGENCE
			                    <span className="caret"></span></button>
			                      <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
			                    		<li role="presentation">
			                      			<NavLink role="menuitem" tabindex="-1" to="/votreAgence">
			                       		 		IMMOBILIER DEVAUX
			                      			</NavLink>
			                      		</li>
			                       		<li role="presentation" className="divider"></li>
			                        		<li role="presentation">
			                      			<NavLink role="menuitem" tabindex="-1" to="/quartier">
			                       		 		LES QUARTIERS
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
}

function mapStateToProps(state){
	return {
		connected: state.userConnected
	};
}
export default connect(mapStateToProps, null)(Header);
