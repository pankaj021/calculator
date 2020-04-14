import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
import TicTacToe from './TicTacToe'
import HandC from './HandC'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HandC/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
