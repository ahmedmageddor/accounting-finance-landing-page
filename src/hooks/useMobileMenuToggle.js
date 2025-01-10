import { useEffect } from "react";

const useMobileMenuToggle = () => {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarRight = document.querySelector(".navbar__right");

    if (menuToggle && navbarRight) {
      const handleToggle = () => {
        navbarRight.classList.toggle("active");
        menuToggle.classList.toggle("active");
      };

      const handleClick = (event) => {
        if (event.target.tagName === "A") {
          navbarRight.classList.remove("active");
          menuToggle.classList.remove("active");
        }
      };

      menuToggle.addEventListener("click", handleToggle);
      navbarRight.addEventListener("click", handleClick);

      // Cleanup function to remove event listeners
      return () => {
        menuToggle.removeEventListener("click", handleToggle);
        navbarRight.removeEventListener("click", handleClick);
      };
    }
  }, []);
};

export default useMobileMenuToggle;
