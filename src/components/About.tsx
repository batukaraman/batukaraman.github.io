import Button from "./Button";
import "@/styles/about.scss";
import { PiMedal } from "react-icons/pi";
import { RxComponent1 } from "react-icons/rx";
import { TbDownload } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import AnimatedDownloadIcon from "./AnimatedDownloadIcon";
import AnimatedMailIcon from "./AnimatedMailIcon";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h3 className="section-header__title">Hakkımda</h3>
        <p className="section-header__tagline">Hakkımdaki detaylar</p>
      </div>
      <div className="about__body">
        <div className="about_features">
          <div className="features-card">
            <RxComponent1 className="features-card__icon" />
            <h4 className="features-card__title">Projeler</h4>
            <span className="features-card__value">+10</span>
          </div>
          <div className="features-card">
            <PiMedal className="features-card__icon" />
            <h4 className="features-card__title">Deneyim</h4>
            <span className="features-card__value">
              +6<span className="features-card__subtitle">Yıl</span>
            </span>
          </div>
          <div className="features-card">
            <PiMedal className="features-card__icon" />
            <h4 className="features-card__title">Öğrenci</h4>
            <span className="features-card__value">+80</span>
          </div>
        </div>
        <div className="about__detail">
          <p>
            Yazılımın çeşitli alanlarında deneyim kazandım ve son 6 yıldır web
            teknolojileri ile aktif olarak çalışıyorum. 4 yıldır React ve
            türevleri (react native, next.js) ile freelance olarak birçok
            projede yer aldım.
          </p>
          <div className="about__actions">
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
      </div>
    </section>
  );
}

export default About;
