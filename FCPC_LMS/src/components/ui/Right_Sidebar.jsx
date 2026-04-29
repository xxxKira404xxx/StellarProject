import React from "react";
import "./Right_Sidebar.css";
import { sharedDeadlines } from "../../data/deadlines.js";

const BellIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="HP_Bell_SVG"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const Right_Sidebar = ({ calendarDate }) => {
  // Format date to match: "12 Dec 2022, Friday"
  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      weekday: "long"
    }).replace(/ /g, ' ').replace(',', ', ');
  };

  // Filter deadlines to ONLY show the ones in the month currently visible on the calendar
  // We check if calendarDate exists to avoid errors during initial render or if prop is missing
  const filteredDeadlines = sharedDeadlines.filter(r => {
    if (!calendarDate) return true;
    return r.date.getMonth() === calendarDate.getMonth() && 
           r.date.getFullYear() === calendarDate.getFullYear();
  });

  const currentMonthName = calendarDate 
    ? calendarDate.toLocaleDateString("en-US", { month: "long" }) 
    : "";

  return (
    <aside className="HP_Right">
      <div className="HP_Profile_Card">
        <div className="HP_Profile_Avatar" />
        <img src="./src/assets/Icons/Profile.jpg" alt="Student" />
        <p className="HP_Profile_Name">Stella Walton</p>
        <p className="HP_Profile_Role">Student</p>
        <button className="HP_Profile_Btn">Profile</button>
      </div>

      <div className="HP_Reminders">
        <p className="HP_Section_Title">
          Reminders {currentMonthName ? `(${currentMonthName})` : ""}
        </p>
        
        {filteredDeadlines.length > 0 ? (
          filteredDeadlines.map((r) => (
            <div key={r.id} className="HP_Reminder_Item">
              <span className="HP_Bell_Icon_Wrapper">
                <BellIcon />
              </span>
              <div>
                <p className="HP_Reminder_Subject">{r.subject || r.title}</p>
                <p className="HP_Reminder_Date">{formatDate(r.date)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="No_Deadlines">No deadlines for this month.</p>
        )}
      </div>
    </aside>
  );
};

export default Right_Sidebar;
