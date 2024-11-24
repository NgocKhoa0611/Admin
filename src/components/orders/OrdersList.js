import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import './Orders.css';

function OrderList() {
    const [ordersList, setOrdersList] = useState([]);
    const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:8000/orders");
            if (!response.ok) throw new Error("Không thể lấy danh sách đơn hàng");
            const data = await response.json();
            setOrdersList(data.orders);
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    };
    const confirmOrder = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:8000/orders/${orderId}/confirm`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) throw new Error("Không thể xác nhận đơn hàng");

            const updatedOrder = await response.json();

            setOrdersList((prevOrders) =>
                prevOrders.map((order) =>
                    order.orders_id === orderId ? { ...order, order_status: updatedOrder.order_status } : order
                )
            );
            alert("Đơn hàng đã được xác nhận!");
        } catch (error) {
            console.error("Lỗi khi xác nhận đơn hàng:", error);
            alert("Không thể xác nhận đơn hàng. Vui lòng thử lại.");
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);
    return (
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
                    {ordersList.map(order => (
                        <tr key={order.orders_id}>
                            <td>{order.orders_id}</td>
                            <td>{new Date(order.order_date).toLocaleDateString()}</td>
                            <td>{order.total_price.toLocaleString('vi-VN')} VND</td>
                            <td>{order.order_status}</td>
                            <td>{order.payment_date ? new Date(order.payment_date).toLocaleDateString() : "Chưa thanh toán"}</td>
                            <td>{order.payment_method}</td>
                            <td>{order.user_id}</td>
                            <td>
                                {order.order_status === "Chờ xử lý" ? (
                                    <button
                                        className="confirm-btn"
                                        onClick={() => confirmOrder(order.orders_id)}
                                    >
                                        Xác nhận
                                    </button>
                                ) : (
                                    <Link to={`/orders/edit/${order.order_id}`} className="edit-btn">Cập nhật</Link>
                                )}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderList;