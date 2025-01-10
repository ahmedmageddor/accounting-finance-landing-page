// Header.js
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png"; // Adjust the path as needed

const darkTheme = {
  background: "#161616",
  color: "#F7F7F7",
  logo: "#FBCD37",
  shadow: "rgba(0, 0, 0, 0.3)",
};

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.background};
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 1em 2em;
  text-align: center;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled(motion.img)`
  height: 35px; /* Adjusted height */
`;

const MenuToggle = styled.button`
  display: none;
  font-size: 2em;
  color: ${({ theme }) => theme.logo};
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    background: ${({ theme }) => theme.background};
    padding: 1em 0;
  }
`;

const NavbarItem = styled.li`
  margin: 0 1.5em;

  @media (max-width: 768px) {
    margin: 1em 0;
  }
`;

const NavbarLink = styled.a`
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.logo};
  padding: 0.5em 1em;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
  scroll-behavior: smooth;

  &:hover {
    background: ${({ theme }) => theme.logo};
    color: ${({ theme }) => theme.color};
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoControls = useAnimation();

  useEffect(() => {
    const animateLogo = () => {
      logoControls
        .start({ scale: 1.1, rotate: 5 })
        .then(() => logoControls.start({ scale: 1, rotate: 0 }));
    };

    const intervalId = setInterval(animateLogo, 4000);

    return () => clearInterval(intervalId);
  }, [logoControls]);

  return (
    <ThemeProvider theme={darkTheme}>
      <HeaderContainer>
        <Navbar
          as={motion.div}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoContainer href="#home">
            <LogoImage
              src={logo}
              alt="Logo"
              animate={logoControls}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </LogoContainer>
          <MenuToggle onClick={toggleMenu} aria-label="Toggle menu">
            <FaBars />
          </MenuToggle>
          <NavbarMenu $isOpen={isOpen} role="menu" aria-hidden={!isOpen}>
            <NavbarItem>
              <NavbarLink href="#home">Home</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#about">About Us</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#services">Services</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#contact">Contact</NavbarLink>
            </NavbarItem>
          </NavbarMenu>
        </Navbar>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
