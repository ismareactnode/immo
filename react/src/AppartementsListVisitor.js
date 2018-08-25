import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';


import moment from 'moment-js';
import { Link } from 'react-router-dom';


import './AppartementsListVisitor.css';
import './AppartementsList.css';
import AppartementItemVisitor from './AppartementItemVisitor';
import selectAppartements from './selectors/appartements';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class AppartementsListVisitor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      genre: '',
      superficie: '',
      quartier: '',
      budget: '',
      nom: '',
      mail: '',
      tel: '',
      notification: false,
      error: false
    };
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeSuperficie = this.onChangeSuperficie.bind(this);

    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.envoyer = this.envoyer.bind(this);
  }
  onChangeGenre(e){
    const genre = e.target.value;
    this.setState(()=>({genre}));
  }
  onChangeSuperficie(e){
    const superficie = e.target.value;
    this.setState(()=>({superficie}));
  }
  onChangeQuartier(e){
    const quartier = e.target.value;
    this.setState(()=>({quartier}));
  }

  onChangeBudget(e){
  const budget = e.target.value;
  this.setState(()=>({budget}));
  }

  onChangeMail(e){
    const mail = e.target.value;
    this.setState(()=>({mail}));
  }
  onChangeTel(e){
    const tel = e.target.value;
    this.setState(()=>({tel}));
  }
  onChangeNom(e){
    const nom = e.target.value;
    this.setState(()=>({nom}));
  }
  envoyer(e){
      e.preventDefault();
    console.log('fonction envoyer');

    const date = moment().format(' DD/MM/YYYY, h:mm ');

    const recherche = {
      genre: this.state.genre,
      superficie: this.state.superficie,
      quartier : this.state.quartier,
      budget: this.state.budget,
      nom: this.state.nom,
      mail: this.state.mail,
      tel: this.state.tel,
      date
    };
    console.log('recherche : ', recherche);
    fetch('/recherches',
    {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({recherche})
    })
    .then(async(res)=>{
    this.setState(()=>({genre: ''}));
    this.setState(()=>({superficie: ''}));
    this.setState(()=>({budget: ''}));
    this.setState(()=>({quartier: ''}));
    this.setState(()=>({nom: ''}));
    this.setState(()=>({mail: ''}));
    this.setState(()=>({tel: ''}));
    this.setState(()=>({notification: true}));
    setTimeout(()=>{this.setState(()=>({notification: false}))}, 1000);
    setTimeout(()=>{this.props.history.push('/')}, 1500);
   })
  .catch((err)=>{console.log('error :', err);})
  }
    render(){
      return(
       <div>

          <Desktop>
            <div className="biensEtAlerte">
              <div className="alerteForm">
                <h3>Votre alerte</h3>
                  <form
                  onSubmit={e=>this.envoyer(e)}
                  >
                    <div className="alerteFormItem">
                      <label>Type</label>
                      <select
                      className="form-control"
                      required
                      value={this.state.genre}
                      onChange={(e)=>this.onChangeGenre(e)}
                      name="genre">
                        <option>Appartement</option>
                        <option>Maison</option>
                        <option>Terrain</option>
                        <option>Commerce</option>
                      </select>
                    </div>
                    <div className="alerteFormItem">
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

                     <div className="alerteFormItem">
                       <label>Quartier</label>
                       <input
                       className="form-control"
                       required
                       placeholder="quartier"
                       value={this.state.quartier}
                       onChange = {e => this.onChangeQuartier(e)}
                       type="text"  placeholder="quartier" />
                       </div>

                     <div className="alerteFormItem">
                       <label>Budget</label>
                       <input
                       className="form-control"
                       onChange = { e => this.onChangeBudget(e)}
                       value={this.state.budget}
                       type="text"  placeholder="budget"
                       />
                       </div>

                     <div className="alerteFormItem">
                     <label>Votre nom</label>
                     <input
                     className="form-control"
                      type="text"
                     required
                      value={this.state.nom}
                      onChange={e=>this.onChangeNom(e)}/>
                      </div>

                     <div className="alerteFormItem">
                       <label>Votre adresse mail</label>
                       <input
                         className="form-control"
                        required
                        type="email"
                        value={this.state.mail}
                        onChange={e=>this.onChangeMail(e)}/>
                       </div>
                       <div className="alerteFormItem">
                       <label>Votre téléphone</label>
                       <input
                         className="form-control"
                       type="text"
                       placeholder="facultatif"
                       value={this.state.tel}
                       onChange={e=>this.onChangeTel(e)}/>
                       </div>

                       <div className="notifError">
                         {this.state.error && <p>Merci de remplir tous les champs obligatoires</p>}
                       </div>
                       <div className="alerteButtonContainer"><div className="alerteButton"><button className="btn btn-primary col-sm-12"
                       onClick={this.envoyer}>Enregistrer</button></div></div>
                       <div className="notifError">
                       {this.state.notification ? <p className="envoye">Bien envoyé</p> : ''}
                       </div>
                   </form>

              </div>

               <div className="biens">
               <h4>{Object.keys(this.props.appartements).length} résultat{Object.keys(this.props.appartements).length>1 ? 's' : ''}</h4>
                { Object.values(this.props.appartements).map(appartement =>
                  <AppartementItemVisitor key={appartement._id} {...appartement}  />)
                }
              </div>
          </div>
        </Desktop>

        <Mobile>
            <div className="biensEtAlerteMobile">
               <div className="biensMobile">

                { Object.values(this.props.appartements).map(appartement =>
                  <AppartementItemVisitor key={appartement._id} {...appartement}  />)
                }
              </div>

              <div className="alerteFormMobile">
                <h3>Votre alerte</h3>
                  <form
                  onSubmit={e=>this.envoyer(e)}
                  >
                    <div className="alerteFormItem">
                      <label>Type</label>
                      <select
                      className="form-control"
                      required
                      value={this.state.genre}
                      onChange={(e)=>this.onChangeGenre(e)}
                      name="genre">
                        <option>Appartement</option>
                        <option>Maison</option>
                        <option>Terrain</option>
                        <option>Commerce</option>
                      </select>
                    </div>
                    <div className="alerteFormItem">
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

                     <div className="alerteFormItem">
                       <label>Quartier</label>
                       <input
                       className="form-control"
                       required
                       placeholder="quartier"
                       value={this.state.quartier}
                       onChange = {e => this.onChangeQuartier(e)}
                       type="text"  placeholder="quartier" />
                       </div>

                     <div className="alerteFormItem">
                       <label>Budget</label>
                       <input
                       className="form-control"
                       onChange = { e => this.onChangeBudget(e)}
                       value={this.state.budget}
                       type="text"  placeholder="budget"
                       />
                       </div>

                     <div className="alerteFormItem">
                     <label>Votre nom</label>
                     <input
                     className="form-control"
                      type="text"
                     required
                      value={this.state.nom}
                      onChange={e=>this.onChangeNom(e)}/>
                      </div>

                     <div className="alerteFormItem">
                       <label>Votre adresse mail</label>
                       <input
                         className="form-control"
                        required
                        type="email"
                        value={this.state.mail}
                        onChange={e=>this.onChangeMail(e)}/>
                       </div>
                       <div className="alerteFormItem">
                       <label>Votre téléphone</label>
                       <input
                         className="form-control"
                       type="text"
                       placeholder="facultatif"
                       value={this.state.tel}
                       onChange={e=>this.onChangeTel(e)}/>
                       </div>

                       <div className="notifError">
                         {this.state.error && <p>Merci de remplir tous les champs obligatoires</p>}
                       </div>
                       <div className="alerteButtonContainerMobile"><button className="btn btn-primary col-sm-12"
                       onClick={this.envoyer}>Enregistrer</button></div>
                       <div className="notifError">
                       {this.state.notification ? <p className="envoye">Bien envoyé</p> : ''}
                       </div>
                   </form>

              </div>
          </div>
        </Mobile>
      </div>
       );
    }
}



const mapStateToProps  = (state) => {
  return {
    appartements: selectAppartements(state.catalogue, state.filters)
  }
}

export default connect(mapStateToProps, null)(AppartementsListVisitor);
