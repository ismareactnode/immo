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
          console.log('errora :', err);
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
          <p><label>Email : </label>
          <input
          type="email"
          onChange={e=>this.onChangeEmail(e)}/></p>
            <p><label>Password : </label>
            <input
            type="password"
            onChange={e=>this.onChangePassword(e)}/></p>
          <button>Connexion</button>
        </form>
      </div>
    );
  };
}

export default connect(null, null)(AdminLogin);
