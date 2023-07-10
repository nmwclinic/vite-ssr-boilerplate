import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

export default function Router() {
  return [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
    { path: '*', element: <NotFound /> },
  ]
}