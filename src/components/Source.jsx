import React from "react";
import {ReactComponent as NewWindowIcon} from "../../starter_files/images/icon-new-window.svg"

export const Source =  ({ result }) => {
    return (
      <div className="sourceContainer">
        <span className="sourceWord">Source</span>
        <div className="source">
            <a className="url" href={result.sourceUrls[0]} target="_blank" rel="noreferrer">
              {result.sourceUrls[0]}
            </a>
          <NewWindowIcon />
        </div>
      </div>
    );
  };