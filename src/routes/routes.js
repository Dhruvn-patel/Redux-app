import React from "react";

const HomePage = React.lazy(() => import("../pages/Homepage"));
const CartPage = React.lazy(() => import("../pages/cartPage"));
const routes = [
  {
    path: "/",
    name: "Home",
    component: <HomePage />,
  },
  {
    path: "/cart",
    name: "Cart",
    component: <CartPage />,
  },
];
export default routes;
