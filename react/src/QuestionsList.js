
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './QuestionsList.css';

class QuestionsList extends Component{
  render(){
    return(
      <div id="questionsList">
        <h3>Questions :</h3>
           <table className="table table-striped table-bordered table-hover ">
            <thead className="thead-light">
             <tr>
               <th scope="col">Date</th>
               <th scope="col">Nom</th>
               <th scope="col">Email</th>
               <th scope="col">Question</th>
            </tr>
            </thead>
            <tbody>
              {Object.values(this.props.questions).map(
                (question)=><tr key={question._id}>
                            <td>{question.date}</td>
                            <td>{question.nom}</td>
                            <td>{question.mail}</td>
                            <td>{question.interrogation}</td>
                          </tr>
              )}
              </tbody>
            </table>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return{
    questions: state.questions
  };
}
export default connect(mapStateToProps, null)(QuestionsList);
