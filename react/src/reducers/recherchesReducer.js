import { SETRECHERCHES } from '../actions/recherchesActions';

export default (state={}, action) => {
  switch (action.type) {
    case 'SETRECHERCHES':
    console.log('action', action);
      return action.recherches;
      break;
    default:
      return state;
  }
}
