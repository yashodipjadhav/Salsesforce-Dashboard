import React from "react";
import data from "../api/leaderboardData.json";

const TeamLeaderboard = () => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-list">
        {data.team.map((member, index) => (
          <div key={index} className="leaderboard-row">
            {/* Left side: Avatar and Name */}
            <div className="member-info">
              <span className="member-name">{member.name}</span>
              <img src={member.img} alt={member.name} className="member-avatar" />
            </div>

            {/* Right side: Segmented Progress Bar */}
            <div className="progress-stack">
              {/* Main Progress Bar */}
              <div 
                className="progress-segment main-bar" 
                style={{ backgroundColor: member.mainColor, flex: parseFloat(member.mainAmount) }}
              >
                <span className="amount-label">{member.mainAmount}</span>
              </div>
              
              {/* Striped Glass Secondary Bar */}
              <div 
                className="progress-segment striped-bar" 
                style={{ flex: parseFloat(member.extraAmount) }}
              >
                <span className="amount-label">{member.extraAmount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* X-Axis Milestones and Labels */}
      <div className="leaderboard-footer">
        <div className="milestone-row">
          {data.milestones.map((m, i) => <span key={i}>{m}</span>)}
        </div>
        <div className="axis-labels">
          <span>{data.axisLabels.y}</span>
          <span>{data.axisLabels.x}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamLeaderboard;