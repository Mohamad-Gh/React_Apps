import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TelegramIcon from "@mui/icons-material/Telegram";

function ContactDetails(props) {
  return (
    <div className="contact-details">
      <h2>{props.h2}</h2>
      <p className="text">{props.text}</p>
      <p>
        <LocalPhoneIcon className="socialMedias" />
        {" " + props.tel}
      </p>
      <a href="">
        <p>
          <EmailIcon className="socialMedias" />
          {" " + props.email}
        </p>
      </a>
      <p>
        {" "}
        <LocationOnIcon className="socialMedias" />
        {" " + props.address}
      </p>
      <div className="socialMedias">
        <InstagramIcon />
        <XIcon />
        <WhatsAppIcon />
        <TelegramIcon />
      </div>
    </div>
  );
}

export default ContactDetails;
