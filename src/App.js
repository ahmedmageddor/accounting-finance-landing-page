// src/App.js
import React from "react";
import Header from "./components/Header";
import MainHero from "./components/MainHero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Faq from "./components/Faq";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles";
import useLazyLoadImages from "./hooks/useLazyLoadImages";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useActiveClassOnScroll from "./hooks/useActiveClassOnScroll";
import useMobileMenuToggle from "./hooks/useMobileMenuToggle";
import useFaqToggle from "./hooks/useFaqToggle";

function App() {
  useLazyLoadImages();
  useSmoothScroll();
  useActiveClassOnScroll();
  useMobileMenuToggle();
  useFaqToggle();

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <MainHero />
        <About />
        <Services />
        <WhyChooseUs />
        <Faq />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
