import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { supabase } from "../supabaseClient";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Check current login session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for login and logout changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("Logout failed: " + error.message);
      return;
    }

    closeMenu();
    navigate("/login");
  }

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

        {user && (
          <Link to="/my-courses" onClick={closeMenu}>
            My Courses
          </Link>
        )}

        <Link to="/#features" onClick={closeMenu}>Features</Link>

        <Link to="/#about" onClick={closeMenu}>About</Link>
      </div>

      <div className="nav-buttons">
        {user ? (
          <button
            className="signup-btn"
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              Log in
            </Link>

            <Link to="/register" className="signup-btn">
              Get Started
            </Link>
          </>
        )}
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