// src/components/product/ProductRow.js
import React from 'react';

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td><img src={product.image} alt={product.name} width="50" /></td>
      <td>{product.code}</td>
      <td>{product.price.toLocaleString()} VND</td>
      <td>{product.quantity}</td>
      <td>{product.total.toLocaleString()} VND</td>
      <td>
        <button className="edit-btn"><i class="fa-solid fa-pen-to-square"></i>Sửa</button>
        <button className="delete-btn">Xóa</button>
      </td>
    </tr>
  );
}

export default ProductRow;
