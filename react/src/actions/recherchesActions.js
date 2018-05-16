export const SETRECHERCHES = 'SETRECHERCHES';

export const fetchRecherches = () => {
  return async function(dispatch){
    const recherchesJSON = await fetch('/recherches');
    const recherches = await recherchesJSON.json();
    dispatch(setRecherches(recherches));
    };
};

export const setRecherches = (recherches) => ({
    type: SETRECHERCHES,
    recherches,
});
