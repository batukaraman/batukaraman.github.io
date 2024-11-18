import "@/styles/hero.scss";
import Typewriter from "./Typewriter";
import SocialMedia from "./SocialMedia";
import Button from "./Button";
import AnimatedDownloadIcon from "./AnimatedDownloadIcon";
import AnimatedMailIcon from "./AnimatedMailIcon";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__info">
        <div className="hero__text">
          <span className="hero__greeting">Merhaba, ben</span>
          <h1 className="hero__name">Batuhan Karaman</h1>
          <strong className="hero__title">
            <Typewriter
              words={["Frontend Geliştirici", "Eğitmen", "UI/UX Tasarımcı"]}
              caretType="thick"
            />
          </strong>
        </div>
        <SocialMedia />
        <div className="hero__actions">
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
      <div className="hero__image">
        <div className="blob"></div>
      </div>
    </section>
  );
}

export default Hero;
