import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const useReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const options = {
      root: null,
      threshold: 0.15,
    };

    const callback = (entries) => {
      const ent = entries[0];
      console.log(ent.isIntersecting);

      if (ent.isIntersecting) {
        setIsRevealed(true);
      } else setIsRevealed(false);
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return { isRevealed, targetRef };
};

export default useReveal;
