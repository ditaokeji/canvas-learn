import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/canvasTest01">canvasTest01 - 测试浏览器是否支持canvas</Link></li>
          <li><Link to="/canvasTest02">canvasTest02 - 绘制形状</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
