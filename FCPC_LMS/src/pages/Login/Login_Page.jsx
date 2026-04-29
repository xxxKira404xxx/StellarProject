import { useState } from "react";
import { useNavigate } from "react-router-dom";
import slide1 from "../../assets/Slideshow/EngineerngTechnology_Course.jpg";
import slide2 from "../../assets/Slideshow/MedTech_Course.jpg";
import slide3 from "../../assets/Slideshow/SHS_Offer.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Login_Page.css";
import Footer from "../../components/ui/Footer.jsx";

// Import Icons
import callIcon from "../../assets/Icons/call.png";
import mailIcon from "../../assets/Icons/mail.png";
import facebookIcon from "../../assets/Icons/facebook.png";
import youtubeIcon from "../../assets/Icons/youtube.png";
import googleIcon from "../../assets/Icons/google.png";

// Import Logos
import fcpcLogo from "../../assets/Logos/FCPC_Logo.png";
import fcpcSmallLogo from "../../assets/Logos/FCPC.png";

const slideImages = [slide1, slide2, slide3];

const slideStyle = (image) => ({
  backgroundImage: `url(${image})`,
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const LMS_Features = [
  { title: "Access E-Modules", desc: "Study lessons through interactive modules in LMS with PowerPoint, images, videos & more." },
  { title: "Track Progress",   desc: "Monitor your learning journey and stay on top of your course completions." },
  { title: "Submit Activities", desc: "Upload and submit your assignments and activities directly through the LMS." },
  { title: "Never Miss Updates", desc: "The LMS is your go-to hub for class announcements, school memos, and important reminders." },
];

export default function Login_Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoginOpen(false);
    navigate("/home");
  };
  
  return (
    <div className="Login_Page">

      <header className="Topper">
        <div className="Contact_Topper">
          <span><img src={callIcon} alt="call" />+63 917 777 5989</span>
          <span><img src={mailIcon} alt="email" />info@fcpc.edu.ph</span>
        </div>
        <div className="References_Topper">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
          <button className="Enroll_Btn">Enroll Now!</button>
        </div>
      </header>

      <nav className="Login_Nav">
        <button className="Logo_btn">
          <img src={fcpcLogo} alt="FCPC Logo" />
          <h1>First City Providential College</h1>
        </button>

        <button className="Hamburger_Btn" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Overlay */}
        {menuOpen && <div className="Menu_Overlay" onClick={() => setMenuOpen(false)} />}

        {/* Side Drawer */}
        <div className={`Side_Drawer ${menuOpen ? "open" : ""}`}>
          <button className="Close_Btn" onClick={() => setMenuOpen(false)}>✕</button>
          <ul className="Drawer_Links">
            <li className="Drawer_Active">Home</li>
          </ul>
          <div className="Drawer_Action_Buttons">
            <button className="Help_Btn">Help</button>
            <button className="Login_Btn" onClick={() => setLoginOpen(!loginOpen)}>Login</button>
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="Nav_Bar_Action_Buttons">
          <button className="Help_Btn">Help</button>
          <button className="Login_Btn" onClick={() => setLoginOpen(!loginOpen)}>Login</button>
        </div>
      </nav>

      {/* Login Panel */}
      {loginOpen && (
        <>
          <div className="Menu_Overlay" />
          <div className="Login_Panel">
            <div className="Login_Panel_Header">
            <img src={fcpcSmallLogo} alt="FCPC.png" />
              <button className="Login_Close_Btn" onClick={() => setLoginOpen(false)}>✕</button>
            </div>
            <button className="Google_Btn" onClick={handleLogin}>
              <img src={googleIcon} alt="Google" />
              Log in with Google
            </button>
            <hr className="Login_Divider" />
          </div>
        </>
      )}
      {/* Login Page Body */}
      <div className="Login_Page_Body">
        <div className="Login_Page_Body_Content">
          <div className="slideshow_container">

            <Slide easing="ease" arrows={false} autoplay duration={2000}>
              {slideImages.map((image, index) => (
                <div key={index} className="each-slide">
                  <div style={slideStyle(image)} />
                </div>
              ))}
            </Slide>

            <div className="About_Container">
              <h2 className="About_Section_Title">Welcome to FCPC LMS</h2>
              <div className="About_Intro">
                <p>
                  The First, The Best! Explore our courses, access resources,
                  and connect with fellow students. Your learning journey
                  starts here!
                </p>
              </div>

              <section className="Flex_Panels">
                {LMS_Features.map((feature, index) => (
                  <div key={index} className="Block">
                    <hr className="solid" />
                    <h2 className="Panel_Title">{feature.title}</h2>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </section>
            </div>

          </div>
        </div>

        <div className="Lms_Features">
          <div className="Lms_Video">
            <iframe
              src="https://www.youtube.com/embed/EkrsKEqPB70?si=deCZdgXR76W3BMr5&amp;start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="Lms_Text">
            <div className="Lms_Text_Content">
              <h2>FCPC LMS Awareness Campaign</h2>
              <hr className="solid" />
              <p>
                We encourage all students to regularly check and make the most of your
                LMS accounts. It's more than just an online platform — it's your
                academic companion.
              </p>
              <p>Click the link below to access the Student LMS Guide:</p>
              
              <a  href="https://docs.google.com/presentation/d/1WHHrRX9nVEdiKOrfJfEN33lckXrjFD3cA7VZ5XgsvCs/edit?slide=id.p#slide=id.p"
                target="_blank"
                rel="noreferrer"
                className="View_More_Btn"
              >
                View More
              </a>
              <p>Let's keep learning smart and stay connected — anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}