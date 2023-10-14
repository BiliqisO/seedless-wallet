import React from "react";
import auth from "./Auth Code 21.png";
import "./Fourth.css";

export const Fourth = () => {
  return (
    <div className="third fourth">
      <div className="rightt">
        <h5 className="purple">STEP 2</h5>
        <h1>Code Creation.</h1>
        <p>
          A 12-digit code will be created based on the answers to the questions
          you provided earlier.
        </p>
      </div>
      <div className="leftt">
        <div className="circle">
          <div className="wallet-page">
            <div className="walletpage">
              <img
                src={auth}
                className="auth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
