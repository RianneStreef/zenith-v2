import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

import { content } from "../content/languages";

import buttonLocationEnLigne from "../images/location-en-ligne.svg";
import buttonOnlineRental from "../images/online-rental.svg";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";

  const [pathname, setPathname] = useState(`/`);

  useEffect(() => {
    const button = document.getElementById("location-en-ligne");

    setPathname(window.location.href);

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      if (windowWidth < 769) {
        if (
          pathname === "https://zenith-vt.netlify.app/" ||
          pathname === "https://zenith-skishop.com/"
        ) {
          if (currentScroll > windowHeight) {
            button.classList.remove("transparent");
            return;
          }
          if (currentScroll < windowHeight) {
            button.classList.add("transparent");
            return;
          }
        } else {
          if (currentScroll > windowHeight * 0.25) {
            button.classList.remove("transparent");
            return;
          }
          if (currentScroll < windowHeight * 0.25) {
            button.classList.add("transparent");
            return;
          }
        }
      }
      if (windowWidth > 769) {
        if (currentScroll > 2) {
          button.classList.remove("transparent");
          return;
        }
      }
    });
  });

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
      pathname,
      setPathname,
    })
  );
  return (
    <div className="layout">
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
        pathname={pathname}
        setPathname={setPathname}
      />
      <section className="main">{childrenWithProps}</section>

      {language === "french" ? (
        <a
          href="https://zenith-skishop.notresphere.com/location-materiel"
          target="blank"
          className="book-link"
        >
          <img
            src={buttonLocationEnLigne}
            className="button-location-en-ligne transparent"
            id="location-en-ligne"
            alt="reservation en ligne"
          />
        </a>
      ) : (
        <a
          href=" https://zenith-skishop.notresphere.com/en-gb/rental-gear"
          target="blank"
          className="book-link"
        >
          <img
            src={buttonOnlineRental}
            className="button-location-en-ligne transparent"
            id="location-en-ligne"
            alt="online rental"
          />
        </a>
      )}
      <Footer language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default Layout;
