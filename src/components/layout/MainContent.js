// src/components/MainContent.js
import './MainContent.css';
import React from 'react';
import Statistics from '../dashboard/Statistics';
import RevenueTable from '../dashboard/RevenueTable';
import NewOrders from './NewOrders';
import NewCustomers from '../dashboard/NewCustomers';

function MainContent() {
  return (
    <div className="main-content">
      <h3 className="title-page">Dashboards</h3>
      <section className="statistics row">
        <Statistics title="Tổng sản phẩm" number="3M" link="/" />
        <Statistics title="Tổng thành viên" number="3M" link="/" />
        <Statistics title="Tổng danh mục" number="3M" link="/" />
        <Statistics title="Tổng danh mục" number="3M" />
      </section>
      <section className="row">
        <div className="col-sm-12 col-md-6 col-xl-6">
          <RevenueTable />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <NewOrders />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <NewCustomers />
        </div>
      </section>
    </div>
  );
}

export default MainContent;
