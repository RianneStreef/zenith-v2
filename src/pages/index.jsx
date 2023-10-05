import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import USP from "../components/USP";
import Insta from "../components/Insta";
import Explanation from "../components/Explanation";
import Contact from "../components/Contact";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const IndexPage = function (props) {
  let { language, languageToUse, pathname, setPathname } = props;
  let countryCode = "unknown";

  languageToUse = content.french;

  const initGA = (id) => {
    // if (process.env.NODE_ENV === "production") {
    console.log("InitGA");
    ReactGA.initialize(id);
    //}
  };

  const handleAcceptCookie = () => {
    initGA("G-3V9M5ZKEC4");
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();

    if (isConsent === "true") {
      handleAcceptCookie();
    }

    console.log(window.navigator.language);
    if (window.navigator.language === "he") {
      window.location.href = "./home";
    }

    function redirect() {
      window.location.href = "./home";
    }

    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=fc83c402de874a349d862264c7e3701a",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (countryCode = result.country.iso_code))
      .then((result) => {
        if (countryCode === "IL") {
          redirect();
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "fr",
        }}
      >
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        ></script>
      </Helmet>
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        buttonText={languageToUse.cookieAccept}
        declineButtonText={languageToUse.cookieDecline}
      >
        <p className="cookie-text-header">{languageToUse.cookieHeader}</p>
        <p className="cookie-text">{languageToUse.cookieText}</p>
      </CookieConsent>

      <div className="header-placeholder" />

      <Hero language={language} languageToUse={languageToUse} />
      <Intro language={language} languageToUse={languageToUse} />
      <USP
        language={language}
        languageToUse={languageToUse}
        pathname={pathname}
        setPathname={setPathname}
      />
      <Insta />
      <Explanation language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
