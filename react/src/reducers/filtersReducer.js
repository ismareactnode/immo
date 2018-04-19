import { INITIALIZE_FILTERS, ET_TEXT_FILTER, SORT_BY_PRIX, SORT_BY_SUPERFICIE , SET_GENRE_FILTER } from '../actions/filtersActions.js';

export default (state=filtersDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
    case 'SET_GENRE_FILTER':
    return{
      ...state,
      genre: action.genre
    };

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
  case 'INITIALIZE_FILTERS':
    return{
      ...state,
      text: '',
      genre: 'AppartementMaisonCommerceTerrain',
      sortBy: 'superficie',
    };
  default:  return state;
  };
}


const filtersDefaultState={
    text: '',
    genre: 'AppartementMaisonCommerceTerrain',
    sortBy: 'superficie',
}
