import Indexcomponent from "./component/index/index.jsx";
import Sortcomponent from "./component/sort/index.jsx";


export const routes = [
  { path: "/", exact: true, component: Sortcomponent },
  {
    path: "/login",
    exact: true,
    component: Indexcomponent
  }
];