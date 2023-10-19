import { useEffect, useState } from "react";

const useStickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "100px",
    };

    const callback = (entries) => {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        setIsSticky(true);
      } else setIsSticky(false);
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(document.getElementById("hero"));
  }, []);

  return { isSticky };
};

export default useStickyNavbar;
