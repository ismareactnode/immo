export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SORT_BY_PRIX = 'SORT_BY_PRIX';
export const SORT_BY_SUPERFICIE = 'SORT_BY_SUPERFICIE';


export const setTextFilter = (text='') => (
  {
    type: SET_TEXT_FILTER,
    text,
  }
);

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
