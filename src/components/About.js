// About.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const AboutSection = styled.section`
  padding: 4em 2em;
  background-color: #161616; /* Solid background color matching the header and main hero sections */
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

const AboutContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
  background-color: rgba(22, 22, 22, 0.8); /* Matches the dark theme color */
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.2em;
  color: #fff;
  line-height: 1.6;
  margin: 0.5em 0;

  @media (max-width: 768px) {
    font-size: 1em;
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

const aboutVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const About = () => {
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
    <AboutSection id="about" ref={sectionRef}>
      <AboutContent
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <AboutTitle variants={aboutVariants}>Who We Are</AboutTitle>
        <AboutText variants={aboutVariants}>
          At FinModelx, we believe that financial management should empower, not
          complicate. Our mission is to provide tailored financial solutions
          that cater to the unique needs of startups, small, and medium-sized
          enterprises. With a team of seasoned experts, we ensure your financial
          foundation is robust, allowing you to focus on innovation and growth.
        </AboutText>
        <AboutText variants={aboutVariants}>
          From strategic planning to day-to-day accounting, we are committed to
          delivering exceptional service and actionable insights. We value
          transparency, integrity, and collaboration, and we strive to build
          long-term partnerships with our clients, driving sustainable success
          together.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
