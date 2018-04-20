import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import AppRouter from './AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetAppartements } from './actions/appartementsActions';
import Loading from './Loading';

const store = configureStore();

ReactDOM.render(<Loading />,
document.getElementById('root'));

store.dispatch(startSetAppartements())
.then( () => {
  ReactDOM.render(<Provider store={store}><AppRouter /></Provider>,
  document.getElementById('root'));
});
