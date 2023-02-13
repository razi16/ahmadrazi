import React from "react";
import { Link } from "react-router-dom";
import PageTittle from "../components/PageTittle";
import Project from "../components/Project";

function Projects(props) {
  return (
    <main className="main-projects" onClick={props.handleClick}>
      <div className="animated">
        <PageTittle title={"Projects"} />
        <h2>My projects: </h2>
        <div className="projects-container">
          <Link to="/">
            <Project
              name={"Portofolio"}
              source={"/images/portofolio3.png"}
              alt={"portofolio"}
              description={
                "My portofolio website where i showcase myself as a front end developer and to showcase my projects that i've done so far"
              }
            />
          </Link>

          <a
            href="https://aquamarine-croissant-59048e.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <Project
              name={"Ratriq"}
              source={"/images/ratriq.png"}
              alt={"ratriq"}
              description={
                "A website where the user can play a trivial quiz. I did this projects with my team back when i was attending independent campus program at Dicoding Indonesia. In this project i did the quiz logic and the website design."
              }
            />
          </a>

          <a
            href="https://sensational-fairy-498086.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Project
              name={"MovieStash"}
              source={"/images/movie-stash.png"}
              alt={"movie-stash"}
              description={
                "A website where the user can search for movies and save them. All the movies data are fetched from themoviedb.org"
              }
            />
          </a>
        </div>
        <p className="coming-soon">More projects coming soon...</p>
      </div>
    </main>
  );
}

export default Projects;
