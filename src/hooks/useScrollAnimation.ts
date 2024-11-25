import { useEffect } from "react";

interface ScrollAnimationOptions {
  initial: React.CSSProperties;
  whileInView: React.CSSProperties;
  resetOnExit?: boolean;
  threshold?: number | number[];
}

const observedElements = new Set<HTMLElement>();

export function useScrollAnimation(
  selector: string,
  options: ScrollAnimationOptions
) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((element) => {
      if (!observedElements.has(element)) {
        Object.assign(element.style, options.initial);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting && !observedElements.has(element)) {
            Object.assign(element.style, options.whileInView);
            observedElements.add(element);
          } else if (options.resetOnExit && observedElements.has(element)) {
            Object.assign(element.style, options.initial);
            observedElements.delete(element);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: options.threshold || 0.1,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, options]);
}
