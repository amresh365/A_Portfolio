import React from "react";
import pdf from "../pdf/Resume.pdf";
const Home = () => {
  return (
    <div className="introcontainer ">
      {" "}
      <div className="intro text-light">
        <h3 className="intro-animate">
          {"                          "}
          Hi! 🙋‍♂
          <br />
          WELCOME FROM AMRESH GUPTA
        </h3>
        <a href={pdf} download="resume.pdf" className="download">
          Download Resume
        </a>
      </div>
      {/* <div className="image">
        <img src="/myphoto2.jpg" className="myimg" />
      </div> */}
    </div>
  );
};

export default Home;
