import {CONNECTED, NOTCONNECTED} from '../reducers/connectedReducer';

export const connected = () => {
  return function(dispatch){
    if(localStorage.getItem('token')){
      dispatch(setConnected());
    }else{
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
