/** @format */

import myResume from "../assets/resume-image.png";

const styles = {
  span: {
    fontWeight: "600",
  },
  heading: {
    lineHeight: "0%",
    fontSize: "1.8em",
    color: "black",
    paddingTop: "24px",
  },
  ul: {
    fontSize: "1.4em",
  },
  list: {
    marginBottom: ".8em",
    listStyleType: "square",
  },
};

export default function Resume() {
  return (
    <div className="page-wrapper">
      <div className="skills-text">
        <div className="column">
          <h1 style={styles.heading}>Technical</h1>
          <ul style={styles.ul}>
            <li style={styles.list}>
              <span style={styles.span}>Front-End:</span> HTML, CSS, JavaScript,
              TypeScript, React, Responsive Design
            </li>
            <li style={styles.list}>
              <span style={styles.span}>Back-End:</span> Intro to server-side
              developmeent, APIs
            </li>
            <li style={styles.list}>
              <span style={styles.span}>Frameworks & Libraries:</span> React,
              Angular, Express.js, Vite
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <img
          src={myResume}
          className="resume-img"
        />
      </div>
    </div>
  );
}
