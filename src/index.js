// import _ from 'lodash';
import { cube } from './math.js';
import './style.css';
import printMe from './print.js';
import '../src/component/index/home.css'


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');
    element.classList.add("hello")

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element;

}

document.body.appendChild(component());