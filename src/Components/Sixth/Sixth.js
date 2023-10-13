import React from "react";
import asset from "./Asset.png";
import "animate.css";
import "./Sixth.css";

export const Sixth = () => {
  return (
    <div className="sixth ">
      <div className="lefts leftf">
        <h1>Recover your account easily.</h1>
        <p>
          If you ever lose access to your auth code, you can answer those
          questions
        </p>
        <button>VIEW GITHUB</button>
      </div>
      <div className="rights">
        <img src={asset} />
      </div>
    </div>
  );
};
