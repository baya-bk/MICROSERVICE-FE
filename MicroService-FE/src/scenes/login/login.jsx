import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { mockDataTeam } from "../../data/mockData";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Find user by email
      const user = mockDataTeam.find((user) => user.email === username);
      if (!user || user.access !== password) {
        setError("Invalid username or password");
        return;
      }

      if (user.role === "admin1") {
        localStorage.setItem("userToken", user.email);
        localStorage.setItem("role", user.role);
        navigate("/dashboard/", { replace: true });
      } else if (user.role === "admin2") {
        localStorage.setItem("userToken", user.email);
        localStorage.setItem("role", user.role);
        navigate("/dashboard/organization", { replace: true });
      }
      // Login successful
      // localStorage.setItem('userToken', user.email);
      // console.log("login successfull.");
      // console.log("user email:", user.email);
      // navigate('/dashboard/');
    } catch (error) {
      console.log(error);

      setError("An error occurred during login");
      console.error("Login error:", error);
      console.log(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#040720",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Welcome</h2>
      {error && (
        <div style={{ color: "#ff0000", marginBottom: "10px" }}>{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="username"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "3px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
