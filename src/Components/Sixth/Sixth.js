import React from "react";
import asset from "./Asset.png";
import "animate.css";
import "./Sixth.css";

export const Sixth = () => {
  return (
    <div className="sixth ">
      <div className="lefts leftf">
        <h1>View Project Documentation.</h1>
        <p>
          See the official documentation and developer notes about seedless
          wallet, it’s infrastructure and how the security features are
          implemented and on github.
        </p>
        <button>VIEW GITHUB</button>
      </div>
      <div className="rights">
        <img
          src={asset}
          className="asset-img"
        />
      </div>
    </div>
  );
};
