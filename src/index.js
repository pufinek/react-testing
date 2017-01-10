import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router';

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound';
import Statistic from './components/Statistic';
import TestLetters from './components/TestLetters';

//const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
  return (
    <BrowserRouter basename="/react-testing/">
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
/*jak si předám do componenty TestLetters, ktera je oddelena od zbytku a vede na ji Link cast state jez je definovany az v App?*/
