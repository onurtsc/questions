import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import AppContainer from './src/navigation/AppContainer';
import testsReducer from './src/store/reducers/testsReducer';

const rootReducer = combineReducers({
  tests: testsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {

  return (
    <Provider store={store} >
      <AppContainer />
    </Provider>
  );
};

export default App;
