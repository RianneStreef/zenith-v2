import React, { useEffect, useState } from "react";

import { Link } from "gatsby";

import "../styles/Footer.css";
import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [screenWidth, setScreenWidth] = useState(0);

  let year = new Date().getFullYear();
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
        Copyright © {intakeInfo.companyName} -
        {language === "french" ? <> {intakeInfo.mainActivityFr} - </> : null}
        {language === "english" ? <> {intakeInfo.mainActivityEn} - </> : null}
        {intakeInfo.location} - {year}.
        {/* {screenWidth < 768 ? <br /> : "-"} */}
        <Link to="/legal"> {languageToUse.legal}</Link>{" "}
        <a href="https://vts-webdesign.com" target="_blank">
          - VTS Webdesign
        </a>
      </p>
    </div>
  );
};

export default Footer;
