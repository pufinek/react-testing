import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router';

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<App/>, document.querySelector('#main'));
