import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from './routes';
import NotFound from "./pages/NotFound";

const router = PublicRoutes();

export default function App() {
  return (
    <Routes>
      {router.map((data, index) => (<Route key={index} path={data.path} element={data.element} />))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

