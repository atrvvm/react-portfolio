/** @format */

import ContactForm from "../components/Form";

const styles = {
  heading: {
    lineHeight: "0%",
    fontSize: "1.8em",
    color: "black",
    fontWeight: "500",
    color: "#354446",
    height: "fit-content",
  },
};

export default function Contact() {
  return (
    <div className="page-wrapper">
      <div className="column-layout">
        <h1 style={styles.heading}>CONTACT</h1>
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
