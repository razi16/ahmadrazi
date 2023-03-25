import React from "react";
import { Link } from "react-router-dom";
import PageTittle from "../components/PageTittle";
/* import Date from '../../public/icons/date.png' */

function About(props) {
  return (
    <main className="main-about" onClick={props.handleClick}>
      <div className="animated">
        <PageTittle title={"About"} />
        <section className="about-section">
          <p>
            My name is Ahmad Razi, a student majoring in Information Systems
            from National Development University "Veteran" Jakarta. I have
            skills in front-end and back end web development. My strengths are
            that I can work individually or in a group and can manage my time
            well. With my skills, I believe I can build a user-friendly web
            application with wide accessibility and i can build a backend for
            web application such as user authentication, creating and using Rest
            API and implementing CRUD. In addition, I can also design UI/UX and
            design application information systems.
          </p>
        </section>
        <section className="my-details">
          <ul>
            <li>
              <b>Date of birth:</b> 16 September 2001
            </li>
            <li>
              <b>Website:</b> www.domain.com
            </li>
            <li>
              <b>Country:</b> Indonesia
            </li>
            <li>
              <b>City:</b> Jakarta
            </li>
            {/*   </ul>
        <ul > */}
            <li>
              <b>Age:</b> 21
            </li>
            <li>
              <b>Education:</b> National Development University "Veteran"
              Jakarta (2019 - now)
            </li>
            <li>
              <b>Internship/Work:</b> Available
            </li>
          </ul>
        </section>

        <Link to="/downloadables/CV-Ahmad-Razi.pdf" target="_blank" download>
          <button className="download-button">Download my CV</button>
        </Link>

        <section className="experience-and-certificate">
          <div className="experience">
            <h2>Experience</h2>
            <div className="card">
              <img
                src="/icons/date.png"
                alt="date"
                style={{ display: "inline" }}
                width="20px"
                height="20px"
              />
              <p style={{ display: "inline", marginLeft: "5px" }}>
                February - July 2022
              </p>
              <h3>Independent Campus</h3>
              <p>
                An activity that aims to encourage students to master various
                sciences that are useful for entering the world of work. In this
                activity I conducted independent study activities in the field
                of front-end and back-end web development at Dicoding Indonesia.
              </p>
            </div>
          </div>

          <div className="certificate">
            <h2>Certificate</h2>
            <div className="card">
              <h3 style={{ paddingRight: "20px" }}>
                Certificate of Completion of MSIB Batch 2 Dicoding
              </h3>
              <p>
                Have successfully completed the Front-End Web and Back-End
                Training at the Independent Study Program Certified Independent
                Campus Batch 2 2022 with Dicoding Indonesia
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
