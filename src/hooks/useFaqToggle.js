import { useEffect } from "react";

const useFaqToggle = () => {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-item");

    const handleFaqToggle = (item) => {
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0px";
      }
    };

    faqItems.forEach((item) => {
      item.addEventListener("click", () => handleFaqToggle(item));
    });

    return () => {
      faqItems.forEach((item) => {
        item.removeEventListener("click", () => handleFaqToggle(item));
      });
    };
  }, []);
};

export default useFaqToggle;
