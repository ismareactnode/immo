import { SETQUESTIONS } from '../actions/questionsActions';

export default (state = {}, action)=>{
  switch (action.type){
    case 'SETQUESTIONS':
    return action.questions;
    break;
  default:
  return state;
  }
}
