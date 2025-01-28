import { useEffect, useMemo } from "react";

const useMobileMenuToggle = () => {
  const menuToggle = useMemo(() => document.querySelector(".menu-toggle"), []);
  const navbarRight = useMemo(
    () => document.querySelector(".navbar__right"),
    []
  );

  useEffect(() => {
    if (!menuToggle || !navbarRight) return;

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

    return () => {
      menuToggle.removeEventListener("click", handleToggle);
      navbarRight.removeEventListener("click", handleClick);
    };
  }, [menuToggle, navbarRight]);
};

export default useMobileMenuToggle;
