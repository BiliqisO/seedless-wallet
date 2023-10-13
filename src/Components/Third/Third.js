import React from "react";
import "./Third.css";
import { SecuritySetUp } from "../SecuritySetUp/SecuritySetUp";

export const Third = () => {
  return (
    <div className="third">
      <div className="leftt">
        <div className="circle">
          <div className="wallet-page">
            <SecuritySetUp />
          </div>
        </div>
      </div>
      <div className="rightt">
        <h5 className="purple">STEP 1</h5>
        <h1>Answer a few questions.</h1>
        <p>
          Answer questions about yourself that nobody can know the answers to,
          except you.
        </p>
      </div>
    </div>
  );
};
