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
      toolbar: { show: false }
    },
    colors: colors,
    labels: labels,
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "75%", /* Matches the hollow center */
          labels: { show: false }
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        // Displays only the numeric value in the bubble
        return opts.w.config.series[opts.seriesIndex];
      },
      style: {
        fontSize: "10px",
        fontWeight: "bold",
        colors: ["#fff"]
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 10,
        opacity: 0.3, /* Translucent bubble effect */
      },
      dropShadow: { enabled: false }
    },
    legend: {
      show: true,
      position: "right",
      labels: { colors: "#ffffff" },
      markers: { width: 8, height: 8, radius: 12 }
    }
    
  };

  return (
    <div className="donut-wrapper" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      height: '100%',
      justifyContent: 'center' 
    }}>
      <Chart options={options} series={series} type="donut" width="100%" height="200" />
      
      {/* Explicit Record Count Label */}
      <div className="record-count-text">
        {activitiesData.label}
      </div>
    </div>
  );
};

export default DonutChart;