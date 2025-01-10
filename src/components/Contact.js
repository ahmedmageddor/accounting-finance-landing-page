// Contact.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = styled.section`
  padding: 4em 2em;
  background-color: #161616; /* Solid background color matching the theme */
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
    background: rgba(0, 0, 0, 0.5); /* Adds a dark overlay for modern look */
    z-index: 1;
  }

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
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em; /* Reduced gap for smaller items */
`;

const ContactItem = styled(motion.div)`
  flex: 1 1 250px; /* Reduced size for smaller items */
  padding: 1.5em; /* Reduced padding */
  background-color: rgba(22, 22, 22, 0.8); /* Matches the dark theme color */
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Open Sans", sans-serif;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const ContactIcon = styled(motion.div)`
  font-size: 2.5em; /* Adjusted icon size */
  color: #fbcd37;
  margin-bottom: 0.5em;
`;

const ContactText = styled.p`
  font-size: 1em; /* Adjusted description size */
  color: #fff;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5 /* Adjusted stagger effect */,
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
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.5 }
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
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
