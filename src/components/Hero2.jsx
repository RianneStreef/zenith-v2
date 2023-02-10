import React from "react";

import { content } from "../content/languages";

import "../styles/Hero2.css";

import logoHero from "../images/logo-hero.svg";

const Hero2 = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="hero-2">
      <img src={logoHero} alt="logo" className="hero-logo-2" />
    </div>
  );
};

export default Hero2;
