// WhyChooseUs.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaCheckCircle, FaHandshake, FaStar, FaUsers } from "react-icons/fa";

const WhyChooseUsSection = styled.section`
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

const WhyChooseUsContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const WhyChooseUsTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const BenefitsGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em; /* Reduced gap for smaller items */
`;

const BenefitItem = styled(motion.div)`
  flex: 1 1 250px; /* Reduced size for smaller items */
  padding: 1.5em; /* Reduced padding */
  background-color: rgba(22, 22, 22, 0.8); /* Matches the dark theme color */
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 1.1);
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

const BenefitIcon = styled(motion.div)`
  font-size: 2.5em; /* Reduced icon size */
  color: #fbcd37;
  margin-bottom: 0.5em;
`;

const BenefitTitle = styled.h3`
  font-size: 1.2em; /* Reduced title size */
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const BenefitDescription = styled.p`
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

const benefitVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const WhyChooseUs = () => {
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
    <WhyChooseUsSection id="whychooseus" ref={sectionRef}>
      <WhyChooseUsContent
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <WhyChooseUsTitle variants={benefitVariants}>
          Why Choose Us
        </WhyChooseUsTitle>
        <BenefitsGrid>
          <BenefitItem variants={benefitVariants}>
            <BenefitIcon>
              <FaCheckCircle />
            </BenefitIcon>
            <BenefitTitle>Affordable Expertise</BenefitTitle>
            <BenefitDescription>
              Access professional accounting services without hidden fees.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem variants={benefitVariants}>
            <BenefitIcon>
              <FaHandshake />
            </BenefitIcon>
            <BenefitTitle>Extensive Experience</BenefitTitle>
            <BenefitDescription>
              Benefit from our years of expertise in accounting and finance,
              focusing on startups.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem variants={benefitVariants}>
            <BenefitIcon>
              <FaStar />
            </BenefitIcon>
            <BenefitTitle>Focus on Your Business</BenefitTitle>
            <BenefitDescription>
              You manage your operations; we’ll handle your accounting.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem variants={benefitVariants}>
            <BenefitIcon>
              <FaUsers />
            </BenefitIcon>
            <BenefitTitle>Precision and Reliability</BenefitTitle>
            <BenefitDescription>
              Count on our attention to detail and thorough validation processes
              for trustworthy financial forecasts.
            </BenefitDescription>
          </BenefitItem>
        </BenefitsGrid>
      </WhyChooseUsContent>
    </WhyChooseUsSection>
  );
};

export default WhyChooseUs;
