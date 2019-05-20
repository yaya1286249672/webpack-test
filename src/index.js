import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import '../src/component/index/home.css'


function component() {
  const element = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);


  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('btn');
  return element;
}

document.body.appendChild(component());


