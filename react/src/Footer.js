import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component{
  render(){
    if(this.props.connected === true){
        return (
               <footer>
                 <div className="footer">
                     <div className="logo footerLeft">
                          <img className="logoSnpi" src="Snpi.JPG" alt="logo_snpi" />
                     </div>


                       <div className="conceptionAdmin">
                         <div>
                         © 2018 Immo Devaux  -  Conception : IsmaWeb
                         </div>

                    </div>
                 </div>

               </footer>
        );
    }else{





      return (
             <footer>
               <div className="footer">
                   <div className="logo footerLeft">
                        <img className="logoSnpi" src="Snpi.JPG" alt="logo_snpi" />
                   </div>
                   <div className="footerRight">
                     <div className="footerMenu">
                       <div className="menu">
                       <Link to="/">ACCUEIL</Link><span>  |  </span>
                        <Link to="/contact">NOUS CONTACTER</Link><span>  |  </span>
                        <Link to="/catalogue">ACHETER</Link><span>  |  </span>
                        <Link to="/estimation">VENDRE</Link><span>  |  </span>
                        <Link to="">FAQ</Link><span>  |  </span>
                       <Link to="">MENTIONS LEGALES</Link>
                       </div>

                     </div>
                     <div className="text">
                       <div>
                       Toutes transactions immobilières 99, avenue Jean Lolive 93500 PANTIN
                       TEL: 01 48 40 44 11
                       FAX :  01 48 43 57 15
                       CP N°T505 délivrée par la Préfecture de la Seine Saint Denis
                       Adhérent N°16285 SNPI 26, avenue Victor Hugo 75116 PARIS
                       RCS de BOBIGNY : B 351.550.843
                       </div>
                     </div>
                     <div className="conception">
                       <div>
                       © 2018 Immo Devaux  -  Conception : IsmaWeb
                       </div>
                      </div>
                  </div>
               </div>

             </footer>
      );




    }


  }
}

function mapStateToProps(state){
	return {
		connected: state.userConnected
	};
}
export default connect(mapStateToProps, null) (Footer);
