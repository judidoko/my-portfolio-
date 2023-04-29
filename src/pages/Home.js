import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Jude Idoko </h2>
        <div className="prompt">
          <p>
            A frontend developer with passion for learning and Creating
            beautiful user interface
          </p>
          <GithubIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <div className="skill">
              <span>HTML & CSS,</span>
              <span>Boostrap,</span>
              <span>JavaScript,</span>
              <span>React.js, &</span>
              <span>Redux</span>
            </div>
          </li>
          <li className="item">
            <h2>Language</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
