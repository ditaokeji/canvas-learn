import React from "react";
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './layout'
import CanvasTest01 from './canvasTest01'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CanvasTest01 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
