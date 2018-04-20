
import { ADD_APPARTEMENT, REMOVE_APPARTMENT, EDIT_APPARTEMENT, SET_APPARTEMENTS } from '../actions/appartementsActions.js';

export default (state={}, action) =>{

  switch(action.type){
    // case 'ADD_APPARTEMENT':
    //   return(
    //     [...state, action.appart]
    // );
    // case 'REMOVE_APPARTMENT':
    // return state.filter(appartement=>appartement.id !== action.id);

    case 'SET_APPARTEMENTS':
    return action.appartements;

    // case 'EDIT_APPARTMENT':
    // return state.map(appartement => {
    //   if (appartement.id === action.id){
    //     return{
    //       ...appartement,
    //     quartier: action.updates.quartier,
    //     prix: action.updates.prix,
    //     superficie: action.updates.superficie,
    //     type: action.updates.type,
    //     }
    //   }else{
    //     return appartement;
    //   }
    // });
  }
  return state;
}
