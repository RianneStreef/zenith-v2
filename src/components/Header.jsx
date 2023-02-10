import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage, pathname, setPathname } = props;

  useEffect(() => {}, [pathname]);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="header">
      <ul className="links hidden-mobile">
        <li>
          <Link
            to={language === "french" ? "/" : "/en/"}
            className={`nav-link ${
              pathname === "https://zenith-vt.netlify.app/" ||
              pathname === "https://www.zenith-skishop.com/"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.home}
          </Link>
          <Link
            to={language === "french" ? "/bootfitting" : "/en/bootfitting"}
            className={`nav-link ${
              pathname === "https://zenith-vt.netlify.app/bootfitting" ||
              pathname === "https://www.zenith-skishop.com/bootfitting"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.bootfitting}
          </Link>
          <Link
            to={language === "french" ? "/services" : "/en/services"}
            className={`nav-link ${
              pathname === "https://zenith-vt.netlify.app/services" ||
              pathname === "https://www.zenith-skishop.com/services"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.services}
          </Link>
          <Link
            to={language === "french" ? "/#contact" : "/en/#contact"}
            className={`nav-link ${
              pathname === "https://zenith-vt.netlify.app/#contact" ||
              pathname === "https://zenith-skishop.com/#contact"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.contact}
          </Link>

          {language === "french" ? (
            <a
              href="https://zenith-skishop.notresphere.com/location-materiel"
              target="blank"
              className="nav-link nav-link-yellow"
            >
              {languageToUse.book}
            </a>
          ) : (
            <a
              href=" https://zenith-skishop.notresphere.com/en-gb/rental-gear"
              target="blank"
              className="nav-link nav-link-yellow"
            >
              {languageToUse.book}
            </a>
          )}
        </li>

        <li>
          <div className="set-language">
            <Link
              to="/en/"
              onClick={() => handleSetLanguage("english")}
              onKeyPress={() => handleSetLanguage("english")}
              className="invisible-button"
            >
              <img
                src={flagEn}
                alt="english"
                className={`flag ${
                  languageToUse.language === "english" ? "opaque" : "fade"
                } `}
              />
            </Link>
            <Link
              to="/"
              onClick={() => handleSetLanguage("french")}
              onKeyPress={() => handleSetLanguage("french")}
              className="invisible-button"
            >
              <img
                src={flagFr}
                alt="français"
                className={`flag ${
                  languageToUse.language === "french" ? "opaque" : "fade"
                } `}
              />
            </Link>
          </div>
        </li>
      </ul>
      <div className="hidden-desktop mobile-header">
        <span className="header-name">Zenith Ski Shop</span>
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </div>
    </div>
  );
};

export default Header;
