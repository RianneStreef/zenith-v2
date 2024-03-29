import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="intro">
      <div className="intro-text">
        <h2 className="intro-title-1">{languageToUse.introTitle1}</h2>
        <h2 className="intro-title-2">{languageToUse.introTitle2}</h2>
        <p className="intro-text-p">
          <span>{languageToUse.introText1}</span>
          <span className="bold">{languageToUse.introText1B}</span>
          <span>{languageToUse.introText2}</span>
          {language === "english" ? (
            <Link to="/en/bootfitting">
              <span className="bold">{languageToUse.introText2B}</span>
            </Link>
          ) : (
            <Link to="/bootfitting">
              <span className="bold">{languageToUse.introText2B}</span>
            </Link>
          )}
          <span>{languageToUse.introText3}</span>
          <span className="bold">{languageToUse.introText3B}</span>
          <span>{languageToUse.introText4}</span>
        </p>
        <p className="intro-text-p">
          {languageToUse.introText5}
          <Link to="/services"> {languageToUse.introText5b}</Link>
        </p>
        <p className="intro-text-p bold">{languageToUse.introText6}</p>
      </div>
    </div>
  );
};

export default Intro;
