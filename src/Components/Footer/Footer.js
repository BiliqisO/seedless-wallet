import React from "react";
import "./Footer.css";
import gitimg from "./github.svg";
import emailimg from "./email.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-left">
          {" "}
          <h1>Never lose access to your Wallet again</h1>{" "}
        </div>
        <ul className="top-right">
          <li>
            {" "}
            <a href="">
              <img
                src={gitimg}
                alt="gitimg"
              />{" "}
              View our GitHub Repo
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <img
                src={emailimg}
                alt="emailimg"
              />
              Seedlesssupport@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul className="uli">
          <li>HOW IT WORKS</li>
          <li>FAQ’s</li>
          <li>ABOUT</li>
        </ul>
        <p>C 2023</p>
      </div>
    </div>
  );
};
