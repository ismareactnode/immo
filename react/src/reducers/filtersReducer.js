import { SET_TEXT_FILTER, SORT_BY_PRIX, SORT_BY_SUPERFICIE } from '../actions/filtersActions.js';

export default (state=filtersDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text};
  case 'SORT_BY_PRIX':
    return{
      ...state,
      sortBy: 'prix',
    };
  case 'SORT_BY_SUPERFICIE':
    return{
      ...state,
      sortBy: 'superficie',
    };
  default:  return state;
  };
}

const filtersDefaultState={
    text: '',
    sortBy: 'superficie',
}
