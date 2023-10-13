import React from "react";
import "./Second.css";

export const Second = () => {
  return (
    <div className="second">
      <h1>
        How Does It
        <span className="purple"> Work? </span>
      </h1>
      <p>
        The seedless seed phrase will be personalized by asking the user
        questions about themselves and based on those questions, a 12 seed
        phrase or a 12-digit authentication code will be created
      </p>
      {/* <div className="switch"> */}
      <ul className="auth">
        <li>Auth Code</li>
        <li>Social Recovery</li>
      </ul>
      {/* </div> */}
    </div>
  );
};
