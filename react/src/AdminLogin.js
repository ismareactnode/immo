import React, {Component} from 'react';
import { connect } from 'react-redux';
import './AdminLogin.css';

class AdminLogin extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChangeEmail = (e)=>{
    let email = e.target.value;
    this.setState(()=>({email}));
  }

  onChangePassword = (e)=>{
    let password = e.target.value;
    this.setState(()=>({password}));
  }

  onFormSubmit = async (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    let user =  fetch('/users/login',
        {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':  'application/json'
          },
          body: JSON.stringify({email, password})
        })
        .then((user)=>{
          return user.json()})
        .then((user)=>{
          const token = user.tokens[0].token;
          const name = user.name;
          const email = user.email;
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("token", token);
          this.props.history.push('/AdminDashboard');
          return user;
        })
        .catch((err) => {
          console.log('error :', err);
          this.props.history.push('/');
        })


    }
    // .catch((e) =>{
    //   this.props.history.push('/');
    // })

  render(){
    return(
      <div id="adminLogin">
        <form onSubmit={e=>this.onFormSubmit(e)}>
          <div className="form-group"><label>Email : </label>
          <input
          className="form-control"
          type="email"
          onChange={e=>this.onChangeEmail(e)}/></div>
            <div className="form-group"><label>Password : </label>
            <input
            type="password"
            className="form-control"
            onChange={e=>this.onChangePassword(e)}/></div>
          <button type="submit" className="btn btn-primary col-sm-12">Connexion
          </button>
        </form>
      </div>
    );
  };
}

export default connect(null, null)(AdminLogin);
