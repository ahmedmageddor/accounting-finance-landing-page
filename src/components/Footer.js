// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 2em;
  position: relative;
  z-index: 2;
  background: rgba(38, 143, 91, 1) 0%;

  color: #fbcd37;
  text-align: center;
  font-family: "LogoFont", sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 1em;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    gap: 0.5em;
  }
`;

const FooterLink = styled.a`
  color: #fbcd37;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const FooterText = styled.p`
  font-size: 0.9em;
  color: #fbcd37;
  margin-top: 1em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About Us</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#whychooseus">Why Choose Us</FooterLink>
          <FooterLink href="#faq">FAQ</FooterLink>
          <FooterLink href="#reviews">Reviews</FooterLink>
          <FooterLink href="#contact">Contact Us</FooterLink>
        </FooterLinks>

        <FooterText>
          © {new Date().getFullYear()} Ahmed M. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
