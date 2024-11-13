import { useState, useEffect, useCallback } from "react";

type ScrollDirection = "up" | "down";

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  const [lastScrollY, setLastScrollY] = useState<number>(window.scrollY);

  const handleScroll = useCallback(() => {
    if (lastScrollY > window.scrollY) {
      setScrollDirection("up");
    } else if (lastScrollY < window.scrollY) {
      setScrollDirection("down");
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  return scrollDirection;
};
