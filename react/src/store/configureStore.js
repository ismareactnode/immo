import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import catalogueReducer from '../reducers/catalogueReducer';
import filtersReducer from '../reducers/filtersReducer';
import connectedReducer from '../reducers/connectedReducer';
import estimationsReducer from '../reducers/estimationsReducer';
import questionsReducer from '../reducers/questionsReducer';



export default () => {
  const rootReducer = combineReducers({
    catalogue: catalogueReducer,
    filters: filtersReducer,
    estimations: estimationsReducer,
    questions: questionsReducer,
    connected: connectedReducer,
  });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

   const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
   );

   return store;

};
