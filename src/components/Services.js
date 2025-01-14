// Services.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import {
  FaChartLine,
  FaCalculator,
  FaBook,
  FaFileAlt,
  FaChartBar,
} from "react-icons/fa";

const ServicesSection = styled.section`
  padding: 4em 2em;
  background-color: #268f5b; /* Solid background color matching the theme */
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

const ServicesContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fff;
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
  gap: 1em; /* Reduced gap for smaller items */
`;

const ServiceItem = styled(motion.div)`
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

const ServiceIcon = styled(motion.div)`
  font-size: 2.5em; /* Reduced icon size */
  color: #fbcd37;
  margin-bottom: 0.5em;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2em; /* Reduced title size */
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1em; /* Reduced description size */
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
            <ServiceIcon>
              <FaChartLine />
            </ServiceIcon>
            <ServiceTitle>Financial Modeling & Budgeting</ServiceTitle>
            <ServiceDescription>
              Unlock the potential of your business with predictive insights!
              helping you visualize future scenarios and navigate challenges.
              From growth projections to risk management, we simplify your
              financial future.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem variants={serviceVariants}>
            <ServiceIcon>
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
            <ServiceIcon>
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
            <ServiceIcon>
              <FaFileAlt />
            </ServiceIcon>
            <ServiceTitle>Additional Reporting Support</ServiceTitle>
            <ServiceDescription>
              Need temporary assistance with requests from banks, investors, or
              regulatory bodies? We’re here to help you manage these reporting
              demands, freeing up your time to focus on daily operations.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem variants={serviceVariants}>
            <ServiceIcon>
              <FaChartBar />
            </ServiceIcon>
            <ServiceTitle>Financial Planning and Analysis</ServiceTitle>
            <ServiceDescription>
              Worried about your long-term vision? We assist you in crafting and
              refining your financial plan, generating insightful management
              reports, and analyzing trends in cash flow. With our support,
              answering "Where do you see yourself in five years?" becomes a
              strategic conversation.
            </ServiceDescription>
          </ServiceItem>
        </ServicesGrid>
      </ServicesContent>
    </ServicesSection>
  );
};

export default Services;
