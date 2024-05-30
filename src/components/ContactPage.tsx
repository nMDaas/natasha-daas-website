import React from "react";
import "./ContactPage.css";
import { GitHub, MailRounded, LinkedIn } from "@mui/icons-material";

const ContactPage = () => {
  return (
    <div>
      <div className="contact-page">
        thank you for visiting!
      </div>
      <div className="links">
        <div className="contact_text">reach out to me @ </div>
        <a href="https://github.com/nMDaas" target="_blank" rel="noopener noreferrer">
          <GitHub fontSize="large" sx={{ color: "white", width: "45px", height: "45px"  }}/>
        </a>
        <a href="mailto:daas.n@northeastern.edu">
          <MailRounded fontSize="large"  sx={{ color: "white", width: "45px", height: "45px"  }}/>
        </a>
        <a href="https://www.linkedin.com/in/natashamishradaas/" target="_blank" rel="noopener noreferrer">
          <LinkedIn fontSize="large"  sx={{ color: "white", width: "45px", height: "45px" }}/>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
