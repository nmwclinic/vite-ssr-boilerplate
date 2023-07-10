import { Routes, Route } from "react-router-dom";
import Router from './router';

const router = Router();

export default function App() {
  return (
    <Routes>
      {router.map((data, index) => (<Route key={index} path={data.path} element={data.element} />))}
    </Routes>
  )
}

