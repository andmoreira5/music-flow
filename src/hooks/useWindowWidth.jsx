import { useEffect } from "react";
import { useState } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState("calc(33.33% - 2rem)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setWindowWidth("calc(100% - 2rem)");
      } else if (window.innerWidth < 900) {
        setWindowWidth("calc(50% - 2rem)");
      } else {
        setWindowWidth("calc(33% - 2rem)");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}
