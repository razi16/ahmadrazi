import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <main onClick={props.handleClick}>
      <div className="home-container animated">
        <section className="home-section">
          <h1 className="home-header" style={{ marginTop: "15%" }}>
            Hello, my name is <span className="orange">Ahmad Razi</span>
          </h1>
          <h1 className="home-h1">
            I'm a <span className="orange">fullstack web developer</span>
          </h1>
          <p className="home-p">
            I'm a student at the National Development University "Veteran"
            Jakarta majoring in information systems. My expertise is to create
            an appealing website which is responsible and accessible and
            creating a backend for a web application. I'm currently looking for
            an opportunity to do an internship as a front end, back end or
            fullstack web developer.
          </p>
          <Link to="/about">
            <button className="home-button">More about me</button>
          </Link>
        </section>
        <div className="partial-border">
          <img className="home-img" src="maimage.jpg" alt="Ahmad Razi" />
        </div>
      </div>
    </main>
  );
}

export default Home;
