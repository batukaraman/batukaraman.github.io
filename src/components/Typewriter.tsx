import React, { useEffect, useState, useMemo } from "react";

interface TypewriterProps {
  words: string[];
  caretType?: "default" | "thick" | "nocaret";
}

const Typewriter = ({ words, caretType = "default" }: TypewriterProps) => {
  const [css, setCss] = useState("");

  // Memoize steps calculation to prevent recalculations on each render
  const animationSteps = useMemo(() => {
    let grow =
      (100 - words.length * 5) /
      (words.reduce((sum, word) => sum + word.length + 1, 0) * 2);
    let rate = 0.0;
    let steps = "";

    // Create typing animation steps
    words.forEach((word) => {
      // Typing part
      for (let i = 0; i <= word.length; i++) {
        steps += `${rate.toFixed(2)}% { content: '${word.slice(0, i)}'; }\n`;
        rate += grow;
      }

      rate += 5 * grow; // Delay between words

      // Deleting part
      for (let i = word.length; i >= 0; i--) {
        steps += `${rate.toFixed(2)}% { content: '${word.slice(0, i)}'; }\n`;
        rate += grow;
      }
    });

    return steps;
  }, [words]);

  // Create the full CSS including animation and caret behavior
  useEffect(() => {
    const animationCSS = `
      @keyframes typing {
        ${animationSteps}
      }
    `;

    const typewriterCSS = `
      .typewriter::before {
        content: "";
        animation: typing 20s infinite;
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      .typewriter::after {
        content: "";
        border-right: 1px solid currentcolor;
        animation: blink 0.5s linear infinite;
      }

      .typewriter.thick::after {
        border-right: 1ch solid currentcolor;
      }

      .typewriter.nocaret::after {
        border-right: 0;
      }
    `;

    setCss(animationCSS + typewriterCSS);
  }, [animationSteps]);

  // Classname calculation for caretType
  const getCaretClass = () => {
    switch (caretType) {
      case "thick":
        return "thick";
      case "nocaret":
        return "nocaret";
      default:
        return "";
    }
  };

  return (
    <span className={`typewriter ${getCaretClass()}`}>
      <style>{css}</style>
    </span>
  );
};

export default Typewriter;
