import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: "#38bdf8", marginBottom: "20px" }}>📝 Signup</h2>

        <input placeholder="Name" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleSignup} style={btnStyle}>Create Account</button>

        <p style={{ marginTop: "15px", color: "#cbd5f5" }}>
          Already have an account? <Link to="/login" style={{ color: "#38bdf8" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #18181b, #09090b)",
};

const cardStyle = {
  background: "#09090b",
  padding: "30px 35px",
  borderRadius: "16px",
  width: "360px",
  boxShadow: "0 0 25px rgba(56,189,248,0.2)",
  border: "1px solid #1e293b",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #1e293b",
  background: "#09090b",
  color: "#fff",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#38bdf8",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Signup;

