import React from "react";
import pipelineData from "../api/pipelineData.json"; // Path to your JSON file

const PipelineChart = () => {
  return (
    <div className="pipeline-container">
      {/* Main section containing the total and the bar stack */}
      <div className="pipeline-main" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Left section for total amount */}
        <div className="pipeline-left">
          <div className="amount" style={{ fontSize: '32px', fontWeight: '300' }}>
            {pipelineData.totalAmount}
          </div>
          <div className="subtitle" style={{ fontSize: '11px', opacity: 0.6 }}>
            {pipelineData.label}
          </div>
        </div>

        {/* Right section for dynamic bars */}
        <div className="pipeline-bars" style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '160px' }}>
          {pipelineData.stages.map((stage, index) => (
            <div 
              key={index} 
              className={`bar ${stage.striped ? 'bar-striped' : ''}`}
              style={{ 
                backgroundColor: stage.color,
                height: '42px', /* Height optimized for the card grid */
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 'bold',
                color: stage.name === "Proposal" ? "#000" : "#fff" 
              }}
            >
              <span>{stage.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend section mapped from JSON stages */}
      <div className="pipeline-legend" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '15px', fontSize: '10px', opacity: 0.7 }}>
        {pipelineData.stages.map((stage, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span 
              className="dot" 
              style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: stage.color,
                display: 'inline-block'
              }}
            ></span>
            {stage.name.substring(0, 7)} {/* Shortens name for the compact UI */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineChart;