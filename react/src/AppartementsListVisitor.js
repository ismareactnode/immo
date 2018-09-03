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
      genre: 'Appartement',
      superficie: '',
      quartier: '',
      budget: '',
      nom: '',
      mail: '',
      tel: '',
      notification: false,
      error: false,
      invalidEmail: false,
      invalidEmailNotification: false,
    };
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeSuperficie = this.onChangeSuperficie.bind(this);
    this.formValidate = this.formValidate.bind(this);
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
  formValidate(){
      this.setState(()=>({invalidEmail: false}));
      if (!this.state.genre | !this.state.superficie | !this.state.quartier
      | !this.state.budget | !this.state.nom | !this.state.mail ){
          this.setState(()=>({error: true}));
          setTimeout(()=>{
            this.setState(()=>({error: false}));
          }, 1000);
        return false;
      }
      if(!this.state.mail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        this.setState(()=>({invalidEmailNotification: true}))
        setTimeout(()=>{
          this.setState(()=>({invalidEmailNotification: false}))
        },1000);
        return false;
      }
      return true;
    }

  envoyer(e){
      e.preventDefault();
      if(!this.formValidate()){
        console.log('formvalidate false, donc on sort');
        return;
      }
      console.log('on passe');
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
    .then((res)=>{
    this.setState(()=>({genre: ''}));
    this.setState(()=>({superficie: ''}));
    this.setState(()=>({budget: ''}));
    this.setState(()=>({quartier: ''}));
    this.setState(()=>({nom: ''}));
    this.setState(()=>({mail: ''}));
    this.setState(()=>({tel: ''}));
    this.setState(()=>({notification: true}));
    setTimeout(()=>{
      this.setState(()=>({notification: false}));
      this.props.backToHome();
    }, 1000)
   })
  .catch((err)=>{console.log('error :', err);})
  }

  componentWillMount(){
    this.setState(()=>({genre: 'Appartement'}));
  }
    render(){
      return(
       <div>

          <Desktop>
            <div className="biensEtAlerte" id="listFilters">
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


                       <div className="alerteButtonContainer"><div className="alerteButton"><button className="btn btn-primary col-sm-12"
                       onClick={this.envoyer}>Enregistrer</button></div></div>

                       <p className="notifError">
                         {this.state.error ? <span className="questionError">Merci de remplir tous les champs</span> : ''}
                           {this.state.notification ? <span className="questionNotification">
                           Bien envoyé</span> : ''}
                           {this.state.invalidEmailNotification ? <span className="questionError">Email invalide</span> : ''}
                           </p>
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

                       <p className="notifError">
                         {this.state.error ? <span className="questionError">Merci de remplir tous les champs</span> : ''}
                           {this.state.notification ? <span className="questionNotification">
                           Bien envoyé</span> : ''}
                           {this.state.invalidEmailNotification ? <span className="questionError">Email invalide</span> : ''}
                           </p>
                       <div className="alerteButtonContainerMobile"><button className="btn btn-primary col-sm-12"
                       onClick={this.envoyer}>Enregistrer</button></div>

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
