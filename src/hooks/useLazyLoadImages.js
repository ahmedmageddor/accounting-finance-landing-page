import { useEffect, useRef } from "react";

const useLazyLoadImages = () => {
  const throttleTimeout = useRef(null);

  useEffect(() => {
    const lazyImages = document.querySelectorAll("img.lazy");

    const loadImages = (image) => {
      image.src = image.dataset.src;
      image.classList.remove("lazy");
    };

    const lazyLoad = () => {
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }

      throttleTimeout.current = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        lazyImages.forEach((img) => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            loadImages(img);
          }
        });

        if (lazyImages.length === 0) {
          removeListeners();
        }
      }, 20);
    };

    const removeListeners = () => {
      document.removeEventListener("scroll", lazyLoad);
      window.removeEventListener("resize", lazyLoad);
      window.removeEventListener("orientationchange", lazyLoad);
    };

    if ("IntersectionObserver" in window) {
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImages(entry.target);
            lazyImageObserver.unobserve(entry.target);
          }
        });
      });

      lazyImages.forEach((img) => lazyImageObserver.observe(img));

      return () => lazyImageObserver.disconnect();
    } else {
      document.addEventListener("scroll", lazyLoad);
      window.addEventListener("resize", lazyLoad);
      window.addEventListener("orientationchange", lazyLoad);

      return removeListeners;
    }
  }, []);
};

export default useLazyLoadImages;
