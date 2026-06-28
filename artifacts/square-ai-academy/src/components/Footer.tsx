import aosLogo from "@assets/AoS_logo_1782683794761.jpeg";
import elevatedLogo from "@assets/Color_logo_-_no_background_1782683812201.png";

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo-text">
              Square<span> AI</span> Academy
            </div>
            <p className="footer-tagline">
              South East London's first physical AI learning hub.
              <br />
              Open to all. Based in Woolwich, SE18.
            </p>
          </div>
          <div>
            <span className="footer-col-title">Navigate</span>
            <ul className="footer-links">
              <li><a href="#why-physical">Why Physical</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#built-for-you">Built for You</a></li>
              <li><a href="#funding">Funding</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <span className="footer-col-title">Find Us</span>
            <address className="footer-address" style={{ fontStyle: "normal" }}>
              Woolwich, SE18<br />
              South East London<br />
              <br />
              squareaiacademy.com<br />
              [email TBC]
            </address>
          </div>
        </div>

        <div className="footer-powered-by" aria-label="Powered by">
          <span className="footer-powered-label">Powered by</span>
          <div className="footer-powered-logos">
            <a href="#" aria-label="Academy of Success CIC" className="footer-partner-logo">
              <img src={aosLogo} alt="Academy of Success CIC" />
              <span>Academy of Success CIC</span>
            </a>
            <div className="footer-partner-divider" aria-hidden="true">&amp;</div>
            <a href="#" aria-label="Elevated Living Enterprise Limited" className="footer-partner-logo footer-partner-logo--elevated">
              <img src={elevatedLogo} alt="Elevated Living Enterprise Limited" />
              <span>Elevated Living Enterprise Limited</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-legal">
            &copy; {new Date().getFullYear()} Square AI Academy. All rights reserved.{" "}
            <a href="#">Privacy Policy</a>
          </p>
          <p className="footer-aqa-note">
            Qualifications awarded through the AQA Unit Award Scheme. Not Ofqual-regulated.
          </p>
        </div>
        <p className="footer-stamp">Learn Locally · Grow Globally · Woolwich, SE18</p>
      </div>
    </footer>
  );
}
