/** @format */

import image from "../assets/about-avatar.png";

export default function About() {
  return (
    <div className="page-section">
      <div className="page-layout">
        <div className="about-bento">
          <img
            src={image}
            className="about-avatar"
          />
          <div className="about-text">
            <h1>👋Hey There!</h1>
            <p>
              My name is Anna and I'm a UX Designer with 3 years of experience
              ... and currently on a sidequest to learn how to code! This year I
              want to take my skills to the next level and combine my design
              expertise with more advanced technical proficiency to craft
              holistic digital experiences.
              <br></br>
              <br></br>
              I built this site entirely from scratch, embracing the
              opportunity to enhance my front-end development skills. Take a look around and thanks for stopping by!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
