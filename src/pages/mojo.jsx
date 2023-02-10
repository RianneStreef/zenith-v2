import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../styles/mojo.css";

import Layout from "../components/Layout";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import mojoIcon1 from "../images/mojo-icon-1.svg";
import mojoIcon2 from "../images/mojo-icon-2.svg";
import mojoIcon3 from "../images/mojo-icon-3.svg";
import mojoIcon4 from "../images/mojo-icon-4.svg";

import mojoIntroImage from "../images/modjoIntroImage.jpg";

import logoHero from "../images/logo-hero.svg";

const BootfittingPage = function (props) {
  let { language, languageToUse, pathname, setPathname } = props;

  languageToUse = content.french;

  return (
    <div className="mojo">
      <Helmet
        htmlAttributes={{
          lang: "fr",
        }}
      >
        <title>{languageToUse.mojoTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescriptionMojo} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={`${intakeInfo.domainName}/mojo`} />
      </Helmet>
      <div className="header-placeholder" />
      <div className="hero-3">
        <Link to="/">
          <img
            src={logoHero}
            alt="logo"
            className="mojo-hero-logo"
            onClick={() => setPathname("/")}
          />
        </Link>
      </div>
      <h1 className="mojo-title">{languageToUse.mojoTitle}</h1>
      <div className="mojo-icons">
        <div className="mojo-icon">
          <img src={mojoIcon1} alt="" />
          <h2>{languageToUse.mojoIcon1}</h2>
          <p>{languageToUse.mojoExplanation1}</p>
        </div>
        <div className="mojo-icon">
          <img src={mojoIcon2} alt="" />
          <h2>{languageToUse.mojoIcon2}</h2>
          <p>{languageToUse.mojoExplanation2}</p>
        </div>
        <div className="mojo-icon">
          <img src={mojoIcon3} alt="" />
          <h2>{languageToUse.mojoIcon3}</h2>
          <p>{languageToUse.mojoExplanation3}</p>
        </div>
        <div className="mojo-icon">
          <img src={mojoIcon4} alt="" />
          <h2>{languageToUse.mojoIcon4}</h2>
          <p>{languageToUse.mojoExplanation4}</p>
        </div>
      </div>
      <div className="mojo-text">
        <div>
          <p className="mojoP1">{languageToUse.mojoP1}</p>
          <p className="mojoP2">{languageToUse.mojoP2}</p>
          <p className="mojoP3">{languageToUse.mojoP3}</p>
          <p className="mojoP4">{languageToUse.mojoP4}</p>
        </div>
        <img src={mojoIntroImage} className="mojo-text-image" />
      </div>
      <h3 className="bootfitting-under-title">
        {languageToUse.mojoUnderTitle}
      </h3>
    </div>
  );
};

BootfittingPage.Layout = Layout;
export default BootfittingPage;
