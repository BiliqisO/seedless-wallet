import React from "react";
import Faq from "./Faq";
import "./Seventh.css";
import { accordionData } from "./FaqData";

export const Seventh = () => {
  return (
    <div className="seventh">
      <div className="left7">
        <h1>FAQ'S</h1>
        <p>Take a look at some of the questions asked by the community.</p>
      </div>
      <div className="right7">
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Faq
              title={title}
              content={content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
