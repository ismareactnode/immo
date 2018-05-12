import React from 'react';
import { connect } from 'react-redux';
import OptionModal from './OptionModal';
import NotificationEstimation from './NotificationEstimation';

class Estimation extends React.Component{

constructor(props){
  super(props);
  this.state = {
    genre: 'appartement',
    superficie: '',
    ville: '',
    rue: '',
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
  document.cookie=`genre=${this.state.genre}`;
  document.cookie=`etat=${this.state.etat}`;
  document.cookie=`superficie=${this.state.superficie}`;
  document.cookie=`ville=${this.state.ville}`;
  document.cookie=`rue=${this.state.rue}`;
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

            return <NotificationEstimation name={this.state.name}/>;  
      }else{
          return(
            <div className="col-sm-12 estimation">

                  <div className="jumbotron">
                    <div className="container">
                         <h2>Bien estimez, pour mieux vendre</h2>
                          <p>Vous souhaitez connaitre la valeur de votre bien
                        selon sa localisation et différents critères ?

                    Utilisez notre outil d'estimation, nos agents vous
                    répondront dans les plus brefs délais.
                    Veuillez choisir le type de bien et saisissez l'adresse
                    pour accéder
                     au formulaire plus complet.
                    </p>

                      <p><a className="btn btn-primary btn-lg"
                       role="button">
                      Plus de conseils</a></p>
                    </div>
                  </div>

                  <h3>Estimez gratuitement la valeur de votre bien : </h3>

                  <form
                  onSubmit={this.estimer}
                  >
                  <label>Type</label>
                <select
                name="genre"
                value={this.state.genre}
                onChange={(e)=>this.onChangeGenre(e)}
                selected="Appartement" name="genre">
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Terrain</option>
                    <option>Fond de commerce</option>
                </select><br/><br/>
                <label>Etat</label>
                <select
                 onChange = { e => this.onChangeEtat(e)}
                name="etat"
                 value={this.state.etat}
                 >
                   <option>Moyen</option>
                   <option>Neuf</option>
                   <option>Ancien</option>
                   <option>A rénover</option>
                 </select><br/>
                <label>superficie</label>
                <input
                name="superficie"
                placeholder="superficie"
                value= {this.state.superficie}
                onChange = {e=>this.onChangeSuperficie(e)
                  // this.setState(()=>({superficie: e.target.value}))
                }
                 type="text"
                name="superficie"  placeholder="superficie" className="input-group"/><br/>

                <label>Ville</label><input
                name="ville"
                  placeholder="ville"
                value={this.state.ville}
                onChange = {e => this.onChangeVille(e)}
                 type="text"  placeholder="ville" className="input-group"/><br/>
                <label>Rue</label><input
                onChange = { e => this.onChangeRue(e)}
                name="rue"
                value={this.state.rue}
                 type="text"  placeholder="rue" className="input-group"/><br/>

                <button type="submit" className="btn btn-primary" >Estimer</button>
                </form>
                <OptionModal sended={this.state.sended} desend={this.desend}
                notify={this.notify} />
                <p>{this.state.appartements}</p>
              </div>
          );
      }
  }
};
export default connect(null, null)(Estimation);
