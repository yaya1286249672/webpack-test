// import { cube } from './math.js';
// import './style.css';
// import printMe from './print.js';
// import '../src/component/index/home.css'


// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }

// function component() {
//     var element = document.createElement('pre');
//     element.classList.add("hello")

//     element.innerHTML = [
//         'Hello webpack!',
//         '5 cubed is equal to ' + cube(5)
//     ].join('\n\n');
//     return element;

// }

// document.body.appendChild(component());
require('@babel/polyfill')
import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Indexcomponent from './component/index/index.jsx'

// const rootRoute = {
//     childRoutes: [{
//             path: "/",
//             component: Wrapermain,
//             indexRoute: {
//                 /*首页*/
//                 onEnter: (nextState, replaceState) => replaceState("/home")
//             },
//             childRoutes: [
//                 { path: "userInfo", getComponent: require('./component/index/index').default, onEnter: () => { document.title = "个人信息" } }
//             ]

//         },

//         /*未匹配的重定向*/
//         { path: "*", onEnter: (nextState, replaceState) => replaceState("/") }
//     ]
// };
// class Wrapermain extends Component {
//     render() {
//         return <div > 哈哈啊哈 < /div>

//     }
// }

// const Routes = () => ( < Router >
//     <
//     div >
//     <
//     Route path = "/app"
//     component = { Indexcomponent }
//     /> < /
//     div > <
//     /Router>
// );

console.log(Indexcomponent)
render(( < Indexcomponent / > ), document.getElementById('app'));