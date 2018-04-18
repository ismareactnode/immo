
import EDIT_ESTIM from '../actions/estimActions.js';

const estimationsDefaultState = [{
  genre: 'appart',
  numero: '12',
  rue: 'vignolles',
  superficie: '220',
  quartier: 'Eglise de Pantin',
}];

export default (state=estimationsDefaultState, { type, id, updates }) => {

  switch(type){
    case 'EDIT_ESTIM':
      return state.map(estim=>{
        if (estim.id === id){
          return {...estim, updates};
        }else{
          return estim;
        }});
    default:  return state;
    }

}
