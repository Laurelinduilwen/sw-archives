import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from '../components/styles/GlobalStyle';
import Header from './elements/Header';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { getCharacters } from './reducer/characters/actions';
import Movie from './Movie';
import NotFound from './NotFound';
import Home from './Home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(getCharacters());
console.log(store);

function App() {
  return (
    <Provider store={store}>
      <>
        {/* <Header /> */}
        <Router>
          <Home path="/" />
          <Movie path="/:movieId" />
          <NotFound default />
        </Router>
        <GlobalStyle />
      </>
    </Provider>
  );
}
export default App;
