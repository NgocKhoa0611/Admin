// ProductRow.js
import React, { useState } from 'react';

function ProductRow({ product, onEdit }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <tr style={{ display: isVisible ? 'table-row' : 'none' }}>
      <td>{product.product_id}</td>
      <td>{product.product_name}</td>
      <td>{product.category_id}</td>
      <td>
        {product.img_url && (
          <img
            src={`http://localhost:8000/images/${product.img_url}`}
            alt={product.product_name}
            width="50"
            height="50"
          />
        )}
      </td>
      <td>{Number(product.price).toLocaleString()} VND</td>
      <td>{product.price_promotion ? Number(product.price_promotion).toLocaleString() + ' VND' : 'N/A'}</td>
      <td>
        <button className="edit-btn-products" onClick={() => onEdit(product)}> Sửa</button>
        <button className="hide-btn-products" onClick={toggleVisibility}>
          {isVisible ? 'Ẩn' : 'Hiện'}
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
