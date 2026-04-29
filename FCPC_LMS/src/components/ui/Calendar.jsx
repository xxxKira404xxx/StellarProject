import React from "react";
import { useOutletContext } from "react-router-dom";
import "./Calendar.css";
import { sharedDeadlines } from "../../data/deadlines";

const Calendar = () => {
  // Use the shared state from MainLayout
  const [currentDate, setCurrentDate] = useOutletContext();

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = [];
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="Calendar_Day empty"></div>);
    }

    for (let d = 1; d <= totalDays; d++) {
      const date = new Date(year, month, d);
      const isToday = date.toDateString() === new Date().toDateString();
      
      const dayDeadlines = sharedDeadlines.filter(
        (deadline) => deadline.date.toDateString() === date.toDateString()
      );

      days.push(
        <div key={d} className={`Calendar_Day ${isToday ? "today" : ""}`}>
          <span className="Day_Number">{d}</span>
          <div className="Day_Events">
            {dayDeadlines.map((event, idx) => (
              <div key={idx} className={`Event_Badge ${event.type}`}>
                <span className="Event_Course">{event.course}</span>
                <span className="Event_Title">{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="Calendar_Container">
      <div className="Calendar_Header">
        <h3>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
        <div className="Calendar_Nav">
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>&lt;</button>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>&gt;</button>
        </div>
      </div>
      <div className="Calendar_Grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="Calendar_Weekday">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
