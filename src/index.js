import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router';

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound';
import Statistic from './components/Statistic';
import TestLetters from './components/TestLetters';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
       	<Match pattern="/testPismena" component={TestLetters}/>
        <Match pattern="/slovicka" component={Statistic}/>
        <Match pattern="/testSlovicka" component={Statistic}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));


/*Routování ???*/
