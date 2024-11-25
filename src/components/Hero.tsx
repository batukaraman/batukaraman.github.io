import "@/styles/hero.scss";
import Typewriter from "./Typewriter";
import SocialMedia from "./SocialMedia";
import Button from "./Button";
import AnimatedDownloadIcon from "./AnimatedDownloadIcon";
import AnimatedMailIcon from "./AnimatedMailIcon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Hero() {
  useScrollAnimation(".leftToRight", {
    initial: { opacity: "0", transform: "translateX(-50%)" },
    whileInView: {
      opacity: "1",
      transform: "translateX(0)",
      transition: "all 1s ease-in-out",
    },
  });

  useScrollAnimation(".topToBottom", {
    initial: { opacity: "0", transform: "translateY(-100%)" },
    whileInView: {
      opacity: "1",
      transform: "translateY(0)",
      transition: "all 1s ease-in-out",
    },
  });

  useScrollAnimation(".opacity", {
    initial: { opacity: "0" },
    whileInView: {
      opacity: "1",
      transition: "all 1s ease-in-out",
    },
  });

  useScrollAnimation(".scaleUp", {
    initial: { opacity: "0", transform: "scale(0.5)" },
    whileInView: {
      opacity: "1",
      transform: "scale(1)",
      transition: "all 1s ease-in-out",
    },
  });

  return (
    <section id="root" className="hero">
      <div className="hero__info">
        <div className="hero__text leftToRight">
          <span className="hero__greeting">Merhaba, ben</span>
          <h1 className="hero__name">Batuhan Karaman</h1>
          <strong className="hero__title">
            <Typewriter
              words={["Frontend Geliştirici", "Eğitmen", "UI/UX Tasarımcı"]}
              caretType="thick"
            />
          </strong>
        </div>
        <div className="topToBottom">
          <SocialMedia />
        </div>
        <div className="hero__actions opacity">
          <Button
            text="Özgeçmiş"
            icon={AnimatedDownloadIcon}
            iconPosition="right"
            size="lg"
            href="./Resume TUR Batuhan Karaman.pdf"
            download
          />
          <Button
            text="Bana Ulaş"
            variant="secondary"
            icon={AnimatedMailIcon}
            iconPosition="right"
            size="lg"
            href="mailto:batuhankaraman0@hotmail.com"
          />
        </div>
      </div>
      <div className="hero__image scaleUp">
        <div className="blob"></div>
      </div>
    </section>
  );
}

export default Hero;
