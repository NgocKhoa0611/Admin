// src/components/RevenueTable.js
import React from 'react';

function RevenueTable() {
  return (
    <div className="card chart">
      <form action="#" method="post">
        <div className="input-group mb-3">
          <input type="date" className="form-control" placeholder="Username" aria-label="Username" />
          <span className="input-group-text">Đến ngày</span>
          <input type="date" className="form-control" placeholder="Server" aria-label="Server" />
          <button type="button" className="btn btn-primary">Xem</button>
        </div>
      </form>
      <p>Tổng doanh thu: <span>100.000.000 VND</span></p>
      <table className="revenue table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã đơn hàng</th>
            <th>Doanh thu</th>
          </tr>
        </thead>
        <tbody>
          {/* Rows can be dynamically generated here */}
          <tr><td>1</td><td>GIA001</td><td>100.000</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default RevenueTable;
