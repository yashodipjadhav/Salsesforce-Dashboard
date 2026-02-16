import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import leadsData from "../api/sidebar.json";

// Dynamic SVG Circle Component
const ScoreRing = ({ score }) => {
  const radius = 16;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // Logic for conditional coloring
  const getStrokeColor = (val) => {
    if (val < 20) return "#f75f00";
    if (val < 50) return "#e4d507";
    if (val < 70) return "#72f507"; 
    return "#00f91d";               
  };

  const currentColor = getStrokeColor(score);

  return (
    <div className="score-ring-wrapper">
      <svg width="40" height="40" className="score-svg">
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke={currentColor} /* Dynamic color applied here */
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
          style={{ 
            transition: "stroke-dashoffset 0.8s ease, stroke 0.5s ease" 
          }}
        />
      </svg>
      <span className="score-number" style={{ color: "white" }}>
        {score}
      </span>
    </div>
  );
};

const Sidebar = () => {
  const leads = leadsData;

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <span className="active-tab">Lead & Campaigns</span>
        <span>Activity</span>
      </div>

      <div className="sidebar-header">
        <div className="lead-count">{leads.length}</div>
        <h4>All — Hot Leads</h4>
        <GoArrowUpRight className="open-icon" />
      </div>

      <div className="filters">
        <div className="filter-pill">Name </div>
        <div className="filter-pill">Rating, Total Score </div>
      </div>

      {leads.map((lead, index) => (
        <div key={index} className="lead-card">
          <img src={lead.img} alt={lead.name} className="avatar" />

          <div className="lead-info">
            <strong>{lead.name}</strong>
            <div className="lead-meta">
              <div>
                <span className="label">Title</span>
                <p>{lead.title}</p>
              </div>
              <div>
                <span className="label">Phone</span>
                <p>{lead.phone}</p>
              </div>
              <div>
                <span className="label">Company</span>
                <p>{lead.company}</p>
              </div>
              <div>
                <span className="label">Email</span>
                <p>{lead.email}</p>
              </div>
            </div>
          </div>

          {/* New Dynamic Score Ring */}
          <ScoreRing score={lead.score} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;