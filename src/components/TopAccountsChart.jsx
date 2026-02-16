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
      sparkline: { enabled: false },
      /* Added internal padding to prevent labels from clipping */
      padding: {
        left: 10,
        right: 20
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%", /* Slightly reduced for better mobile vertical spacing */
        borderRadius: 12,
        borderRadiusApplication: 'end',
        distributed: true,
      }
    },
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
      /* Removed the bulky background to keep text centered inside thin bars */
      formatter: (val, opts) => topAccountsData.accounts[opts.dataPointIndex].display,
      style: {
        fontSize: "11px",
        fontWeight: "600",
        colors: ["#fff"]
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.5
      }
    },
    grid: { show: false },
    xaxis: { 
      labels: { show: false }, 
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      categories: topAccountsData.accounts.map(acc => acc.name), 
      labels: {
        /* Prevents long names from pushing the chart off-screen */
        minWidth: 90,
        maxWidth: 110,
        style: {
          colors: "#fff",
          fontSize: "11px",
          fontFamily: "inherit"
        }
      }
    },
    tooltip: { enabled: false },
    legend: { show: false }
  };

  return (
    <div className="top-accounts-main-container">
      <div className="top-accounts-header-row">
        <span>Account Name</span>
        <span>Sum Of Amount ⌵</span>
      </div>

      <Chart options={options} series={series} type="bar" height={260} />

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