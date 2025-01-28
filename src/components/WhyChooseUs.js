import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaCheckCircle, FaHandshake, FaStar, FaUsers } from "react-icons/fa";

const WhyChooseUsSection = styled.section`
  padding: 4em 2em;
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 1) 42%,
    rgba(38, 143, 91, 1) 94%
  );
  color: #fbcd37;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: "LogoFont", sans-serif;

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
  color: #fbcd37;
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
  gap: 1em;
`;

const BenefitItem = styled(motion.div)`
  flex: 1 1 250px;
  padding: 1.5em;
  background: linear-gradient(
    180deg,
    rgba(38, 143, 91, 1) 0%,
    rgba(22, 22, 22, 1) 62%
  );
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
  font-size: 2.5em;
  color: #fbcd37;
  margin-bottom: 0.5em;
`;

const BenefitTitle = styled.h3`
  font-size: 1.2em;
  color: #fbcd37;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const BenefitDescription = styled.p`
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
            <BenefitIcon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaCheckCircle />
            </BenefitIcon>
            <BenefitTitle>Affordable Expertise</BenefitTitle>
            <BenefitDescription>
              Access professional accounting services without hidden fees.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem variants={benefitVariants}>
            <BenefitIcon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaHandshake />
            </BenefitIcon>
            <BenefitTitle>Extensive Experience</BenefitTitle>
            <BenefitDescription>
              Benefit from our years of expertise in accounting and finance,
              focusing on startups.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem variants={benefitVariants}>
            <BenefitIcon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaStar />
            </BenefitIcon>
            <BenefitTitle>Focus on Your Business</BenefitTitle>
            <BenefitDescription>
              You manage your operations; we’ll handle your accounting.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem variants={benefitVariants}>
            <BenefitIcon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
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
