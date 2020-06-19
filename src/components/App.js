import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from '../components/styles/GlobalStyle';
import Header from './elements/Header';
import Movie from './Movie';
import NotFound from './NotFound';

import Home from './Home';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </>
  );
}
export default App;
