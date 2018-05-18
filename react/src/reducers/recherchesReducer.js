import { SETRECHERCHES } from '../actions/recherchesActions';

export default (state={}, action) => {
  switch (action.type) {
    case 'SETRECHERCHES':
      return action.recherches;
      break;
    default:
      return state;
  }
}
