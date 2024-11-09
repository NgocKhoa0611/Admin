// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import NewOrders from './components/layout/NewOrders';
import NewCustomers from './components/dashboard/NewCustomers';
import RevenueTable from './components/dashboard/RevenueTable';
import ProductTable from './components/product/ProductTable';
import CategoriesList from './components/categories/CategoriesList';
import './App.css';
import './components/assets/styles/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/new-orders" element={<NewOrders />} />
            <Route path="/new-customers" element={<NewCustomers />} />
            <Route path="/revenue" element={<RevenueTable />} />
            <Route path="/products" element={<ProductTable />} />
            <Route path="/categories" element={<CategoriesList />} />
            {/* Thêm các route khác nếu cần */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
