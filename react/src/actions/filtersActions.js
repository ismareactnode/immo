export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SORT_BY_PRIX = 'SORT_BY_PRIX';
export const SORT_BY_SUPERFICIE = 'SORT_BY_SUPERFICIE';
export const SET_GENRE_FILTER = 'SET_GENRE_FILTER';
export const INITIALIZE_FILTERS = 'INITIALIZE_FILTERS';
export const SET_NB_PIECES = 'SET_NB_PIECES';


export const setNbPieces = (nbPieces = 0) => {
  return {
    type: SET_NB_PIECES,
    nbPieces,
  }
}

export const initializeFilters = () => (
  {
    type: INITIALIZE_FILTERS,
  }
)

export const setTextFilter = (text='') => (
  {
    type: SET_TEXT_FILTER,
    text,
  }
);

export const setGenreFilter = (genre='')=>{
  return {
    type: SET_GENRE_FILTER,
    genre,
  }
}


export const sortByPrix = () => (
  {
    type: SORT_BY_PRIX,
  }
)

export const sortBySuperficie = () => (
  {
    type: SORT_BY_SUPERFICIE,
}
);
