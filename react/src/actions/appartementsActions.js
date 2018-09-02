// import uuid from 'uuid';
// import database from '../firebase/firebase';
import axios from 'axios';
export const ADD_APPARTEMENT = 'ADD_APPARTEMENT';
export const REMOVE_APPARTMENT = 'REMOVE_APPARTMENT';
export const EDIT_APPARTMENT = 'EDIT_APPARTMENT';
export const SET_APPARTEMENTS = 'SET_APPARTEMENTS';
export const START_SET_APPARTEMENTS = 'START_SET_APPARTEMENTS';

export const editAppartment = (id, updates) => {
  return(
  {
    type: EDIT_APPARTMENT,
    id,
    updates,
  }
);
}

// export const startEditAppartment = (_id, updates) => {
//   return (dispatch) => {
//     return database.ref(`appartements/${id}`).update(updates)
//     .then( () => {
//       dispatch(editAppartment(id, updates));
//     });
//   };
// };
export const startAddAppartement = (appartementData = {}, token) => {
return function(){
    const {
      genre = 'Appartement',
      nbPieces = 'studio',
      superficie = 0,
      quartier = '',
      prix = 0,
      descriptif = "",
      photo="default.jpeg"
    } = appartementData;
    console.log(`appartementData.genre : ${appartementData.genre}`);
    try{
       fetch('/apparts',
      {
        method: 'post',
        headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json',
         'x-auth': token
        },
        body: JSON.stringify(appartementData)
      });
    }catch(e){
      return Promise.reject();
    }
}}

export const startEditAppartment = (id, updates = {}, token) => {
  return async function(){
   await fetch(`/apparts/${id}`,
     {
       method: 'put',
       headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'x-auth': token
       },
       body: JSON.stringify(updates)
    });
  };
};

export const setAppartements = (appartements) =>({
  type: 'SET_APPARTEMENTS',
  appartements,
});

export const startSetAppartements = () => {
  return async function(dispatch){
    const appartements = await fetch('/apparts');
    const apparts = await appartements.json();
    dispatch (setAppartements(apparts));
  };
};

export const removeAppartementFromMongo = (_id, token) => {
  return async function (){
    try{
    await fetch(`/apparts/${_id}`,
        {
          method: 'delete',
          headers:
          {
            'x-auth': token
          }
        })
      .then(()=>{console.log('removed.');})
    }catch(e){
      console.log('error :', e);
    }
  }
}

export const addAppartement = (appart) => ({
    type: ADD_APPARTEMENT,
    appart
  });



export const removeAppartementFromRedux = ({id}) => {
  return{
    type: REMOVE_APPARTMENT,
    id,
  }
};

// export const startRemoveAppartment = ({id} = {}) => {
//   return (dispatch) => {
//     return fetch(`appartsRemove/${id}`);
//     .then(
//       () => { dispatch(removeAppartment({id}));
//             });
//    }
// }
