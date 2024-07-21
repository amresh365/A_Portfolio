import React from "react";

const Skills = () => {
  return (
    <div className="container text-center my-3">
      <h1 className="text-light headings">Skills</h1>
      <div className=" container devlopment col-sm-3 col-md-4 col-lg-8">
        <div className="row align-items-center">
          <div className="col">
            <div class="card bg-dark text-light">
              <img
                src="src/assets/html.png"
                class="card-img-top bg-light
                "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">HTML</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card bg-dark text-light">
              <img
                src="src/assets/css.png"
                class="card-img-top bg-light"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">CSS</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card bg-dark text-light">
              <img
                src="src/assets/javaScript.jpeg"
                class="card-img-top jsimg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card bg-dark text-light">
              <img
                src="src/assets/reactLogo.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">React</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center my-3">
          <div className="col">
            <div class="card bg-dark text-light">
              <img
                src="src/assets/redux.webp "
                class="card-img-top reduxImg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Redux</h5>
              </div>
            </div>
          </div>
          <div className="col ">
            <div class="card text-light bg-dark">
              <img
                src="src/assets/nodejs.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Node JS</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card bg-dark text-light">
              <img
                src="src/assets/express.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">ExpessJs</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card bg-dark text-light">
              <img
                src="src/assets/mongodb.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">MongoDB</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
