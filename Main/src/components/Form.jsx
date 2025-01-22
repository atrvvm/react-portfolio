/** @format */

import "../Form.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

/* TEMP
export default function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="validation01">
        <Form.Label>NAME</Form.Label>
        <Form.Control
          placeholder="Jane Doe"
        />
      </Form.Group>
      <Form.Group controlId="validation02">
        <Form.Label>EMAIL ADDRESS</Form.Label>
        <Form.Control
          type="email"
          placeholder="test@example.com"
        />
        <Form.Control.Feedback type="invalid">Valid email address required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="validation03">
        <Form.Label>MESSAGE</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="(Optional)"
        />
      </Form.Group>
      <button type="submit">Submit</button>
    </Form>
  );
} */

/* TEMP
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!name.trim()) {
      setNameError("‼️FULL NAME REQUIRED");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("‼️EMAIL ADDRESS REQUIRED");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("‼️INVALID EMAIL FORMAT");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      console.log("Form submitted:", { name, email });
    }
  };

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="validationCustom01">
        <Form.Label>FULL NAME</Form.Label>
        <Form.Control
          type="text"
          id="name"
          value={name}
          onChange={event => {
            setName(event.target.value)
            setValidName(event.target.validity.valid)
          }}
        />
        {nameError && <p className="error">{nameError}</p>}
      </Form.Group>
      <Form.Group controlId="validationCustom02">
        <Form.Label>EMAIL ADDRESS</Form.Label>
        <Form.Control
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error">{emailError}</p>}
      </Form.Group>
      <button type="submit">Submit</button>
    </Form>
  );
} */

export default function ContactForm() {
  const [inputValue, setInputValue] = useState(" ");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(" ");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Validate input is not empty
    if (!value.trim()) {
      setError("This field is required.");
    } else {
      setError(" ");
    }
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!isEmailValid(value)) {
      setError("Invalid email format.");
    } else {
      setError("");
    }
  };

  return (
    <Form>
      <Form.Group
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        controlId="validationCustom01"
      >
        <Form.Label>NAME</Form.Label>
        <Form.Control placeholder="Jane Doe" />
        {error && <p className="error">{error}</p>}
      </Form.Group>
      <Form.Group
        type="email"
        value={email}
        onChange={handleEmailChange}
        controlId="validationCustom02"
      >
        <Form.Label>EMAIL</Form.Label>
        <Form.Control placeholder="test@example.com" />
        {error && <p className="error">{error}</p>}
      </Form.Group>
      <Form.Group controlId="validationCustom03">
        <Form.Label>MESSAGE</Form.Label>
        <Form.Control
          as="textarea"
          row={5}
          placeholder="(Optional)"
        />
      </Form.Group>
      <button type="submit">Submit</button>
    </Form>
  );
}
