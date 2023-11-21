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
import CanvasTest03 from './canvasTest03'
import CanvasTest04 from './canvasTest04'
import CanvasTest05 from './canvasTest05'
import CanvasTest06 from './canvasTest06'
import CanvasTest07 from './canvasTest07'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="canvasTest01" element={<CanvasTest01 />} />
          <Route path="canvasTest02" element={<CanvasTest02 />} />
          <Route path="canvasTest03" element={<CanvasTest03 />} />
          <Route path="canvasTest04" element={<CanvasTest04 />} />
          <Route path="canvasTest05" element={<CanvasTest05 />} />
          <Route path="canvasTest06" element={<CanvasTest06 />} />
          <Route path="canvasTest07" element={<CanvasTest07 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
