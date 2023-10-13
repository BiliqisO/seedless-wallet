import React from "react";
import "./First.css";
import "animate.css";
import { WalletPage } from "../WalletPage/WalletPage";

export const First = () => {
  return (
    <div className="first">
      <div className="leftf">
        <h1 className="wallet-h1">Never lose access to your Wallet again</h1>
        <p>
          Seedless wallet helps to secure your wallet in the event that you lose
          access your traditional 12 seed phrase by offering a personalization
          feature.
        </p>
        <button> DOWNLOAD SEEDLESS</button>
      </div>
      <div className="rightf animate__bounceIn ">
        <div className="circle">
          <div className="wallet-page ">
            <WalletPage />
          </div>
        </div>
      </div>
    </div>
  );
};
