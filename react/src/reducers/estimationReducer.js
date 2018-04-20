
import { ADD_ESTIMATION_DEBUT } from '../actions/estimActions.js';

export default (state={}, {type, estimation}) => {

  switch(type){
    // case 'EDIT_ESTIM':
    //   return state.map(estim=>{
    //     if (estim.id === id){
    //       return {...estim, updates};
    //     }else{
    //       return estim;
    //     }});
    // default:  return state;
    // }

     case ADD_ESTIMATION_DEBUT:
     return [...state, estimation];
     break;

     default:
     return state;
   }
}
