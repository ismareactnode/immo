import React from 'react';
import { connect } from 'react-redux';
import OptionModal from './OptionModal';
import NotificationEstimation from './NotificationEstimation';
import './Estimation.css';

class Estimation extends React.Component{

constructor(props){
  super(props);
  this.state = {
    genre: 'Maison',
    superficie: '',
    ville: '',
    rue: '',
    // quartier: '',
    etat: 'Moyen',
    sended: undefined,
    notification: false,
    name: '',
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
  console.log('this.state : ', this.state);
  document.cookie=`genre=${this.state.genre}`;
  document.cookie=`etat=${this.state.etat}`;
  document.cookie=`superficie=${this.state.superficie}`;
  document.cookie=`ville=${this.state.ville}`;
  document.cookie=`rue=${this.state.rue}`;
  // document.cookie=`quartier=${this.state.quartier}`;
  this.setState(()=>({sended: true}));
}

onChangeSuperficie(e){
  const superficie = e.target.value;
  this.setState({superficie});
}

onChangeGenre(e){
  const genre = e.target.value;
  this.setState({genre});
}
onChangeVille(e){
  const ville = e.target.value;
  this.setState({ville});
}
onChangeRue(e){
  const rue = e.target.value;
  this.setState({rue});
}
onChangeEtat(e){
  const etat = e.target.value;
  this.setState({etat});
}
onChangeQuartier(e){
  const quartier = e.target.value;
  this.setState({quartier});
}
desend(e){
  this.setState(() => ({sended: undefined}));
}

componentWillMount(){
  const genreCookie = this.getCookie('genre');
  const etatCookie = this.getCookie('etat');
  const superficieCookie = this.getCookie('superficie');
  const villeCookie = this.getCookie('ville');
  const rueCookie = this.getCookie('rue');
  this.setState(()=>({
    genre: genreCookie,
    etat: etatCookie,
    superficie: superficieCookie,
    ville: villeCookie,
    rue: rueCookie
  }));
}

  render(){

        if(this.state.notification){
          console.log('notification : ', this.state.notification);
            return <NotificationEstimation name={this.state.name}/>;
      }else{
        console.log('notification : ', this.state.notification);

          return(
            <div className="col-sm-12" id="estimation">
                  <div className="jumbotron">
                         <h3>Bien estimez, pour mieux vendre</h3>
                          <p>Vous souhaitez connaitre la valeur de votre bien
                        selon sa localisation et différents critères ?
                    Utilisez notre outil d estimation, et votre expert vous répond
                     dans les plus brefs délais.
                    </p>

                  </div>
                  <div id="partieFormulaire">
                  <h3>Estimez gratuitement la valeur de votre bien : </h3>

                  <form

                  onSubmit={this.estimer}
                  >
                    <div
                    className="form-group col-sm-12 col-md-10 col-lg-6"  >
                      <label>Type</label>
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
                      <label>Etat</label>
                      <select
                      className="form-control"
                       required
                      onChange = { e => this.onChangeEtat(e)}
                      name="etat"
                      value={this.state.etat}
                      >
                        <option>Moyen</option>
                        <option>Neuf</option>
                        <option>Ancien</option>
                        <option>A rénover</option>
                      </select>
                    </div>

                     <div className="form-group col-sm-12 col-lg-6">
                      <label>Superficie</label>
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

                    <div className="form-group col-sm-12 col-lg-6">
                      <label>Ville</label>
                      <input
                      className="form-control"
                      name="ville"
                      required
                      placeholder="ville"
                      value={this.state.ville}
                      onChange = {e => this.onChangeVille(e)}
                      type="text"  placeholder="ville" />
                      </div>

                    <div className="form-group col-sm-12 col-lg-6">
                      <label>Rue</label>
                      <input
                      className="form-control"
                      onChange = { e => this.onChangeRue(e)}
                      name="rue"
                      value={this.state.rue}
                      type="text"  placeholder="rue"
                      />
                      </div>
                      <div className="col-sm-12">
                      <button type="submit" className="btn btn-primary col-sm-12" >Estimer</button>
                      </div>
                </form>
                </div>
                <OptionModal sended={this.state.sended} desend={this.desend}
                notify={this.notify} />
                <p>{this.state.appartements}</p>
              </div>
          );
      }
  }
};
export default connect(null, null)(Estimation);
