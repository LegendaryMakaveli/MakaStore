import React from "react";
import { createBrowserRouter } from "react-router";
import Products from "../components/products.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import SingleProduct from "../components/singleProduct.jsx";
import CartPage from "../pages/cartPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/products", element: <Products /> },
  {path: "/products/:id", element: <SingleProduct />},
  {path: "/cart", element: <CartPage />}
]);

export default router;
