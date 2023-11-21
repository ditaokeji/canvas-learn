import React from "react";
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './layout'
import CanvasTest01 from './canvasTest01'
import CanvasTest02 from './canvasTest02'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="canvasTest01" element={<CanvasTest01 />} />
          <Route path="canvasTest02" element={<CanvasTest02 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
