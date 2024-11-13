// File: ProductList.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Products.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Số sản phẩm trên mỗi trang

  useEffect(() => {
    fetch("http://localhost:8000/product/")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching products:', error);
        alert("Có lỗi xảy ra khi tải danh sách sản phẩm. Vui lòng thử lại sau.");
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tính toán các sản phẩm cần hiển thị dựa trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="products-table">
      <h3 className="title-page">Danh sách sản phẩm</h3>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to={`add-product`} id="mb-2" className="add-btn-products">Thêm sản phẩm</Link>
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control-search-products"
            type="search"
            placeholder="Tìm kiếm sản phẩm..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn-products" type="submit">Tìm kiếm</button>
        </form>
      </div>
      <table id="example" className="table table-hover">
        <thead>
          <tr>
            <th>ID sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Giá khuyến mãi</th>
            <th>Công cụ</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.category_id}</td>
              <td>{product.price}</td>
              <td>{product.price_promotion}</td>
              <td>
                <Link to={`/product/edit-product/${product.product_id}`} className="edit-btn"> Sửa</Link>
                <button className="hide-btn-products"> Ẩn</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Trang trước</button>
        <span>Trang {currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Trang sau</button>
      </div>
    </div>
  );
}

export default ProductList;
