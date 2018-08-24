import React from 'react';
import { connect } from 'react-redux';

import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
	render(){
		if(this.props.connected === true){
			return(
				<div>
						<div id="headerAdmin" classNameName="col-sm-12">
							<div id="agence">
							    ADMINISTRATEUR
							  </div>


								<h3><strong>{localStorage.getItem('name')}</strong></h3>

						</div>
					</div>
			);
		}else{
			return(
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">IMMO DEVAUX</a>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
						 	 <li><a href="/">ACCUEIL </a></li>
				        <li><a href="/catalogue">ACHETER </a></li>
				        <li><a href="/estimation">VENDRE</a></li>
								<li><a href="/faireGerer">FAIRE GERER<span className="sr-only">(current)</span></a></li>
								 <li><a href="/conseils">CONSEILS</a></li>
						  </ul>

				      <ul className="nav navbar-nav navbar-right">
				        <li className="dropdown">
				          <a href="#" className="dropdown-toggle" data-toggle="dropdown"
									role="button" aria-haspopup="true" aria-expanded="false">
									L'AGENCE <span className="caret"></span></a>
				          <ul className="dropdown-menu">
				            <li><a href="/agence">IMMO DEVAUX</a></li>
				            <li><a href="/quartier">LES QUARTIERS</a></li>
										<li role="separator" className="divider"></li>
				            <li><a href="/contact">CONTACT</a></li>
				          </ul>
				        </li>
								<li>
								  <a href="/admin">CONNEXION</a>
								</li>
				      </ul>
				    </div>
				  </div>
				</nav>


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
