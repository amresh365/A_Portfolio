import React from "react";
import pdf from "../pdf/Resume.pdf";
const Home = () => {
  return (
    <div className="introcontainer ">
      <div className="intro text-light">
        <p className="intro-animate">
          {"                          "}
          Hi! 🙋‍♂
          <br />
          Great to See You!
        </p>
      </div>
      <div className="resume">
        <a href={pdf} download="resume.pdf" className="download">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
