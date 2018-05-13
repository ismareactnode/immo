export const CONNECTED = 'CONNECTED';
export const NOTCONNECTED = 'NOTCONNECTED';

export default (state='false', action) => {
  switch(action.type){
    case 'CONNECTED':
    return true;

    case 'NOTCONNECTED':
    return false;
  }
    return state;
}
