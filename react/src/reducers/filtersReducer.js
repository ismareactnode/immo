import { INITIALIZE_FILTERS, SET_TEXT_FILTER, SORT_BY_PRIX, SORT_BY_SUPERFICIE ,
  SET_NB_PIECES, SET_GENRE_FILTER } from '../actions/filtersActions.js';

export default (state=filtersDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };

    case 'SET_NB_PIECES':
    return {
      ...state,
      nbPieces: action.nbPieces
    };

    case 'SET_GENRE_FILTER':
    return{
      ...state,
      nbPieces:'studio 2 pièces 3 pièces 4 pièces 5 pièces',
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
      nbPieces: 'studio 2 pièces 3 pièces 4 pièces 5 pièces',
      sortBy: 'superficie',
    };
  default:  return state;
  };
}


const filtersDefaultState={
    text: '',
    genre: 'AppartementMaisonCommerceTerrain',
    nbPieces: 'studio 2 pièces 3 pièces 4 pièces 5 pièces',
    sortBy: 'superficie',
}
