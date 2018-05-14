import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchQuestions } from './actions/questionsActions';

import './AdminQuestions.css';

class AdminQuestions extends Component{

  componentWillMount(){
    this.props.fetchQuestions();
  }
  render(){
    return(
      <div id="AdminQuestions">
        <h3>Questions des visiteurs</h3>
      </div>
    );
  };
}

export default connect(null, {fetchQuestions})(AdminQuestions);
