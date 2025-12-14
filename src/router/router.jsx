import React from "react";
import { createBrowserRouter } from "react-router";
import Products from "../components/products.jsx";
import LandingPage from "../pages/LandingPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/products", element: <Products /> },
]);

export default router;
