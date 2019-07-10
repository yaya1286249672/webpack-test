require("@babel/polyfill");
import React, { Component } from "react";
import { matchRoutes, renderRoutes } from "react-router-config";
import { render } from "react-dom";
import { Route, Switch, BrowserRouter as Router, Link,HashRouter,} from "react-router-dom";
const history = require("history").createBrowserHistory();
import { routes } from './router'
//rem适配
// import './plugin/flexible/index.js'
import "plugin/flexible/index.js";



function* gen() {
  yield 1;
}
var g = gen();
console.log("gen.next()========>", g.next());


const App = () => (
  
  <main>
      <HashRouter history={history}>{renderRoutes(routes)}</HashRouter>
  </main>
);
console.log("renderRoutes(routes)========>", renderRoutes(routes));
console.log("App------->", App);


render(<App />, document.getElementById("app"));
