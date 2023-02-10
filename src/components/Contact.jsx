import React from "react";

import "../styles/Contact.css";

import { content } from "../content/languages";

import location from "../images/location.svg";
import telephone from "../images/phone.svg";
import email from "../images/at.svg";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="contact" id="contact">
      {/* <div className="header-placeholder" /> */}

      <h2>{languageToUse.contactTitle}</h2>
      <p className="contact-text">{languageToUse.contactIntro1}</p>
      <p className="contact-text">{languageToUse.contactIntro2}</p>
      <div className="contact-blocks">
        <div className="google-map-iframe">
          <iframe
            className="iframe-google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=%20Immeuble%20Le%20Z%C3%A9nith%20%20Place%20Caron%20Val%20Thorens%20%2073440%20Les%20Belleville&t=&z=17&ie=UTF8&iwloc=&output=embed"
          />
        </div>
        <div className="contact-info">
          <div>
            <img src={location} alt="" className="contact-icon" />
            <p className="address address-bold">
              {languageToUse.addressContent1}
            </p>
            <p className="address"> {languageToUse.addressContent2}</p>
            <p className="address"> {languageToUse.addressContent3}</p>
            <p className="address"> {languageToUse.addressContent4}</p>
          </div>
          <p>
            <img src={telephone} alt="" className="contact-icon" />
            <a href="tel:0033479000528"> {languageToUse.telContent}</a>
          </p>
          <p>
            <img src={email} alt="" className="contact-icon" />
            <a href="mailto:zenith-skishop@wanadoo.fr">
              zenith-skishop@wanadoo.fr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
