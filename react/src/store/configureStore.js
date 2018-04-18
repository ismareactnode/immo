import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import catalogueReducer from '../reducers/catalogueReducer.js';
import filtersReducer from '../reducers/filtersReducer.js';
import estimationReducer from '../reducers/estimationReducer.js';
import thunk from 'redux-thunk';


export default () => {
  const rootReducer = combineReducers({
    catalogue: catalogueReducer,
    filters: filtersReducer,
    estimation: estimationReducer,
  });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

   const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
   );

   return store;

};
