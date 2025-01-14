// FAQ.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = styled.section`
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

const FAQContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQTitle = styled(motion.h2)`
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const FAQItem = styled(motion.div)`
  background-color: rgba(22, 22, 22, 0.8);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
  padding: 1em;
  cursor: pointer;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const FAQAnswer = styled(motion.div)`
  font-size: 1em;
  color: #fff;
  margin-top: 0.5em;
  line-height: 1.4;
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

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const FAQ = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

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

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq" ref={sectionRef}>
      <FAQContent
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <FAQTitle variants={faqItemVariants}>
          Frequently Asked Questions
        </FAQTitle>
        {[
          // Example questions and answers
          {
            question: "What services do you offer?",
            answer:
              "We offer a range of financial services including financial planning, accounting & bookkeeping, tax services, financial modeling & budgeting, financial statements, and financial planning and analysis.",
          },
          {
            question: "How can I contact you?",
            answer:
              "You can contact us through our website contact form, by email, or by phone. Our contact details are available on the Contact Us page.",
          },
          {
            question: "What is your pricing structure?",
            answer:
              "Our pricing is tailored to the specific needs of each client. We offer competitive rates and personalized service packages to ensure you get the best value for your investment.",
          },
          {
            question: "Do you offer free consultations?",
            answer:
              "Yes, we offer free initial consultations to understand your needs and how we can help you achieve your financial goals.",
          },
        ].map((faq, index) => (
          <FAQItem
            key={index}
            onClick={() => toggleFAQ(index)}
            variants={faqItemVariants}
          >
            <FAQQuestion>
              {faq.question}
              {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </FAQQuestion>
            {expandedIndex === index && (
              <FAQAnswer
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                {faq.answer}
              </FAQAnswer>
            )}
          </FAQItem>
        ))}
      </FAQContent>
    </FAQSection>
  );
};

export default FAQ;
