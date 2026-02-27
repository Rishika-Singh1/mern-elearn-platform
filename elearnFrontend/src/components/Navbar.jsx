import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-brand">
        Learnio
      </Link>

      <div className="nav-links">
        <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Courses
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Contact
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Profile
        </NavLink>
      </div>

      <button onClick={onLogout} className="nav-logout-btn">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
