// Contact.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = styled.section`
  padding: 4em 2em;
  background-color: #161616;
  color: #fbcd37;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: "LogoFont", sans-serif;

  @media (max-width: 768px) {
    padding: 2em 1em;
  }
`;

const ContactContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const ContactGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const ContactItem = styled(motion.div)`
  width: 100%;
  padding: 1.5em;
  background-color: rgba(22, 22, 22, 0.8);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Open Sans", sans-serif;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 1em;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const ContactIcon = styled(motion.div)`
  font-size: 2.5em;
  color: #fbcd37;
  margin-bottom: 0.5em;
`;

const ContactText = styled.p`
  font-size: 1.2em;
  color: #fff;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-top: 2em;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EmailInput = styled.input`
  padding: 0.8em;
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const ContactButton = styled(motion.button)`
  font-size: 1.2em;
  font-weight: bold;
  color: #161616;
  background: #fbcd37;
  padding: 0.8em 2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;
  font-family: "Open Sans", sans-serif;

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

  @media (min-width: 768px) {
    width: auto;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Contact = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  return (
    <ContactSection id="contact" ref={sectionRef}>
      <ContactContent
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <ContactTitle variants={contactVariants}>Contact Us</ContactTitle>
        <ContactGrid>
          <ContactItem variants={contactVariants}>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactText>+1 234 567 890</ContactText>
          </ContactItem>
          <ContactItem variants={contactVariants}>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>info@finmodelx.com</ContactText>
          </ContactItem>
          <ContactItem variants={contactVariants}>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>123 Finance Street, City, Country</ContactText>
          </ContactItem>
        </ContactGrid>
        <InputWrapper>
          <EmailInput type="email" placeholder="Enter your email" />
          <ContactButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Stay in the loop"
          >
            Stay in the loop
          </ContactButton>
        </InputWrapper>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
