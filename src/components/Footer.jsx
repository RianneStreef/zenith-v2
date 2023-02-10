import React, { useEffect, useState } from "react";

import { Link } from "gatsby";

import "../styles/Footer.css";
import { content } from "../content/languages";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    function handleResize() {
      const newSize = window.innerWidth;
      setScreenWidth(newSize);
    }
    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <div className="footer">
      <p>
        Copyright © Zenith Ski Shop - 2023. {languageToUse.rights}
        {screenWidth < 768 ? <br /> : "-"}
        <Link to="/legal">{languageToUse.legal}</Link>{" "}
        <a href="https://vts-webdesign.com" target="_blank">
          - VTS Webdesign
        </a>
      </p>
    </div>
  );
};

export default Footer;
