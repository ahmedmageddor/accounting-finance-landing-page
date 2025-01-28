import { useEffect, useMemo } from "react";

const useFaqToggle = () => {
  const faqItems = useMemo(() => document.querySelectorAll(".faq-item"), []);

  useEffect(() => {
    const handleFaqToggle = (item) => {
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0px";
      }
    };

    const handleClick = (event) => {
      const item = event.currentTarget;
      handleFaqToggle(item);
    };

    faqItems.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    return () => {
      faqItems.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, [faqItems]);
};

export default useFaqToggle;
