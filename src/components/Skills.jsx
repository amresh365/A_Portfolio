import React from "react";

const Skills = () => {
  return (
    <div className="container text-center my-3">
      <h1 className="text-light headings">Skills</h1>
      <div className=" container devlopment col-sm-3 col-md-4 col-lg-8">
        <div className="row align-items-center">
          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src="src/assets/html.png"
                className="card-img-top bg-light
                "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src="src/assets/css.png"
                className="card-img-top bg-light"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src="src/assets/javaScript.jpeg"
                className="card-img-top jsimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src="src/assets/reactLogo.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">React</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center my-3">
          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src="src/assets/redux.webp "
                className="card-img-top reduxImg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Redux</h5>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card text-light bg-dark">
              <img
                src="src/assets/nodejs.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Node JS</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src="src/assets/express.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">ExpessJs</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src="src/assets/mongodb.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">MongoDB</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
