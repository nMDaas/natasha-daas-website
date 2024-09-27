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
        <div className="contact-content-mobile">
          <div className="thankyou-mobile">thank you for visiting!</div>
          <div className="contact_text-mobile">reach out to me @</div>
        </div>
      </div>
  );
};

export default ContactPage;
