import React from "react";
import Chart from "react-apexcharts";
import activitiesData from "../api/activitiesData.json";

const DonutChart = () => {
  const series = activitiesData.activities.map(item => item.count);
  const colors = activitiesData.activities.map(item => item.color);
  const labels = activitiesData.activities.map(item => item.name);

  const options = {
    chart: {
      type: "donut",
      background: "transparent",
      toolbar: { show: false },
      redrawOnParentResize: true,
      redrawOnWindowResize: true
    },
    colors: colors,
    labels: labels,
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: { show: false }
        }
      }
    },
    legend: {
      show: true,
      position: "right",
      labels: { colors: "#ffffff" }
    }
  };

  return (
    <div className="donut-wrapper">
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height="100%"
      />
      <div className="record-count-text">
        {activitiesData.label}
      </div>
    </div>
  );
};

export default DonutChart;