import React from 'react';
import { connect } from 'react-redux';
import OptionModal from './OptionModal';
import NotificationEstimation from './NotificationEstimation';
import './Estimation.css';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class Estimation extends React.Component{

constructor(props){
  super(props);
  this.state = {
    genre: 'Appartement',
    superficie: '',
    rue: '',
    renovations: 'Rénové entre 2013 et 2018',
    sended: undefined,
    notification: false,
    name: '',
    missing: false,
  };
  this.estimer = this.estimer.bind(this);
  this.getCookie = this.getCookie.bind(this);
  this.desend = this.desend.bind(this);
  this.notify = this.notify.bind(this);
}

  notify(){
    this.setState(()=>({notification: true}));
    var name = this.getCookie('name');
    this.setState(()=>({name}));
    setTimeout(()=>{ this.props.history.push('/')}, 1000);
  }

 getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

 estimer(e){
  e.preventDefault();
  console.log('this.state.renovations : ', this.state.renovations);
  if(!this.state.renovations){
    console.log("pas de renovations ds le state");
    this.setState(()=>({renovations: "Rénové entre 2013 et 2018"}));
    console.log('this.state.renovations', this.state.renovations);
  }
  document.cookie=`genre=${this.state.genre}`;
  document.cookie=`superficie=${this.state.superficie}`;
  document.cookie=`renovations=${this.state.renovations}`;
  document.cookie=`rue=${this.state.rue}`;
  if(!this.state.genre || !this.state.superficie ||
     !this.state.renovations || !this.state.rue){
       return this.setState(()=>({missing: true}));
     }
  this.setState(()=>({sended: true}));
}

onChangeSuperficie(e){
  this.setState(()=>({missing: false}));
  const superficie = e.target.value;
  this.setState({superficie});
}

onChangeGenre(e){
  this.setState(()=>({missing: false}));
  const genre = e.target.value;
  this.setState({genre});
}
onChangeRenovations(e){
  this.setState(()=>({missing: false}));
  const renovations = e.target.value;
  this.setState({renovations});
}
onChangeRue(e){
  this.setState(()=>({missing: false}));
  const rue = e.target.value;
  this.setState({rue});
}
onChangeEtat(e){
  this.setState(()=>({missing: false}));
  const etat = e.target.value;
  this.setState({etat});
}

desend(e){
  this.setState(() => ({sended: undefined}));

}



/*
  A virer :; quartier , car chaque rue sera affectée à un quartier dans l'algo
  remplacer état par "dernières rénovation du logement" : select : moins de 5 ans, 5 à 15 ans, 15 à 30 ans
 */

componentWillMount(){
  const genreCookie = this.getCookie('genre');
  const etatCookie = this.getCookie('etat');
  const superficieCookie = this.getCookie('superficie');
  const renovationsCookie = this.getCookie('renovations');
  const rueCookie = this.getCookie('rue');
  this.setState(()=>({
    genre: genreCookie,
    etat: etatCookie,
    superficie: superficieCookie,
    renovations: renovationsCookie,
    rue: rueCookie
  }));
}

  render(){
    const modalStyle = {
      content: {
        paddingTop: "2%",
        marginTop: "100px",
        height: "35%",
        width: "70%",
        margin: "auto",
        borderRadius: "5px",
        boxShadow: "2px 2px 1px white",
        backgroundColor : '#F7F8FA'
      }
    }
    const modalStyleMobile = {
      content: {
        paddingTop: "2%",
        marginTop: "100px",
        height: "40%",
        width: "80%",
        margin: "auto",
        borderRadius: "5px",
        boxShadow: "1px 1px 1px white",
        backgroundColor : '#F7F8FA'
      }
    }
        if(this.state.notification){
          console.log('notification : ', this.state.notification);
            return <NotificationEstimation name={this.state.name}/>;
      }else{
          return(
            <div className="col-sm-12" className="estimation">

              <Desktop>
                  <div className="banniereForm">

                      <div className="bienEstimerForm">
                        <form
                          onSubmit={this.estimer}>
                             <div className="formUp">
                                 <div
                                className="form-group col-sm-12 col-lg-6"  >
                                   <select
                                   className="form-control"
                                   name="genre"
                                   value={this.state.genre}
                                   onChange={(e)=>this.onChangeGenre(e)}
                                   name="genre">
                                     <option>Appartement</option>
                                     <option>Maison</option>
                                     <option>Terrain</option>
                                     <option>Fond de commerce</option>
                                   </select>
                                 </div>


                                 <div className="form-group col-sm-12 col-lg-6">
                                  <input
                                   className="form-control"
                                  required
                                  name="superficie"
                                  placeholder="superficie"
                                  value= {this.state.superficie}
                                  onChange = {e=>this.onChangeSuperficie(e)
                                    // this.setState(()=>({superficie: e.target.value}))
                                  }
                                  type="text"
                                  name="superficie"  placeholder="superficie" />
                                </div>


                             </div>

                             <div className="formDown">
                               <div className="form-group col-sm-12 col-lg-6">
                                 <select
                                 className="form-control"
                                 name="rénovations"
                                 required
                                 value={this.state.renovations}
                                 onChange = {e => this.onChangeRenovations(e)}
                                 >
                                   <option>Rénové entre 2013 et 2018</option>
                                   <option>Rénové entre 2003 et 2013</option>
                                   <option>Rénové avant 2003</option>
                                 </select>
                                 </div>

                               <div className="form-group col-sm-12 col-lg-6">
                                 <input
                                 className="form-control"
                                 onChange = { e => this.onChangeRue(e)}
                                 name="rue"
                                 value={this.state.rue}
                                 type="text"  placeholder="rue"
                                 />
                                </div>

                             </div>

                             <div className="col-sm-12">

                             <button type="submit" className="btn btn-primary col-sm-12" >Estimer</button>
                             <p className="missing">{this.state.missing ?
                               "Tous les champs sont obligatoires" : ""}</p>
                             </div>
                        </form>
                      </div>
                  </div>


                  <div className="banniereBienEstimer">
                         <h3>Bien estimez, pour mieux vendre</h3>
                          <p>Vous souhaitez connaitre la valeur de votre bien
                        selon sa localisation et différents critères ?
                    <p>Utilisez notre outil d estimation, et votre expert vous répond
                     dans les plus brefs délais.</p>
                    </p>
                  </div>

                  <div className="banniereCertif">
                  <h3>Recevez un certificat de valeur </h3>
                   <span className="glyphicon glyphicon-list-alt"></span>
                    <p>En envoyant simplement quelques photos de votre bien</p>
                    <p>En plus de quelques informations,</p>
                    <p>Nos experts vouent certifient la valeur de votre bien</p>
                  </div>



                <OptionModal sended={this.state.sended} desend={this.desend}
                notify={this.notify} style={modalStyle}/>
                <p>{this.state.appartements}</p>
                </Desktop>

                <Mobile>
                    <div className="banniereForm">

                        <div className="bienEstimerFormMobile">
                          <form
                            onSubmit={this.estimer}>
                               <div className="formUp">
                                   <div
                                  className="form-group col-sm-12 col-lg-6"  >
                                     <select
                                     className="form-control"
                                     name="genre"
                                     value={this.state.genre}
                                     onChange={(e)=>this.onChangeGenre(e)}
                                     name="genre">
                                       <option>Appartement</option>
                                       <option>Maison</option>
                                       <option>Terrain</option>
                                       <option>Fond de commerce</option>
                                     </select>
                                   </div>


                                   <div className="form-group col-sm-12 col-lg-6">
                                    <input
                                     className="form-control"
                                    required
                                    name="superficie"
                                    placeholder="superficie"
                                    value= {this.state.superficie}
                                    onChange = {e=>this.onChangeSuperficie(e)
                                      // this.setState(()=>({superficie: e.target.value}))
                                    }
                                    type="text"
                                    name="superficie"  placeholder="superficie" />
                                  </div>
                               </div>
                               <div className="formDown">
                                 <div className="form-group col-sm-12 col-lg-6">
                                   <select
                                   className="form-control"
                                   name="rénovations"
                                   required
                                   value={this.state.renovations}
                                   onChange = {e => this.onChangeRenovations(e)}
                                   >
                                     <option>Rénové entre 2013 et 2018</option>
                                     <option>Rénové entre 2003 et 2013</option>
                                     <option>Rénové avant 2003</option>
                                   </select>
                                   </div>
                                 <div className="form-group col-sm-12 col-lg-6">
                                   <input
                                   className="form-control"
                                   onChange = { e => this.onChangeRue(e)}
                                   name="rue"
                                   value={this.state.rue}
                                   type="text"  placeholder="rue"
                                   />
                                  </div>
                               </div>
                               <div className="col-sm-12 estimerMobile">
                               <button type="submit" className="btn btn-primary col-sm-12 " >Estimer</button>
                               <p className="missing">{this.state.missing ?
                                 "Tous les champs sont obligatoires" : ""}</p>
                               </div>
                          </form>
                        </div>
                    </div>
                    <div className="banniereBienEstimerMobile">
                           <h3>Bien estimez pour mieux vendre</h3>
                            <p>Vous souhaitez connaitre la valeur de votre bien
                          selon sa localisation et différents critères ?
                      <p>Utilisez notre outil d estimation, et votre expert vous répond
                       dans les plus brefs délais.</p>
                      </p>
                    </div>

                    <div className="banniereCertifMobile">
                      <h3>Recevez un certificat de valeur </h3>
                      <div className="certifContenu">
                       <span className="glyphicon glyphicon-list-alt"></span>
                        <p>En envoyant simplement quelques photos de votre bien</p>
                        <p>En plus de quelques informations,</p>
                        <p>Nos experts vous certifient la valeur de votre bien</p>
                      </div>
                    </div>
                  <OptionModal sended={this.state.sended} desend={this.desend}
                  notify={this.notify} style={modalStyleMobile} />
                  <p>{this.state.appartements}</p>
                  </Mobile>
              </div>
          );
      }
  }
};
export default connect(null, null)(Estimation);
