import React from "react";
import Chart from "react-apexcharts";
import gaugeData from "../api/gaugeData.json"; // Path to your new JSON file

const ClosedBusinessGauge = () => {
  // Dynamic series calculation based on JSON
  const series = [(gaugeData.currentValue / gaugeData.target) * 100];

  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: { enabled: true }
    },
    plotOptions: {
      radialBar: {
        startAngle: -110, // Adjusted angle to match image arc
        endAngle: 110,
        track: {
          background: "rgba(255, 255, 255, 0.1)",
          strokeWidth: "97%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -5,
            fontSize: "32px",
            fontWeight: 300, // Thinner font to match Salesforce UI
            color: "#fff",
            formatter: () => {
              // Using JSON values for dynamic display
              return `${gaugeData.currency}${gaugeData.currentValue}${gaugeData.unit}`;
            }
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: [gaugeData.colors.filled], // End color from JSON
        stops: [0, 100]
      }
    },
    colors: [gaugeData.colors.highlight || "#bab15c"], // Start color from JSON
    stroke: {
      lineCap: "round"
    }
  };

  return (
    <div className="gauge-internal-wrapper" style={{ width: "100%", position: "relative" }}>
      {/* Note: Background styling is now handled by the .card class in your CSS 
          to avoid duplication and extra gaps.
      */}
      <Chart options={options} series={series} type="radialBar" height={260} />
      
      {/* Milestone labels mapped from JSON */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        padding: "0 30px",
        marginTop: "-45px", 
        fontSize: "10px", 
        opacity: 0.6 
      }}>
        <span>{gaugeData.milestones[0]}{gaugeData.unit}</span>
        <span>{gaugeData.milestones[4]}{gaugeData.unit}</span>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "15px", color: "white", opacity: 0.8 }}>
        <div style={{ fontSize: "16px" }}>▲</div>
      </div>
    </div>
  );
};

export default ClosedBusinessGauge;