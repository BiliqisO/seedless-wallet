import React from "react";
import walletimg from "./Property 1=credit card front.png";
import "./WalletPage.css";

export const WalletPage = () => {
  return (
    <div className="walletpage  ">
      <h1>
        <span className="purple">Welcome to </span>Seedless Wallet
      </h1>
          <img
              className="walletimg"
        src={walletimg}
        alt="wallet-imge"
      />
      <p>
        Welcome to Seedless wallet where you can easily store all your
        cryptocurrency assets securely.
      </p>
      <button>GET STARTED</button>
      <hr />
    </div>
  );
};
