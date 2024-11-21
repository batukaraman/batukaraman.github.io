import Button from "./Button";
import SectionHeader from "./SectionHeader";
import "@/styles/services.scss";
import { LuMoveRight } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiCodeBlock } from "react-icons/pi";
import { AiOutlineCode } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";
import { GiGraduateCap } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";
import { TbColorSwatch } from "react-icons/tb";

function Services() {
  return (
    <section className="services" id="services">
      <SectionHeader text="Hizmetler" />
      <div className="services__body">
        <div className="service-card">
          <PiCodeBlock size={48} className="service-card__icon" />
          <h4 className="service-card__title">Web Site Hazırlama</h4>
          <Button
            text="Detaylar"
            variant="tertiary"
            icon={LuMoveRight}
            iconPosition="right"
            classNames="animated-icon goArrow"
          />
        </div>
        <div className="service-card">
          <LuGraduationCap size={48} className="service-card__icon" />
          <h4 className="service-card__title">Programlama Eğitimi</h4>
          <Button
            text="Detaylar"
            variant="tertiary"
            icon={LuMoveRight}
            iconPosition="right"
            classNames="animated-icon goArrow"
          />
        </div>
        <div className="service-card">
          <TbColorSwatch size={48} className="service-card__icon" />
          <h4 className="service-card__title">UI/UX Tasarımı</h4>
          <Button
            text="Detaylar"
            variant="tertiary"
            icon={LuMoveRight}
            iconPosition="right"
            classNames="animated-icon goArrow"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
