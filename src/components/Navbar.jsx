import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  if (!user) return null; // hide navbar if not logged in

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/dashboard">Dashboard</Link>{" | "}

      <Link to="/products">Products</Link>{" | "}

      {user.role === "manager" && (
        <>
          <Link to="/add-product">Add Product</Link>{" | "}
        </>
      )}

      <span style={{ marginLeft: "20px" }}>
        ({user.role})
      </span>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <button
        onClick={handleLogout}
        style={{ marginLeft: "20px" }}
      >
        Logout
      </button>
    </nav>
  );
}
