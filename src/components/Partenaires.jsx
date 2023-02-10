import React from "react";

import { content } from "../content/languages";

import "../styles/Partenaires.css";

const Partenaires = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="partenaires">
      <h4>{languageToUse.partners}</h4>
      <ul>
        <li>
          <span>{languageToUse.siteValThorens}: </span>
          <a
            href="https://www.valthorens.com/"
            target="blank"
            className="partner-link"
          >
            www.valthorens.com
          </a>
        </li>
        {/* <li>
          <span>{languageToUse.logementParticulier}: </span>
          <a href="https://www.valthorens-location.com">
            www.valthorens-location.com
          </a>
          ,{" "}
          <a href="https://www.locations-valthorens.fr.gd">
            www.locations-valthorens.fr.gd
          </a>
        </li> */}
        <li>
          <span>{languageToUse.logementAgence}: </span>
          <a
            href="https://www.immobilier-valthorens.fr/"
            target="blank"
            className="partner-link"
          >
            www.immobilier-valthorens.fr
          </a>
          ,{" "}
          <a
            href="https://www.agencelacime.com/"
            target="blank"
            className="partner-link"
          >
            www.agencelacime.com
          </a>
          ,{" "}
          <a
            href="https://www.alpineimmo.com/"
            target="blank"
            className="partner-link"
          >
            www.alpineimmo.com
          </a>
        </li>
        <li>
          <span> {languageToUse.coursSki}: </span>
          <a
            href="https://www.ski-cool.com/"
            target="blank"
            className="partner-link"
          >
            www.ski-cool.com
          </a>
        </li>

        <li>
          <span> {languageToUse.valthoFromSky}: </span>
          <a
            href="https://www.libre-envol.com/"
            target="blank"
            className="partner-link"
          >
            www.libre-envol.com
          </a>
        </li>
        <li>
          <span> {languageToUse.savoie}: </span>
          <a
            href="https://www.france-voyage.com/"
            target="blank"
            className="partner-link"
          >
            www.france-voyage.com
          </a>
        </li>
        <li>
          <span> {languageToUse.pasChere}: </span>
          <a
            href="https://www.montagnepascher.com/"
            target="blank"
            className="partner-link"
          >
            www.montagnepascher.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Partenaires;
