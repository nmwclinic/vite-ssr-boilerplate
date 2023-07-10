import React from 'react'
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

export function PublicRoutes() {
  return [
    { path: '/', element: <Home />, indexing: true },
    { path: '/about', element: <About />, indexing: true },
    { path: '/products', element: <Products />, indexing: true },
  ]
}

export function UserRoutes() {
  return [
    { path: '/auth', element: <Home />, indexing: false }
  ]
}

export function RoutePaths() {
  let isRoutes = [];
  PublicRoutes().map((data) => data.indexing && isRoutes.push(data.path));
  UserRoutes().map((data) => data.indexing && isRoutes.push(data.path));

  return isRoutes
}