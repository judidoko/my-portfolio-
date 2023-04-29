import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import Twittericon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <EmailIcon />
        <Twittericon />
        <LinkedInIcon />
      </div>
      <p>@copy; 2023 Juddoko</p>
    </div>
  );
}

export default Footer;
