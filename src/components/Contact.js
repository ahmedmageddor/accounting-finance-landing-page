import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactSection = styled.section`
  padding: 4em 2em;
  background: black;
  color: #fbcd37;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: "LogoFont", sans-serif;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2em 1em;
  }
`;

const ContactContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 400px;
  margin: 0 auto;
  padding: 2em;
  background: rgba(22, 22, 22, 1) 42%;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fbcd37;
  font-weight: bold;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Input = styled(motion.input)`
  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;

  &:focus {
    outline: none;
    border-color: #fbcd37;
    box-shadow: 0 0 5px rgba(251, 205, 55, 0.5);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #fbcd37;
    box-shadow: 0 0 5px rgba(251, 205, 55, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1em;
  background: #fbcd37;
  color: #161616;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background: #161616;
    color: #fbcd37;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <ContactTitle
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Contact Us
        </ContactTitle>
        <ContactForm
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Input
            type="text"
            placeholder="Your Name"
            required
            whileFocus={{
              borderColor: "#fbcd37",
              boxShadow: "0 0 5px rgba(251, 205, 55, 0.5)",
            }}
          />
          <Input
            type="email"
            placeholder="Your Email"
            required
            whileFocus={{
              borderColor: "#fbcd37",
              boxShadow: "0 0 5px rgba(251, 205, 55, 0.5)",
            }}
          />
          <TextArea
            rows="5"
            placeholder="Your Message"
            required
            whileFocus={{
              borderColor: "#fbcd37",
              boxShadow: "0 0 5px rgba(251, 205, 55, 0.5)",
            }}
          ></TextArea>
          <SubmitButton
            type="submit"
            whileHover={{
              scale: 1.05,
              background: "#161616",
              color: "#fbcd37",
            }}
            whileFocus={{ boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.3)" }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
