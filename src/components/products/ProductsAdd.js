import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import './Products.css';

function ProductEdit() {
  let { id } = useParams();
  const [product, setProduct] = useState({
    product_id: '',
    product_name: '',
    category_id: '',
    price: '',
    price_promotion: 0,  
    img_url: ''
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Lấy dữ liệu sản phẩm
  useEffect(() => {
    fetch(`http://localhost:8000/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => {
        console.error('Error fetching product:', error);
        alert("Có lỗi xảy ra khi tải sản phẩm. Vui lòng thử lại sau.");
      });
  }, [id]);

  // Lấy danh sách danh mục
  useEffect(() => {
    fetch(`http://localhost:8000/category`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setCategories(data))
      .catch(error => {
        console.error('Error fetching categories:', error);
        alert("Có lỗi xảy ra khi tải danh mục. Vui lòng thử lại sau.");
      });
  }, []);

  const submitDuLieu = (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/product/${id}`;
    const opt = {
      method: "PUT",
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, opt)
      .then(res => res.json())
      .then(data => {
        alert("Đã cập nhật sản phẩm");
        navigate('/product');
      })
      .catch(error => {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
        alert("Có lỗi xảy ra khi cập nhật sản phẩm. Vui lòng thử lại!");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === 'price' || name === 'price_promotion' 
                ? (value === '' ? 0 : parseInt(value, 10))  // Đảm bảo chuyển đổi về số nguyên
                : value
    }));
  };

  return (
    <form id="frmeditproduct" onSubmit={submitDuLieu}>
      <h2>Sửa sản phẩm</h2>
      <div className='col'>Tên sản phẩm:
        <input 
          value={product.product_name} 
          type="text" 
          className="form-control" 
          name="product_name" 
          onChange={handleChange} 
          required  // Bắt buộc nhập
        />
      </div>
      <div className='col'>Danh mục:
        <select 
          className="form-control" 
          name="category_id" 
          value={product.category_id} 
          onChange={handleChange}
          required  // Bắt buộc chọn danh mục
        >
          <option value="">Chọn danh mục</option>
          {categories.map(category => (
            <option key={category.category_id} value={category.category_id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </div>
      <div className='col'>Giá:
        <input 
          value={product.price} 
          type="number" 
          className="form-control" 
          name="price" 
          onChange={handleChange} 
          required  
        />
      </div>
      <div className='col'>Giá khuyến mãi:
        <input 
          value={product.price_promotion} 
          type="number" 
          className="form-control" 
          name="price_promotion" 
          onChange={handleChange} 
          min="0"  
        />
      </div>
      {/* <div className='col'>Hình ảnh:
        <input 
          value={product.img_url} 
          type="text" 
          className="form-control" 
          name="img_url" 
          onChange={handleChange} 
        />
      </div> */}
      
      <div className="mb-3">
        <button className="edit-btn-products" type="submit">Sửa sản phẩm</button> &nbsp;
        <Link to={`/product`} className="btn-products-list">Danh sách sản phẩm</Link>
      </div>
    </form>
  );
}

export default ProductEdit;
