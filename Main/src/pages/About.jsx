/** @format */

import image from "../assets/about-avatar.png";

const styles = {
  heading: {
    lineHeight: "0%",
    paddingBottom: "32px",
    fontSize: "2.8em",
    fontWeight: "500",
  },
  paragraph: {
    fontSize: "1.5em",
  },
  span: {
    fontWeight: "800",
    color: "#315659",
  },
};

export default function About() {
  return (
    <div className="page-section">
      <div className="page-layout">
        <div className="bento">
          <img
            src={image}
            className="about-avatar"
          />
          <div>
            <h1 style={styles.heading}>Hi, I'm Anna🧋</h1>
            <p style={styles.paragraph}>
              In my past life, I was a Registered Nurse but for the last 3 years
              UX Design has been my trade. <br></br> <br></br>
              Adding to my artillery, I am currently {" "}
              <span style={styles.span}> {"<learning how to code>"}</span> which
              has really given me a new breadth of knowledge and has improved my
              approaches to creating scalable designs.
              <br></br>
              <br></br>I built this site entirely from scratch, which has been a great
              opportunity to enhance my front-end development skills. Feel free to look around!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
