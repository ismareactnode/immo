
import { ADD_APPARTEMENT, REMOVE_APPARTMENT, EDIT_APPARTEMENT, SET_APPARTEMENTS } from '../actions/appartementsActions.js';

const catalogueState=
   [{
    id: '0',
    genre: 'appart',
    superficie: '220',
    quartier: 'Eglise de Pantin',
    prix: '230 000',
  },
  {
   id: '1',
   genre: 'terrain',
   superficie: '220',
   quartier: 'la roquette',
   prix: '130 000',
 },
 {
  id: '3',
  genre: 'maison',
  superficie: '120',
  quartier: 'Pantin',
  prix: '290 000',
},
];

export default (state=catalogueState, action) =>{

  switch(action.type){
    case 'ADD_APPARTEMENT':
      return(
        [...state, action.appart]
    );
    case 'REMOVE_APPARTMENT':
    return state.filter(appartement=>appartement.id !== action.id);

    case 'SET_APPARTEMENTS':
    return action.appartements;

    case 'EDIT_APPARTMENT':
    return state.map(appartement => {
      if (appartement.id === action.id){
        return{
          ...appartement,
        quartier: action.updates.quartier,
        prix: action.updates.prix,
        superficie: action.updates.superficie,
        genre: action.updates.genre,
        }
      }else{
        return appartement;
      }
    });
  }
  return state;
}
