import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import "../../styles/global.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import USP from "../../components/USP";
import Insta from "../../components/Insta";
import Explanation from "../../components/Explanation";
import Contact from "../../components/Contact";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const IndexPage = function (props) {
  let { language, languageToUse, pathname, setPathname } = props;

  languageToUse = content.english;

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
  }, []);

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
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
