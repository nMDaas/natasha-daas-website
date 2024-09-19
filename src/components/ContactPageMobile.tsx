import React from "react";
import "./ContactPageMobile.css";
import { GitHub, MailRounded, LinkedIn } from "@mui/icons-material";
import TaskBar from "./TaskBar2";
import homeIcon from "/other/home2.png";

const ContactPage = () => {
  return (
    <div className="contactPageMobile">
      <TaskBar currentPage="Contact" />
        <img src={homeIcon} alt="Home Icon" className="contact-icon-mobile" />
        <div className="contact-content">
          <div className="thankyou">thank you for visiting!</div>
          <div className="contact_text">reach out to me @</div>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/natashamishradaas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ width: "45px", height: "45px" }} />
              <span className="linkDescrip">https://www.linkedin.com/in/natashamishradaas/</span>
            </a>
          </div>
          <div className="links">
            <a href="mailto:daas.n@northeastern.edu">
              <MailRounded sx={{ width: "45px", height: "45px" }} />
              <span className="linkDescrip">daas.n@northeastern.edu</span>
            </a>
          </div>
          <div className="links">
              <a
                href="https://github.com/nMDaas"
                target="_blank"
                rel="noopener noreferrer"
              >
              <GitHub fontSize="large" sx={{ width: "45px", height: "45px" }} />
              <span className="linkDescrip">https://github.com/nMDaas</span>
            </a>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;
