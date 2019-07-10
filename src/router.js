import Indexcomponent from "./component/index/index.jsx";
import Sortcomponent from "./component/sort/index.jsx";


export const routes = [
  { path: "/",  component: Indexcomponent,exact: true, },
  {
    path: "/login",

    component: Sortcomponent
  },
  {
    path: "/index",
    component: Indexcomponent
  }
];