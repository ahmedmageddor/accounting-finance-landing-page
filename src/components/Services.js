import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaChartLine, FaCalculator, FaBook, FaFileAlt } from "react-icons/fa";

const ServicesSection = styled.section`
  padding: 4em 2em;
  background: rgba(38, 143, 91, 1) 0%;
  color: #fbcd37;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: "LogoFont", sans-serif;

  @media (max-width: 768px) {
    padding: 2em 1em;
  }
`;

const ServicesContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fbcd37;
  font-weight: bold;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const ServicesGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
`;

const ServiceItem = styled(motion.div)`
  flex: 1 1 250px;
  padding: 1.5em;
  background: rgba(22, 22, 22, 1) 42%;
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

const ServiceIcon = styled(motion.div)`
  font-size: 2.5em;
  color: #fbcd37;
  margin-bottom: 0.5em;

  &:hover {
    color: #fff;
    transform: scale(1.2);
    transition: transform 0.3s, color 0.3s;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.2em;
  color: #fbcd37;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1em;
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
      staggerChildren: 0.5,
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Services = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY && entry.isIntersecting) {
            controls.start("visible");
          }

          lastScrollY = currentScrollY;
        });
      },
      { threshold: 0.2 }
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
    <ServicesSection id="services" ref={sectionRef}>
      <ServicesContent
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <ServicesTitle variants={serviceVariants}>What We Do</ServicesTitle>
        <ServicesGrid>
          <ServiceItem variants={serviceVariants}>
            <ServiceIcon whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
              <FaCalculator />
            </ServiceIcon>
            <ServiceTitle>Accounting & Bookkeeping</ServiceTitle>
            <ServiceDescription>
              Customized accounting solutions designed to meet your current and
              future needs. Gain clarity and confidence in your financial data,
              enabling informed decisions that drive growth.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem variants={serviceVariants}>
            <ServiceIcon whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
              <FaBook />
            </ServiceIcon>
            <ServiceTitle>Financial Statements</ServiceTitle>
            <ServiceDescription>
              Understand the story behind your financial statements! Clarifying
              balance sheets and income statements, empowering you to make
              informed decisions that lead to financial success.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem variants={serviceVariants}>
            <ServiceIcon whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
              <FaChartLine />
            </ServiceIcon>
            <ServiceTitle>Financial Modeling & Budgeting</ServiceTitle>
            <ServiceDescription>
              Unlock the potential of your business with predictive insights!
              Helping you visualize future scenarios and navigate challenges.
              From growth projections to risk management, we simplify your
              financial future.
            </ServiceDescription>
          </ServiceItem>

          <ServiceItem variants={serviceVariants}>
            <ServiceIcon whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
              <FaFileAlt />
            </ServiceIcon>
            <ServiceTitle>Additional Reporting Support</ServiceTitle>
            <ServiceDescription>
              Our reporting support service would help you manage requests from
              banks, investors, or regulatory authorities. We handle your
              reporting needs efficiently, giving you more time to focus on
              growing your business.
            </ServiceDescription>
          </ServiceItem>
        </ServicesGrid>
      </ServicesContent>
    </ServicesSection>
  );
};

export default Services;
