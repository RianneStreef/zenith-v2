import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/USP.css";

import bootfittingIntroImageFR from "../images/USP-BOOT-FR.jpg";
import mojoIntroImageFR from "../images//USP-MOJO-FR.jpg";
import servicesIntroImageFR from "../images//USP-SERVICE-FR.jpg";
import bootfittingIntroImageEN from "../images/USP-BOOT-EN.jpg";
import mojoIntroImageEN from "../images//USP-MOJO-EN.jpg";
import servicesIntroImageEN from "../images//USP-SERVICE-EN.jpg";

const USP = (props) => {
  let { language, languageToUse, pathname, setPathname } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="usp">
      <div className="usp-intro">
        <Link to="/bootfitting" className="usp-link-container">
          {language === "english" ? (
            <img
              src={bootfittingIntroImageEN}
              alt="bootfitting"
              className="usp-intro-image"
            />
          ) : (
            <img
              src={bootfittingIntroImageFR}
              alt="bootfitting"
              className="usp-intro-image"
            />
          )}

          <h3 className="usp-link">{languageToUse.bootfitting}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp1Text}</p>
      </div>
      <div className="usp-intro">
        <Link
          to="/mojo"
          className="usp-link-container"
          onClick={() => setPathname("/mojo")}
        >
          {language === "english" ? (
            <img
              src={mojoIntroImageEN}
              alt="ski mojo"
              className="usp-intro-image"
            />
          ) : (
            <img
              src={mojoIntroImageFR}
              alt="ski mojo"
              className="usp-intro-image"
            />
          )}
          <h3 className="usp-link">{languageToUse.mojo}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp2Text}</p>
      </div>
      <div className="usp-intro ">
        <Link to="/services" className="usp-link-container">
          {language === "english" ? (
            <img
              src={servicesIntroImageEN}
              alt=""
              className="usp-intro-image"
            />
          ) : (
            <img
              src={servicesIntroImageFR}
              alt=""
              className="usp-intro-image"
            />
          )}
          <h3 className="usp-link">{languageToUse.ourServices}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp3Text}</p>
      </div>
    </div>
  );
};

export default USP;
