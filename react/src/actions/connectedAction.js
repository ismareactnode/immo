import {CONNECTED, NOTCONNECTED} from '../reducers/connectedReducer';

export const connected = () => {
  console.log('action connected');
  return function(){
    if(localStorage.getItem('token')){
      return {type:CONNECTED};
    }else{
      return {type:NOTCONNECTED};
    }
  }
}
