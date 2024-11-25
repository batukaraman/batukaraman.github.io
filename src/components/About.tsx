import Button from "./Button";
import "@/styles/about.scss";
import { PiMedal } from "react-icons/pi";
import { RxComponent1 } from "react-icons/rx";
import AnimatedDownloadIcon from "./AnimatedDownloadIcon";
import AnimatedMailIcon from "./AnimatedMailIcon";
import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function About() {
  useScrollAnimation(".scaleUp", {
    initial: { opacity: "0", transform: "scale(0.9)" },
    whileInView: {
      opacity: "1",
      transform: "scale(1)",
      transition: `all .6s ease-in-out`,
    },
  });

  useScrollAnimation(".opacity", {
    initial: { opacity: "0" },
    whileInView: {
      opacity: "1",
      transition: `all .6s ease-in-out`,
    },
  });

  return (
    <section id="about" className="about">
      <SectionHeader text={"Hakkımda"} />
      <div className="about__body">
        <div className="about_features">
          <div className="features-card scaleUp">
            <RxComponent1 className="features-card__icon" />
            <h4 className="features-card__title">Projeler</h4>
            <span className="features-card__value">+10</span>
          </div>
          <div className="features-card scaleUp">
            <PiMedal className="features-card__icon" />
            <h4 className="features-card__title">Deneyim</h4>
            <span className="features-card__value">
              +6<span className="features-card__subtitle">Yıl</span>
            </span>
          </div>
          <div className="features-card scaleUp">
            <PiMedal className="features-card__icon" />
            <h4 className="features-card__title">Öğrenci</h4>
            <span className="features-card__value">+80</span>
          </div>
        </div>
        <div className="about__detail opacity">
          <p>
            Yazılımın çeşitli alanlarında deneyim kazandım ve son 6 yıldır web
            teknolojileri ile aktif olarak çalışıyorum. 4 yıldır React ve
            türevleri (react native, next.js) ile freelance olarak birçok
            projede yer aldım.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
