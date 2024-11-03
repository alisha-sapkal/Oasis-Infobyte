// src/pages/UserDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <p>Select from the available options to create your pizza.</p>
      <Link to="/pizza-builder"><button>Start Building Pizza</button></Link>
    </div>
  );
}

export default UserDashboard;
