import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer-main">
        <div className="container footer1">
          <div className="container-fluid row text-center footer-item">
            <div className="logo col">Let'play</div>
            <div className="text1 col">
              © Let’s play ONLINE 2017 ALL RIGHT RESERVED
            </div>
            <div className="text2 col text-uppercase">
              TERM & CONDITION
              <br />
              PRIVACY POLICY
              <br />
              HELP
            </div>
          </div>
        </div>
        <div className="footer2 bottom-0 card">
            © Let’s play ONLINE 2017 ALL RIGHT RESERVED
        </div>
      </footer>
    </div>
  );
};

export default Footer;
