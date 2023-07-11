import { NavLink } from "react-router-dom";


import "./css/App.css"
import Router from "./router/router";

function App() {
  return (
    // 最外层容器
    <div id="app" className="container">
      {/* 导航栏 */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
          <div className="container-fluid">
            <button type="button" className="" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">学生管理系统</span>
            </button>
          </div>
          <div id="navbar" className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/home" className="nav-link">主页</NavLink>
              <NavLink to="/about" className="nav-link">关于我们</NavLink>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
              <NavLink to="/AddOrEdit" className="nav-link">添加用户</NavLink>
            </ul>
          </div>
      </nav>
      {/* 匹配上的路由所对应的组件显示在这个位置 */}
      <div className="content">
          {/* 在 route 组件中书写你对应的路由，以及路由所对应的组件 */}
          {Router()}
      </div>

    </div>
  );
}

export default App;
