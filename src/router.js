import Indexcomponent from "./component/index/index.jsx";
import Sortcomponent from "./component/sort/index.jsx";


export const routes = [
  { path: "/", exact: true, component: Indexcomponent },
  {
    path: "/login",
    exact: true,
    component: Sortcomponent
  }
];