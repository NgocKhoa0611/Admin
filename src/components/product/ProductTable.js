// src/components/product/ProductTable.js
import React from 'react';
import ProductRow from './ProductRow';
import hinh from '../assets/images/hinh.jpg';
import './ProductTable.css';

function ProductTable() {
  const products = [
    { id: 1, name: 'áo polo', image: hinh, code: '1', price: 320000, quantity: 2, total: 640000 },
    { id: 2, name: 'túi sách', image: hinh, code: '1', price: 320000, quantity: 2, total: 640000 }
  ];

  return (
    <div className="product-table">
      <h3>Quản lí sản phẩm</h3>
      <div className="d-flex justify-content-end">
        <button href="/#" className="btn btn-primary mb-2">Thêm sản phẩm</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Mã sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
