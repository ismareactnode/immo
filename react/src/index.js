import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import AppRouter from './AppRouter.js';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import { startSetAppartements } from './actions/appartementsActions';

const store = configureStore();

ReactDOM.render(<p style={{fontSize: '3em', color: 'red', backgroundColor: 'gold', display: 'inline'}}>Loading...</p>,
document.getElementById('root'));

store.dispatch(startSetAppartements())
.then( () => {
  ReactDOM.render(<Provider store={store}><AppRouter /></Provider>,
  document.getElementById('root'));
});
