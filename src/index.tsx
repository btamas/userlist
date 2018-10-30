import '@babel/polyfill';
import * as React from 'react';
import { render } from 'react-dom';

const App = require('./app').default;

render(<App />, document.querySelector('.app-container'));
