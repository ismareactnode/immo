import {CONNECTED, NOTCONNECTED} from '../reducers/connectedReducer';

export const connected = () => {
  console.log('action connected lancée');
  return function(dispatch){
    if(localStorage.getItem('token')){
      console.log('connecté car token');
      dispatch(setConnected());
    }else{
      console.log('non connect car no token');
      dispatch(setNotConnected());
    }
  }
}

export const setConnected = () => ({
  type: CONNECTED,
});

export const setNotConnected = () => ({
  type: NOTCONNECTED
});
