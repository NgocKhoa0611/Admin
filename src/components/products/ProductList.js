import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';
import './Products.css';

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    product_id: '',
    product_name: '',
    img_url: '',
    price: '',
    price_promotion: '',
    category_id: ''
  });

  const productsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:8000/product')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      });
  }, []);

  const openModal = (product = null) => {
    setIsModalOpen(true);
    setSelectedProduct(product || {
      product_id: '',
      product_name: '',
      img_url: '',
      price: '',
      price_promotion: '',
      category_id: ''
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct({
      product_id: '',
      product_name: '',
      img_url: '',
      price: '',
      price_promotion: '',
      category_id: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSaveProduct = () => {
    const method = selectedProduct.product_id ? 'PUT' : 'POST';
    const url = selectedProduct.product_id
      ? `http://localhost:8000/product/${selectedProduct.product_id}`
      : 'http://localhost:8000/product';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedProduct),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to save product: ${errorText}`);
        }
        return response.json();
      })
      .then(data => {
        if (selectedProduct.product_id) {
          setProducts(products.map(p => (p.product_id === data.product_id ? data : p)));
        } else {
          setProducts([...products, data]);
        }
        closeModal();
      })
      .catch(error => {
        console.error('Lỗi khi lưu sản phẩm:', error);
        alert(`Lỗi khi lưu sản phẩm: ${error.message}`);
      });
  };

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="product-table">
      <h3>Danh sách sản phẩm</h3>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="add-btn-products" onClick={() => openModal()}> Thêm sản phẩm</button>
        <form className="d-flex" role="search">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-control-search-products" />
          <button className="search-btn-products" type="submit">Tìm kiếm</button>
        </form>
      </div>
      <table id="example" className="table table-hover">
        <thead>
          <tr>
            <th>ID sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Giá khuyến mãi</th>
            <th>Công cụ</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <ProductRow key={product.product_id} product={product} onEdit={() => openModal(product)} />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="pagination-btn">Trang trước</button>
        <span>Trang {currentPage} / {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages} className="pagination-btn">Trang sau</button>
      </div>

      {isModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h2>{selectedProduct.product_id ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</h2>
            <form>
              <div className="form-group">
                <label>Tên sản phẩm:</label>
                <input
                  type="text"
                  name="product_name"
                  value={selectedProduct.product_name}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Giá:</label>
                <input
                  type="number"
                  name="price"
                  value={selectedProduct.price}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Giá khuyến mãi:</label>
                <input
                  type="number"
                  name="price_promotion"
                  value={selectedProduct.price_promotion}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Danh mục:</label>
                <input
                  type="text"
                  name="category_id"
                  value={selectedProduct.category_id}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Hình ảnh:</label>
                <input
                  type="text"
                  name="img_url"
                  value={selectedProduct.img_url}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="modal-buttons">
                <button type="button" onClick={handleSaveProduct} className="add-btn-products">
                  {selectedProduct.product_id ? 'Lưu' : 'Thêm'}
                </button>
                <button type="button" onClick={closeModal} className="btn-products-list">Danh sách</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductTable;
