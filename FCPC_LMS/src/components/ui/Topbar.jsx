import React from "react";
import "./Topbar.css";

const Topbar = ({ search, setSearch }) => {
  return (
    <div className="HP_Topbar">
      <div className="HP_Search_Container">
        <span className="HP_Search_Icon">🔍</span>
        <input
          className="HP_Search"
          placeholder="Search Courses"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <span className="HP_Date">
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          weekday: "long",
        })}
      </span>
    </div>
  );
};

export default Topbar;
