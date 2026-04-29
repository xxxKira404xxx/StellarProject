import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">

      <div className="Footer_Top">
        <div className="Footer_Brand">
          <img src="./src/assets/Logo's/FCPC_Logo.png" alt="FCPC Logo" />
          <div>
            <h2>First City Providential College</h2>
            <p>The First, The Best!</p>
          </div>
        </div>
        <div className="Footer_Links">
          <div className="Footer_Column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          <div className="Footer_Column">
            <h4>Contact Us</h4>
            <ul className="Footer_Contact">
              <li>
                <img src="./src/assets/Icons/call.png" alt="call" />
                +63 917 777 5989
              </li>
              <li>
                <img src="./src/assets/Icons/mail.png" alt="email" />
                info@fcpc.edu.ph
              </li>
              <li>
                <img src="./src/assets/Icons/location.png" alt="location" />
                City of San Jose del Monte, Bulacan
              </li>
            </ul>

            <div className="Footer_Socials">
              <a href="#" target="_blank" rel="noreferrer">
                <img src="./src/assets/Icons/facebook.png" alt="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src="./src/assets/Icons/youtube.png" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer_Bottom">
        <p>© {new Date().getFullYear()} First City Providential College. All Rights Reserved.</p>
        <p>You are not logged in. <a href="#">(Log in)</a></p>
        <p>Designed & Developed by FCPC IT Student</p>
      </div>

    </footer>
  );
}