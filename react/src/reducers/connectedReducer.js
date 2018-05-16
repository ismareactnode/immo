export const CONNECTED = 'CONNECTED';
export const NOTCONNECTED = 'NOTCONNECTED';

export default (state='false', action) => {
  switch(action.type){
    case 'CONNECTED':
    console.log('type CONNECTED lancé');
    return true;
    break;

    case 'NOTCONNECTED':
    console.log('type NOTCONNECTED lancé');
    return false;
    break;

    default:
    return state;
  }
}
