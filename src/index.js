require("@babel/polyfill");
import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, Switch, BrowserRouter, Link } from "react-router-dom";
const history = require("history").createBrowserHistory();

//rem适配
// import './plugin/flexible/index.js'
import 'plugin/flexible/index.js'

import Indexcomponent from "./component/index/index.jsx";
import Sortcomponent from "./component/sort/index.jsx";

const rootRoute = {
    childRoutes: [{
            path: "/",
            //   indexRoute: {
            //     getComponent(nextState, cb) {
            //       require.ensure(
            //         [],
            //         require => {
            //           cb(null, require("./router/sort")).default;
            //         },
            //         "HomePage"
            //       );
            //     }
            //   },
            component: Application,
            indexRoute: {
                /*首页*/
                onEnter: (nextState, replaceState) => replaceState("/homeIndex")
            },
            childRoutes: [{
                path: "homeIndex",
                getComponent: require("./router/home.jsx").default,
                onEnter: () => {
                    document.title = "首页";
                }
            }]
        },
        /*未匹配的重定向*/
        { path: "*", onEnter: (nextState, replaceState) => replaceState("/") }
    ]
};

console.log(Indexcomponent);
console.log(Sortcomponent);

function* gen() {
    yield 1;
}
var g = gen();
console.log('gen.next()========>', g.next())

class Application extends Component {
    render() {
        return ( <
            section id = "wap-main" >
            <
            Indexcomponent / >
            <
            /section>
        );
    }
}
render( <
    Router history = { history } >
    <
    ul >
    <
    li > < Link to = "/home" > 首页 < /Link></li >
    <
    li > < Link to = "/sort" > 关于 < /Link></li >
    <
    /ul>

    <
    hr / >
    <
    Switch >
    <
    Route path = "/home"
    component = { Application }
    /> <
    Route path = "/sort"
    component = { Sortcomponent }
    /> <
    /Switch> {
        /* <Switch>
              <Route path="/" exact component={Application} />
              <Route path="/sort" component={Sortcomponent} />
            </Switch> */
    } <
    /Router>,
    document.getElementById("app")
);