import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import './Orders.css';

function OrdersEdit() {
    let { id } = useParams();
    const [orders, setOrders] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        let opt = {
            method: "get",
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:3000/orders/${id}`, opt)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            });
    }, [id]);

    const submitDuLieu = () => {
        let url = `http://localhost:3000/orders/${id}`;
        let opt = {
            method: "put",
            body: JSON.stringify(orders),
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(url, opt)
            .then(res => res.json())
            .then(() => {
                alert("Đã cập nhật đơn hàng");
                navigate('/orders');
            });
    };

    const handleChange = (field, value) => {
        setOrders(prev => ({ ...prev, [field]: value }));
    };

    return (
        <form id="frmeditorders">
            <h2>Sửa đơn hàng</h2>
            <div className='col'>ID đơn hàng:<input value={orders.orders_id || ""} type="text" className="form-control" onChange={e => handleChange("orders_id", e.target.value)} /></div>
            <div className='col'>Ngày đặt hàng:<input value={orders.orders_date || ""} type="date" className="form-control" onChange={e => handleChange("orders_date", e.target.value)} /></div>
            <div className='col'>Tổng tiền:<input value={orders.total_price || ""} type="number" className="form-control" onChange={e => handleChange("total_price", e.target.value)} /></div>
            <div className='col'>Tình trạng đơn hàng:<input value={orders.orders_status || ""} type="text" className="form-control" onChange={e => handleChange("orders_status", e.target.value)} /></div>
            <div className='col'>Ngày thanh toán:<input value={orders.payment_date || ""} type="date" className="form-control" onChange={e => handleChange("payment_date", e.target.value)} /></div>
            <div className='col'>Phương thức thanh toán:
                <select value={orders.payment_method || ""} className="form-control" onChange={e => handleChange("payment_method", e.target.value)}>
                    <option value="" disabled>Chọn phương thức thanh toán</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="MoMo">MoMo</option>
                    <option value="Cash on Delivery">Tiền mặt</option>
                </select>
            </div>
            <div className='col'>ID người dùng:<input value={orders.user_id || ""} type="text" className="form-control" onChange={e => handleChange("user_id", e.target.value)} /></div> 
            <div className="mb-3">
                <button href="/orders" className="edit-btn-orders" type="button" onClick={submitDuLieu}>Sửa đơn hàng</button> &nbsp;
                <Link to={`/orders`} className="btn-orders-list">Danh sách đơn hàng</Link>
            </div>
        </form>
    );
}

export default OrdersEdit;
