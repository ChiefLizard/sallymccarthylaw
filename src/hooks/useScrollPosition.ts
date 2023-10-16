import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const hasWindow = typeof window !== "undefined";
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasWindow]);

  return scrollPosition;
}
