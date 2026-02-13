import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
const Header = () => {
  return (
    <header className="salesforce-header">
      {/* Left Section: Gold Star Logo */}
      <div className="header-left">
        <div className="logo-icon"><IoIosStar /></div>
        <span className="logo-text">salesforce</span>
      </div>

      {/* Center Section: Search Bar */}
      <div className="header-center">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          {/* Icon positioned relative to this container */}
          <span className="search-icon"><IoSearch /></span>
        </div>
      </div>

      {/* Right Section: Icons with yellow notification dot */}
      <div className="header-right">
        <button className="utility-btn"><FaQuestion /></button>
        <button className="utility-btn"><VscSettings /></button>
        <button className="utility-btn notification-active"><FaRegBell /></button>
        <div className="profile-container">
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt="User Profile" 
            className="header-avatar" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;