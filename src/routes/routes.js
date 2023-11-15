import config from "../config";

//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Product from "../pages/Product/Product";

//Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product },
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
