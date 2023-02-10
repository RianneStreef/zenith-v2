import React from "react";
import { content } from "../content/languages";

import "../styles/Explanation.css";

const Explanation = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="explanation">
      <h2 className="intro-title">{languageToUse.explanationTitle}</h2>
      <p>
        <span className="explanation-text">
          {languageToUse.explanationText1}
        </span>
        <span className="explanation-text bold">
          {languageToUse.explanationText2}
        </span>
        <span className="explanation-text">
          {languageToUse.explanationText3}
        </span>
      </p>
      <p>
        <span className="explanation-text">
          {languageToUse.explanationText4}
        </span>
        <span className="explanation-text bold">
          {languageToUse.explanationText5}
        </span>
      </p>
      <p>
        <span className="explanation-text">
          {languageToUse.explanationText6}
        </span>
      </p>
      {/* <div className="header-placeholder" /> */}
    </div>
  );
};

export default Explanation;
