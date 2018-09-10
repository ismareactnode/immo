import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import './Header.css';
import { Link } from 'react-router-dom';


const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class Header extends React.Component{
	render(){
		if(this.props.connected === true){
			return(
				<div>
				  <Desktop>
						<div id="headerAdmin" classNameName="col-sm-12">
							<div id="agence">
							    ADMINISTRATEUR
							  </div>

								<Link to="/adminDashboard"><h3>Tableau de bord</h3></Link>


						</div>
						</Desktop>
						<Tablet>
							<div id="headerAdminMobile" classNameName="col-sm-12">

															<Link to="/adminDashboard"><h3>Tableau de bord</h3></Link>
							</div>
						</Tablet>
						<Mobile>
							<div id="headerAdminMobile" classNameName="col-sm-12">

															<Link to="/adminDashboard"><h3>Tableau de bord</h3></Link>
							</div>
						</Mobile>
					</div>
			);
		}else{
			return(
				<nav className="navbar navbar-default headerNavbar" id="headerNavbar">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand logoDevaux" href="#">
							<img className="logoDevaux" src="logo.JPG" alt="IMMODEVAUX" />
</a>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


						  <Desktop>
							<ul className="nav navbar-nav menuBase">
						 	 <li><Link to="/">ACCUEIL</Link></li>
				        <li><Link to="/catalogue">ACHETER </Link></li>
				        <li><Link to="/estimation">VENDRE</Link></li>
								<li><Link to="/faireGerer">FAIRE GERER</Link></li>
								<li><Link to="/conseils">CONSEILS</Link></li>
						  </ul>
							 </Desktop>
							 <Tablet>
							 <ul className="nav navbar-nav menuBaseTablet">
								<li><Link to="/">ACCUEIL</Link></li>
								 <li><Link to="/catalogue">ACHETER </Link></li>
								 <li><Link to="/estimation">VENDRE</Link></li>
							 </ul>
								</Tablet>
							 <Mobile>
							<ul className="nav navbar-nav menuBaseMobile">
							 <li><Link to="/">ACCUEIL</Link></li>
								<li><Link to="/catalogue">ACHETER </Link></li>
								<li><Link to="/estimation">VENDRE</Link></li>
								<li><Link to="/faireGerer">FAIRE GERER</Link></li>
								<li><Link to="/conseils">CONSEILS</Link></li>
							</ul>
							 </Mobile>

				      <ul className="nav navbar-nav navbar-right">
				        <li className="dropdown">
				          <a href="#" className="dropdown-toggle" data-toggle="dropdown"
									role="button" aria-haspopup="true" aria-expanded="false">
									L'AGENCE <span className="caret"></span></a>
				          <ul className="dropdown-menu">
				            <li><Link to="/agence">IMMO DEVAUX</Link></li>
				            <li><Link to="/quartier">LES QUARTIERS</Link></li>

				            <li><Link to="/contact">CONTACT</Link></li>
				          </ul>
				        </li>
								<li>
								  <Link to="/admin">CONNEXION</Link>
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
