import React from "react";
import Chart from "react-apexcharts";
import topAccountsData from "../api/topAccountsData.json";

const TopAccountsChart = () => {
  const series = [{
    data: topAccountsData.accounts.map(acc => acc.amount)
  }];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: false }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        /* Thick bars matching original UI density */
        barHeight: "75%", 
        borderRadius: 18,
        borderRadiusApplication: 'around',
        distributed: true,
      }
    },
    /* Matches the diagonal glass texture */
    fill: {
      type: "pattern",
      pattern: {
        style: "slantedLines",
        width: 4,
        height: 4,
        strokeWidth: 1.5,
      }
    },
    colors: topAccountsData.accounts.map(acc => acc.color),
    dataLabels: {
      enabled: true,
      textAnchor: 'middle',
      formatter: (val, opts) => topAccountsData.accounts[opts.dataPointIndex].display,
      style: {
        fontSize: "12px",
        fontWeight: "600",
        colors: ["#fff"]
      },
      background: {
        enabled: true,
        opacity: 0.15,
        borderRadius: 12,
        padding: 5
      }
    },
    grid: { show: false },
    xaxis: { labels: { show: false }, axisBorder: { show: false } },
    yaxis: {
      /* Dynamic labels from JSON */
      categories: topAccountsData.accounts.map(acc => acc.name), 
      labels: {
        style: {
          colors: "#fff",
          fontSize: "11px",
          fontFamily: "inherit"
        }
      }
    },
    tooltip: { enabled: false }
  };

  return (
    <div className="top-accounts-main-container">
      <div className="top-accounts-header-row">
        <span>Account Name</span>
        <span>Sum Of Amount ⌵</span>
      </div>

      <Chart options={options} series={series} type="bar" height={260} />

      {/* Numeric Legend at the bottom */}
      <div className="top-accounts-footer-legend">
        {topAccountsData.accounts.map((acc, i) => (
          <div key={i} className="footer-item">
            <span className="square-marker" style={{ backgroundColor: acc.color }}></span>
            <span className="index-label">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAccountsChart;