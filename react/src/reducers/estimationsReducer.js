import { SETESTIMATIONS } from '../actions/estimationsActions';

export default (state={}, action) => {
  switch (action.type) {
    case 'SETESTIMATIONS':
    console.log('action', action);
      return action.estimations;
      break;
    default:
      return state;
  }
}
