import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../styles/services.css";

import Layout from "../components/Layout";
import Hero2 from "../components/Hero2";

import Partenaires from "../components/Partenaires";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import service1Image from "../images/service1-square.jpg";
import service2Image from "../images/service2-square.jpg";
import service3Image from "../images/service3-square.jpg";
import service4Image from "../images/service4-square.jpg";

const ServicesPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.french;

  useEffect(() => {
    let width = window.innerWidth;

    window.addEventListener("scroll", scrollImages);

    let serviceImage1 = document.getElementById("service-image-1");
    let serviceImage2 = document.getElementById("service-image-2");
    let serviceImage3 = document.getElementById("service-image-3");
    let serviceImage4 = document.getElementById("service-image-4");

    let serviceText1 = document.getElementById("serviceText1");
    let serviceText2 = document.getElementById("serviceText2");
    let serviceText3 = document.getElementById("serviceText3");
    let serviceText4 = document.getElementById("serviceText4");

    if (width < 768) {
      setTimeout(() => {
        serviceImage1.classList.add("slide-from-left");
      }, 500);
    } else {
      setTimeout(() => {
        serviceImage1.classList.add("slide-from-left");
        serviceText1.classList.add("remove-margin-left");
      }, 500);
    }

    function scrollImages() {
      let positionImage2 = serviceImage2.getBoundingClientRect();
      let positionImage3 = serviceImage3.getBoundingClientRect();
      let positionImage4 = serviceImage4.getBoundingClientRect();

      let scrollY = window.innerHeight;

      if (positionImage2.y < scrollY) {
        serviceImage2.classList.add("slide-from-right");
        serviceText2.classList.add("remove-margin-right");
      }
      if (positionImage3.y < scrollY) {
        serviceImage3.classList.add("slide-from-left");
        serviceText3.classList.add("remove-margin-left");
      }
      if (positionImage4.y < scrollY) {
        serviceImage4.classList.add("slide-from-right");
        serviceText4.classList.add("remove-margin-right");
      }
    }
  });

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "fr",
        }}
      >
        <title>{languageToUse.serviceMetaTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionServices}
        />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={`${intakeInfo.domainName}/services`} />
      </Helmet>
      <div className="header-placeholder" />
      <Hero2 />
      <div className="services">
        <div className="services-container services-container-1">
          <h1 className="services-title">{languageToUse.servicesTitle}</h1>
          <div className="service service-1">
            <img
              src={service1Image}
              alt=""
              className="service-image-left"
              id="service-image-1"
            />
            <div
              className="service-text-container-right service-text-container"
              id="serviceText1"
            >
              <h3>{languageToUse.service1Title}</h3>
              <p>{languageToUse.service1Text1}</p>
              <p>
                {languageToUse.service1Text2}
                <Link to="/bootfitting">{languageToUse.service1Link}</Link>
              </p>
            </div>
          </div>
          <div className="service service-2">
            <img
              src={service2Image}
              alt=""
              className="service-image-right"
              id="service-image-2"
            />
            <div
              className="service-text-container-left service-text-container"
              id="serviceText2"
            >
              {" "}
              <h3>{languageToUse.service2Title}</h3>
              <p>{languageToUse.service2Text1}</p>
              <p>{languageToUse.service2Text2}</p>
            </div>
          </div>
        </div>

        <div className="services-container services-container-2">
          <div className="service service-1">
            <img
              src={service3Image}
              alt=""
              className="service-image-left"
              id="service-image-3"
            />
            <div
              className="service-text-container-right service-text-container"
              id="serviceText3"
            >
              {" "}
              <h3>{languageToUse.service3Title}</h3>
              <p>{languageToUse.service3Text}</p>
            </div>
          </div>
          <div className="service service-2">
            <img
              src={service4Image}
              alt=""
              className="service-image-right"
              id="service-image-4"
            />
            <div
              className="service-text-container-left service-text-container"
              id="serviceText4"
            >
              {" "}
              <h3>{languageToUse.service4Title}</h3>
              <p>{languageToUse.service4Text1}</p>
              <p>
                {languageToUse.service4Text2}
                <a
                  href="https://zenith-skishop.notresphere.com/location-materiel"
                  target="blank"
                >
                  {languageToUse.service4Link}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Partenaires />
    </div>
  );
};

ServicesPage.Layout = Layout;
export default ServicesPage;
