import React from "react";
import { useNavigate } from "react-router-dom";
import "./Left_Sidebar.css";

const Left_Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="HP_Leftbar">
      <div className="HP_Icon">
        <img src="./src/assets/Logo's/FCPC.png" alt="FCPC Logo" />
      </div>
      <nav className="HP_Nav">
        <button className="HP_Nav_Item HP_Nav_Active">
          <span className="HP_Nav_Icon">⊞</span>
          <span>Dashboard</span>
        </button>
        <button className="HP_Nav_Item">
          <span className="HP_Nav_Icon">👥</span>
          <span>Courses</span>
        </button>
        <button className="HP_Nav_Item">
          <span className="HP_Nav_Icon">👤</span>
          <span>Profile</span>
        </button>
      </nav>

      <div className="Logout_Container">
        <button className="Logout_Btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Left_Sidebar;
