import React, { useState } from "react";
import { FaChevronDown, FaEllipsisH } from "react-icons/fa"; // Added three-dots icon
import { BiGridAlt } from "react-icons/bi";

const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <nav className="sf-navbar">
      <div className="nav-section-left">
        <div className="app-launcher"><BiGridAlt /></div>
        <div className="brand">Sales</div>
      </div>

      <div className="nav-menu">
        <button className="menu-item active">Main</button>
        <button className="menu-item">Chatter <FaChevronDown className="chevron" /></button>
        
        {/* Hidden on mobile to prevent squashing */}
        <div className="desktop-tabs">
          <button className="menu-item">Accounts <FaChevronDown className="chevron" /></button>
          <button className="menu-item">Contacts <FaChevronDown className="chevron" /></button>
          <button className="menu-item">Leads <FaChevronDown className="chevron" /></button>
          <button className="menu-item">Opportunities <FaChevronDown className="chevron" /></button>
        </div>

        {/* Mobile "More" Button */}
        <div className="more-menu">
          <button className="menu-item" onClick={() => setIsMoreOpen(!isMoreOpen)}>
            More <FaEllipsisH />
          </button>
          
          {isMoreOpen && (
            <div className="more-dropdown">
              <button className="dropdown-link">Accounts</button>
              <button className="dropdown-link">Contacts</button>
              <button className="dropdown-link">Leads</button>
              <button className="dropdown-link">Opportunities</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;