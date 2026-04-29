import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Left_Sidebar from "../ui/Left_Sidebar";
import Right_Sidebar from "../ui/Right_Sidebar";
import Footer from "../ui/Footer";
import "../../pages/HomePage/Home_Page.css"; 

const MainLayout = () => {
  // Lift the date state here so both Calendar (inside Outlet) 
  // and Right_Sidebar can see it and stay synced.
  const [calendarDate, setCalendarDate] = useState(new Date());

  return (
    <>
      <div className="HP_Root">
        <Left_Sidebar />
        <main className="HP_Main">
          {/* We pass the state to the child route (Home_Page -> Calendar) */}
          <Outlet context={[calendarDate, setCalendarDate]} />
        </main>
        {/* We pass the state to the Right Sidebar to filter reminders */}
        <Right_Sidebar calendarDate={calendarDate} />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
