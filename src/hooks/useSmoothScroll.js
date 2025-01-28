import { useEffect, useMemo } from "react";

const useSmoothScroll = () => {
  const anchors = useMemo(() => document.querySelectorAll(".menu__link"), []);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, [anchors]);
};

export default useSmoothScroll;
