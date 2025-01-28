import { useEffect, useMemo } from "react";
import { debounce } from "lodash"; // Install lodash if not already installed

const useActiveClassOnScroll = () => {
  const sections = useMemo(() => document.querySelectorAll("section"), []);
  const navLinks = useMemo(
    () => document.querySelectorAll(".navbar__menu ul li a"),
    []
  );

  useEffect(() => {
    const handleScroll = debounce(() => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active");
        }
      });
    }, 100); // Adjust debounce delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, navLinks]);
};

export default useActiveClassOnScroll;
