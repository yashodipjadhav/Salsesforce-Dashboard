import React, { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";

const Card = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Prevent background scrolling when expanded
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      {/* Background Dimmer */}
      {isExpanded && (
        <div className="card-overlay" onClick={toggleExpand}></div>
      )}

      <div className={`card ${isExpanded ? "expanded" : ""}`}>
        <div className="card-header">
          <div className="header-left">
            <div className="icon-placeholder" onClick={toggleExpand}>
              {isExpanded ? <AiOutlineClose /> : <BiExpandAlt />}
            </div>
            <h3>{title}</h3>
          </div>
          <button className="view-report">
            View Report <GoArrowUpRight />
          </button>
        </div>
        
        <div className="card-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;