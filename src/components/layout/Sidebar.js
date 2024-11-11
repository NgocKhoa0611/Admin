// src/components/layout/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ React Router
import logo from '../assets/images/Logo1.png';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user-info">
        <img src={logo} alt="User" className="user-avatar" />
      </div>
      <nav>
        <ul>
          <li><Link to={`/`}>Dashboards</Link></li>
          <li><Link to={`/categories`}>Quản lí danh mục</Link></li>
          <li><Link to={`/products`}>Quản lí sản phẩm</Link></li>
          <li><Link to={`/orders`}>Quản lí đơn hàng</Link></li>
          <li><Link to={`/users`}>Quản lí người dùng</Link></li>
        </ul>
      </nav>
      <button className="logout-btn">Đăng xuất</button>
    </div>
  );
}

export default Sidebar;
