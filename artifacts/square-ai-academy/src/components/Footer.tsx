import aosLogo from "@assets/AoS_logo_1782683794761.jpeg";
import elevatedLogo from "@assets/Color_logo_-_no_background_1782683812201.png";
import squareLogo from "@assets/SquareAI_Logo_Primary_Transparent_v5_1782827954510.png";

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <img src={squareLogo} alt="Square AI Academy" className="footer-logo-img" />
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
              South East London
            </address>
            <a
              href="https://www.linkedin.com/company/squareai-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Square AI Academy on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-powered-by" aria-label="Powered by">
          <span className="footer-powered-label">Powered by</span>
          <div className="footer-powered-logos">
            <a href="https://www.academyofsuccess.co.uk/" target="_blank" rel="noopener noreferrer" aria-label="Academy of Success CIC" className="footer-partner-logo">
              <img src={aosLogo} alt="Academy of Success CIC" />
              <span>Academy of Success CIC</span>
            </a>
            <div className="footer-partner-divider" aria-hidden="true">&amp;</div>
            <a href="https://elevatedliving.uk/" target="_blank" rel="noopener noreferrer" aria-label="Elevated Living Enterprise Limited" className="footer-partner-logo footer-partner-logo--elevated">
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
            Qualifications awarded through the AQA Unit Award Scheme.
          </p>
        </div>
        <p className="footer-stamp">Learn Locally · Grow Globally · Woolwich, SE18</p>
      </div>
    </footer>
  );
}
