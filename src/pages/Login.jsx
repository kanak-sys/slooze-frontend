import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleManagerLogin = () => {
    login("manager@slooze.com", "1234");
    navigate("/dashboard");
  };

  const handleStoreLogin = () => {
    login("store@slooze.com", "1234");
    navigate("/products");
  };

  return (
    <div className="card">
      <h2>Slooze Inventory System</h2>

      <p><b>What this app does:</b></p>
      <ul>
        <li>Role-based login (Manager / Storekeeper)</li>
        <li>Protected pages</li>
        <li>Product inventory viewing</li>
        <li>Manager-only product creation</li>
      </ul>

      <p><b>Test Credentials:</b></p>
      <p>👨‍💼 Manager → manager@slooze.com / 1234</p>
      <p>🏪 Storekeeper → store@slooze.com / 1234</p>

      <hr />

      <button onClick={handleManagerLogin}>
        Login as Manager
      </button>

      <br />

      <button onClick={handleStoreLogin}>
        Login as Storekeeper
      </button>

      <h2>Slooze Inventory System</h2>

      <p style={{ color: "green", fontWeight: "bold" }}>
        ✅ Frontend is connected and working
      </p>

    </div>
  );
}
