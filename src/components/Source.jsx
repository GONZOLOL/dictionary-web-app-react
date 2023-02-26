import React from "react";
import {ReactComponent as NewWindowIcon} from "../../starter_files/images/icon-new-window.svg"

export const Source =  ({ result }) => {
    return (
      <div className="sourceContainer">
        <span className="sourceWord">Source</span>
        <div className="source">
          <span>
            <a href={result.sourceUrls[0]} target="_blank" rel="noreferrer">
              {result.sourceUrls[0]}
            </a>
          </span>
          <NewWindowIcon />
        </div>
      </div>
    );
  };