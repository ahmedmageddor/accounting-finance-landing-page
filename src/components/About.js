import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import aboutData from "../data/aboutData";
import teamImage from "../assets/team.jpg";

const AboutSection = styled.section`
  padding: 4em 2em;
  background: black;
  color: #fbcd37;
  text-align: center;
  overflow: hidden;
  font-family: "LogoFont", sans-serif;

  @media (max-width: 768px) {
    padding: 2em 1em;
    text-align: center;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const AboutContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
  background: rgba(22, 22, 22, 1) 42%;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    padding: 1em;
  }

  @media (min-width: 769px) {
    margin: 0;
    flex: 1;
  }
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fbcd37;
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

const AboutImage = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    width: 50%;
    margin-left: 2em;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const CallToAction = styled(motion.a)`
  display: inline-block;
  margin-top: 2em;
  padding: 0.5em 1.5em; /* Smaller button size */
  background: #fbcd37;
  color: #161616;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background: #161616;
    color: #fbcd37;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
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
      { threshold: 0.1 }
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
        <AboutTitle variants={aboutVariants}>{aboutData.title}</AboutTitle>
        {aboutData.paragraphs.map((paragraph, index) => (
          <AboutText key={index} variants={aboutVariants}>
            {paragraph}
          </AboutText>
        ))}
      </AboutContent>
      <AboutImage>
        <Image src={teamImage} alt="Our Team" variants={aboutVariants} />
        <CallToAction
          href="#contact"
          variants={aboutVariants}
          aria-label="Contact Us"
        >
          Get in Touch
        </CallToAction>
      </AboutImage>
    </AboutSection>
  );
};

export default About;
