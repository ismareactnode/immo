import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

import { Link } from 'react-router-dom';
import './Footer.css';


const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class Footer extends React.Component{
  render(){
    if(this.props.connected === true){
        return (
               <footer>
               <Desktop>
                <div className="footer">
                    <div className="logo footerLeft hidden-xs">
                         <img className="logoSnpi" src="Snpi.JPG" alt="logo_snpi" />
                    </div>
                    <div className="footerRight">

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
                </Desktop>

                <Mobile>
                 <div className="footer">
                     <div className="logo footerLeft hidden-xs">
                          <img className="logoSnpi" src="Snpi.JPG" alt="logo_snpi" />
                     </div>
                     <div className="footerRight">
                       <div className="footerMenu hidden-xs">
                         <div className="menu">
                         <Link to="/">ACCUEIL</Link><span>  |  </span>
                          <Link to="/contact">NOUS CONTACTER</Link><span>  |  </span>
                          <Link to="/catalogue">ACHETER</Link><span>  |  </span>
                          <Link to="/estimation">VENDRE</Link><span>  |  </span>
                          <Link to="">FAQ</Link><span>  |  </span>
                         <Link to="">MENTIONS LEGALES</Link>
                         </div>

                       </div>
                       <div className="marginTop hidden-sm hidden-md hidden-lg hidden-xl">
                       </div>
                       <div className="textMobile">
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
                 </Mobile>

               </footer>
        );
    }else{
      return (
             <footer>

              <Desktop>
               <div className="footer">
                   <div className="logo footerLeft hidden-xs">
                        <img className="logoSnpi" src="Snpi.JPG" alt="logo_snpi" />
                   </div>
                   <div className="footerRight">
                     <div className="footerMenu hidden-xs">
                       <div className="menu">
                       <Link to="/">ACCUEIL</Link><span>  |  </span>
                        <Link to="/contact">NOUS CONTACTER</Link><span>  |  </span>
                        <Link to="/catalogue">ACHETER</Link><span>  |  </span>
                        <Link to="/estimation">VENDRE</Link><span>  |  </span>
                        <Link to="">FAQ</Link><span>  |  </span>
                       <Link to="">MENTIONS LEGALES</Link>
                       </div>

                     </div>
                     <div className="marginTop hidden-sm hidden-md hidden-lg hidden-xl">
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
               </Desktop>


               <Mobile>
                <div className="footer">
                    <div className="logo footerLeft hidden-xs">
                         <img className="logoSnpi" src="Snpi.JPG" alt="logo_snpi" />
                    </div>
                    <div className="footerRight">
                      <div className="footerMenu hidden-xs">
                        <div className="menu">
                        <Link to="/">ACCUEIL</Link><span>  |  </span>
                         <Link to="/contact">NOUS CONTACTER</Link><span>  |  </span>
                         <Link to="/catalogue">ACHETER</Link><span>  |  </span>
                         <Link to="/estimation">VENDRE</Link><span>  |  </span>
                         <Link to="">FAQ</Link><span>  |  </span>
                        <Link to="">MENTIONS LEGALES</Link>
                        </div>

                      </div>
                      <div className="marginTop hidden-sm hidden-md hidden-lg hidden-xl">
                      </div>
                      <div className="textMobile">
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
                </Mobile>

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
