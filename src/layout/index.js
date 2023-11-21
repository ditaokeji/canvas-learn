import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/canvasTest01">canvasTest01 - 测试浏览器是否支持canvas</Link></li>
          <li><Link to="/canvasTest02">canvasTest02 - 绘制形状</Link></li>
          <li><Link to="/canvasTest03">canvasTest03 - 绘制文本</Link></li>
          <li><Link to="/canvasTest04">canvasTest04 - 一个简单的例子</Link></li>
          <li><Link to="/canvasTest05">canvasTest05 - 绘制矩形</Link></li>
          <li><Link to="/canvasTest06">canvasTest06 - 绘制线段</Link></li>
          <li><Link to="/canvasTest07">canvasTest07 - 绘制三角形边框</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
