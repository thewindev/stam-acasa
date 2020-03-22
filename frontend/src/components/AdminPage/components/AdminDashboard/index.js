import React from "react";
import "./admin-dashboard.scss";
import RedFlagCases from "../RedFlagCases";

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <div>
      <span className="section-title">Date colectate</span>
      <RedFlagCases />
    </div>
  </div>
);

export default AdminDashboard;
