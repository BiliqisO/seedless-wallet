import React from "react";
import "./SecuritySetUp.css";
import img1 from "./Action.png";
import img2 from "./Action (1).png";

export const SecuritySetUp = () => {
  return (
    <div className="walletpage">
      <h1
        className="security
      "
      >
        Security
        <span className="purple"> Setup 3 </span>
      </h1>
      <p>
        Enhance wallet security with a unique, personalized seed phrase.
        Safeguard your account; if it's ever lost, you can restore it using this
        distinctive passphrase
      </p>
      <div className="sec-img">
        <img src={img1} />
      </div>
      <div className="sec-img">
        <img src={img2} />
      </div>
    </div>
  );
};
