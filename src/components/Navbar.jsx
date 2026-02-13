import { FaSearch, FaChevronDown, FaTh } from "react-icons/fa";
import { BiGridAlt } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="sf-navbar">
      {/* Left Section: App Launcher & Logo */}
      <div className="nav-section-left">
        <div className="app-launcher">
          <BiGridAlt />
        </div>
        <div className="brand">Sales</div>
      </div>

      {/* Middle Section: Menu Items */}
      <div className="nav-menu">
        <button className="menu-item active">Main</button>
        <button className="menu-item">Chatter</button>
        <button className="menu-item">Accounts <FaChevronDown className="chevron" /></button>
        <button className="menu-item">Contacts <FaChevronDown className="chevron" /></button>
        <button className="menu-item">Leads <FaChevronDown className="chevron" /></button>
        <button className="menu-item">Opportunities <FaChevronDown className="chevron" /></button>
        <button className="menu-item">Dashboards <FaChevronDown className="chevron" /></button>
      </div>
  
    </nav>
  );
};

export default Navbar;