import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          <GraduationCap size={25} />
        </div>
        <span>
          Edu<span className="logo-highlight">Nexus</span>
        </span>
      </Link>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>

        <Link to="/courses" onClick={closeMenu}>Courses</Link>

        <Link to="/#features" onClick={closeMenu}>Features</Link>

        <Link to="/#about" onClick={closeMenu}>About</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/login" className="login-btn">Log in</Link>

        <Link to="/register" className="signup-btn">
          Get Started
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;