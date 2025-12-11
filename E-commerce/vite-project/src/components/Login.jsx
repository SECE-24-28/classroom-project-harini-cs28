import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("role", role);
    sessionStorage.setItem("username", username || "user");

    if (role === "admin") navigate("/admin");
    else navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form onSubmit={submit} className="w-[340px] bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded mb-4">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full py-2 bg-purple-600 text-white rounded">Log In</button>
      </form>
    </div>
  );
};

export default Login;
