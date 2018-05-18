import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { connected } from './actions/connectedAction';
import QuestionsList from './QuestionsList';
import { fetchQuestions } from './actions/questionsActions';

import './AdminQuestions.css';

class AdminQuestions extends Component{

  componentWillMount(){
    this.props.connected();
    this.props.fetchQuestions();
  }
  render(){
    return(
      <div id="AdminQuestions">
        <h3>Questions des visiteurs</h3>
        <NavLink to="/AdminDashboard"><button className="btn btn-light">
        Retour au menu</button></NavLink>
        <QuestionsList />
      </div>
    );
  };
}

export default connect(null, {fetchQuestions, connected })(AdminQuestions);
