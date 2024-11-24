// File: App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import NewOrders from './components/layout/NewOrders';
import NewCustomers from './components/dashboard/NewCustomers';
import RevenueTable from './components/dashboard/RevenueTable';
import ProductsList from './components/products/ProductsList';
import ProductsDetailList from './components/products/ProductsDetailList'
import ProductsAdd from './components/products/ProductsAdd';
import ProductsEdit from './components/products/ProductsEdit';
import CategoriesList from './components/categories/CategoriesList';
import CategoriesAdd from './components/categories/CategoriesAdd';
import CategoriesEdit from './components/categories/CategoriesEdit';
import OrdersList from './components/orders/OrdersList';
import OrdersEdit from './components/orders/OrdersEdit';
import UsersList from './components/users/UsersList';
import './App.css';
import './components/assets/styles/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/new-orders" element={<NewOrders />} />
            <Route path="/new-customers" element={<NewCustomers />} />
            <Route path="/revenue" element={<RevenueTable />} />
            <Route path="/product" element={<ProductsList />} />
            <Route path="/product/add-product" element={<ProductsAdd />} />
            <Route path="/product/edit-product/:id" element={<ProductsEdit />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/categories/add-categories" element={<CategoriesAdd />} />
            <Route path="/categories/edit-categories/:id" element={<CategoriesEdit />} />
            <Route path="/product/:id" element={<ProductsDetailList />} />
            <Route path="/orders" element={<OrdersList />} />
            <Route path="/orders/edit-orders" element={<OrdersEdit />} />
            <Route path="/users" element={<UsersList />} />
            {/* Thêm các route khác nếu cần */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
