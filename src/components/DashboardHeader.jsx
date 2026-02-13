import React from "react";
import { FaRegClock, FaChevronDown } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header-container">
      {/* Top Breadcrumb Style Tab */}
      <div className="header-breadcrumb">
        <span>Sales Rep Dashboard</span>
      </div>

      {/* Main Info Row */}
      <div className="header-info-row">
        <div className="header-left">
          <div className="clock-icon-wrapper">
            <FaRegClock />
          </div>
          <div className="title-stack">
            <h2>Sales Rep Simple Dashboard</h2>
            <p>As of Apr 18, 2023, 11:31 AM | Viewing as Saxton Randle</p>
          </div>
        </div>

        <div className="header-right">
          <button className="header-btn">Open</button>
          <button className="header-btn">Refresh</button>
          <button className="header-btn">Subscribe</button>
          <button className="header-btn icon-only-btn">
            <FaChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;