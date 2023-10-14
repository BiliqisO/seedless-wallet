import React from "react";
import "./Fifth.css";
import "animate.css";
import code from "./Auth Code 7.png";

export const Fifth = () => {
  return (
    <div className="third fourth">
      <div className="leftt">
        <div className="circle animate__backInLeft">
          <div className="wallet-page">
            <div className="walletpage">
              <img
                src={code}
                className="code"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rightt">
        <h5 className="purple">STEP 3</h5>
        <h1>Recover your account easily.</h1>
        <p>
          If you ever lose access to your auth code, you can answer those same
          questions you chose initially.
        </p>
      </div>
    </div>
  );
};
