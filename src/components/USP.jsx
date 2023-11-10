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

import { StaticImage } from "gatsby-plugin-image";

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
            <StaticImage
              src="../images/USP-BOOT-EN.jpg"
              alt="bootfitting"
              className="usp-intro-image"
            />
          ) : (
            <StaticImage
              src="../images/USP-BOOT-FR.jpg"
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
            <StaticImage
              src="../images//USP-MOJO-EN.jpg"
              alt="ski mojo"
              className="usp-intro-image"
            />
          ) : (
            <StaticImage
              src="../images//USP-MOJO-FR.jpg"
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
            <StaticImage
              src="../images//USP-SERVICE-EN.jpg"
              alt="ski service Val Thorens"
              className="usp-intro-image"
            />
          ) : (
            <StaticImage
              src="../images//USP-SERVICE-FR.jpg"
              alt="service ski Val Thorens"
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
