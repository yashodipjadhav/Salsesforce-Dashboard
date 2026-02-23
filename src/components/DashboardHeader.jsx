import React, { useState, useEffect } from "react";
import { FaRegClock, FaChevronDown } from "react-icons/fa";

const DashboardHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  // Format Date
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Format Time
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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
            <p>
              As of {formattedDate}, {formattedTime} | Viewing as Saxton Randle
            </p>
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