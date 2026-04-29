import { useState } from "react";
import "./Home_Page.css";
import Subjects from "../../components/ui/Subjects.jsx";
import Topbar from "../../components/ui/Topbar.jsx";
import Calendar from "../../components/ui/Calendar.jsx";

export default function Home_Page() {
  const [search, setSearch] = useState("");

  return (
    <>
        <Topbar search={search} setSearch={setSearch} />
        
        <div className="Welcome_Bar">
          <div className="Welcome_Container">
            <div className="Welcome_Text">
              <h1>Hello, Stella Welton!</h1>
              <p>You still have a pending activity on COURSE I</p>
            </div>
            <div className="Welcome_Actions">
              <div className="Welcome_Progress">
                <span>Current Progress</span>
                <div className="Welcome_ProgressRow">
                  <progress value="50" max="100"></progress>
                  <span>50%</span>
                </div>
              </div>
              <button>View Course</button>
            </div>
          </div>
        </div>
        <Subjects/>
        <Calendar />
    </>
  );
}
