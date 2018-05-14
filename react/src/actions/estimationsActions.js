export const SETESTIMATIONS = 'SETESTIMATIONS';

export const fetchEstimations = () => {
  return async function(dispatch){
    const estimationsJSON = await fetch('/estimations');
    const estimations = await estimationsJSON.json();
    dispatch(setEstimations(estimations));
    };
};

export const setEstimations = (estimations) => ({
    type: SETESTIMATIONS,
    estimations,
});
