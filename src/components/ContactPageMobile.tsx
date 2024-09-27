import React from "react";
import "./ContactPageMobile.css";
import { GitHub, MailRounded, LinkedIn } from "@mui/icons-material";
import TaskBar from "./TaskBar2";
import homeIcon from "/other/home2.png";

const ContactPage = () => {
  return (
    <div className="contactPageMobile">
      <TaskBar currentPage="Contact" />
      <div className="contact-content-mobile">
        <img src={homeIcon} alt="Home Icon" className="contact-icon-mobile" />
       
          <div className="thankyou-mobile">thank you for visiting!</div>
          <div className="contact_text-mobile">reach out to me @</div>
          <div className="links-mobile">
            <a
              href="https://www.linkedin.com/in/natashamishradaas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ width: "30px", height: "30px" }} />
            </a>
          <div className="links-mobile">
            <a href="mailto:daas.n@northeastern.edu">
              <MailRounded sx={{ width: "30px", height: "30px" }} />
            </a>
          </div>
              <a
                href="https://github.com/nMDaas"
                target="_blank"
                rel="noopener noreferrer"
              >
              <GitHub fontSize="large" sx={{ width: "30px", height: "30px" }} />
            </a>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;
