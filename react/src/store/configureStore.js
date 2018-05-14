import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import catalogueReducer from '../reducers/catalogueReducer';
import filtersReducer from '../reducers/filtersReducer';
import connectedReducer from '../reducers/connectedReducer';
import estimationsReducer from '../reducers/estimationsReducer';
import thunk from 'redux-thunk';


export default () => {
  const rootReducer = combineReducers({
    catalogue: catalogueReducer,
    filters: filtersReducer,
    estimations: estimationsReducer,
    connected: connectedReducer
  });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

   const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
   );

   return store;

};
