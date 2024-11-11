// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import './Orders.css';

function CategoriesList(){
    // const [ orderslist, ganOrderslist ] = useState([]);
    // const navigate = useNavigate();
    // const anDH = (id) => {
    //     if(window.confirm('Xóa thật không bồ') === false)
    //     return false;
    //     fetch(`http://localhost:3000/orders/${id}`, {method: "delete"}).then(res => res.json()).then(data => navigate(0));
    // };
    // useEffect(() => {
    //     fetch("http://localhost:3000/orders").then(res => res.json()).then(data => ganOrderslist(data));
    // }, []);
    return(
        <div className="orders-table">
            <h3 className="title-page">Danh sách đơn hàng</h3>
            <form className="d-flex" role="search">
                <input className="form-control-search-orders" type="search" placeholder="Tìm kiếm đơn hàng..." aria-label="Search" />
                <button className="search-btn-orders" type="submit">Tìm kiếm</button>
            </form>
            <table id="example" className="table table-hover">
                <thead>
                    <tr>
                        <th>ID đơn hàng</th>
                        <th>Ngày đặt hàng</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái đơn hàng</th>
                        <th>Ngày thanh toán</th>
                        <th>Phương thức thanh toán</th>
                        <th>ID người dùng</th>
                        <th>Công cụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>07/10/2024</td>
                        <td>300000</td>
                        <td>Đã giao</td>
                        <td>10/10/2024</td>
                        <td>Tiền mặt</td>
                        <td>1</td>
                        <td>
                            <Link to={`edit-orders`} href="/#" className="edit-btn"> Sửa</Link> 
                            <button href="/#" className="hide-btn-orders"> Ẩn</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>08/10/2024</td>
                        <td>3000000</td>
                        <td>Đã giao</td>
                        <td>11/10/2024</td>
                        <td>MoMo</td>
                        <td>4</td>
                        <td>
                            <Link to={`edit-orders`} href="/#" className="edit-btn"> Sửa</Link> 
                            <button href="/#" className="hide-btn-orders"> Ẩn</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>06/11/2024</td>
                        <td>30000000</td>
                        <td>Đã giao</td>
                        <td>11/11/2024</td>
                        <td>PayPal</td>
                        <td>4</td>
                        <td>
                            <Link to={`edit-orders`} href="/#" className="edit-btn"> Sửa</Link> 
                            <button href="/#" className="hide-btn-orders"> Ẩn</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CategoriesList;