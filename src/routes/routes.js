import config from "../config";

//Pages
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";

//Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
