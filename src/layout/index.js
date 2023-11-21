import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/canvasTest01">canvasTest01</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
