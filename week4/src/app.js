import './CSS/reset.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Greeting from './greeting';
import ElHead from './elhead';

var navData = ['HTML', 'JAVASCRIPT', 'SQL', 'PHP']

var nav = navData.map((item, key)=>{
  return <li key={'nav_' + key}>{item}</li>
});

var headData = (
  <header id="hello">
    <ul>
      { nav }
    </ul>
  </header>
)

ReactDOM.render(
  <ElHead />,
  document.getElementById('landingPage')
);