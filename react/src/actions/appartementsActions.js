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

export const startEditAppartment = (id, updates = {}) => {
  return function(){
   fetch(`/apparts/${id}`,
     {
       method:- 'patch',
       headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
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

export const startAddAppartement = (appartementData = {}) => {

return function(dispatch){
    const {
      genre = 'Appartement',
      superficie = 0,
      quartier = '',
      prix = 0,
    } = appartementData;

   fetch('/addAppart',
   {
     method: 'post',
     headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
     },
     body: JSON.stringify(appartementData)
    })
  .then(res=>res.json())
}
}



export const removeAppartementFromMongo = (_id) => {
  return function (){
    try{
      fetch(`/apparts/${_id}`,
        {
          method: 'delete'
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
