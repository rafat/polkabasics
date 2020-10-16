import React from 'react';
import {Router} from '@reach/router';
import Header from './components/Header';
import {GlobalStyle} from './styles/GlobalStyle';

import Block from './Block';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Block path="/"/>
      </Router>
    </>
  )
}

export default App;
