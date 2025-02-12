import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import background from "../assets/22.jpg";

const HeroContainer = styled.section`
  position: relative;
  z-index: 0;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  color: #fbcd37;
  background: url(${background}) no-repeat center center/cover;
  font-family: "LogoFont", sans-serif;

  @media (max-width: 768px) {
    background-position: top;
    background-size: cover;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(22, 22, 22, 0.7);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3em;
  font-weight: bold;
  margin: 0.5em 0;
  color: #fbcd37;
  font-family: "LogoFont", sans-serif;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const HeroText = styled.p`
  font-size: 1.6em;
  margin-bottom: 1em;
  color: #fff;
  font-family: "LogoFont", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6em;
  }
`;

const HeroButton = styled.button`
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
  font-family: "LogoFont", sans-serif;

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

const MainHero = () => {
  const [showFirstTitle, setShowFirstTitle] = useState(true);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setShowFirstTitle((prev) => !prev);
    }, 2500);

    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTitle
          key={showFirstTitle ? "first" : "second"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {showFirstTitle
            ? "Focus on Growing Your Business"
            : "While We Handle the Numbers."}
        </HeroTitle>
        <HeroText>
          Empowering startups, small and e-commerce businesses with tailored
          financial solutions
        </HeroText>
        <HeroButton
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          aria-label="Contact Us"
        >
          BOOK NOW
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default MainHero;
