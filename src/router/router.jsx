import React from "react";
import { createBrowserRouter } from "react-router";
import Products from "../components/products.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import SingleProduct from "../components/singleProduct.jsx";
import CartPage from "../pages/cartPage.jsx";
import SignUp from "../auth/signUp/SignUp.jsx";
import Login from "../auth/login/Login.jsx";
import FilterPage from "../pages/filter.jsx";
import DashBoard from "../pages/dashBoard.jsx";
import Profile from "../pages/profile.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/products", element: <Products /> },
  {path: "/products/:id", element: <SingleProduct />},
  {path: "/cart", element: <CartPage />},
  {path: "/signup", element: <SignUp />},
  {path: "/login", element: <Login />},
  {path: "/filter", element: <FilterPage />},
  {path: "/dashboard", element: <DashBoard />},
  {path: "/profile", element: <Profile />},
]);

export default router;
