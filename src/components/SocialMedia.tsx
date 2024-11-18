import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import "@/styles/social-media.scss";

function SocialMedia() {
  return (
    <div className="social-menu">
      <ul className="social-menu__body">
        <li className="social-menu__item">
          <a
            href="https://github.com/batukaraman"
            target="_blank"
            className="social-menu__link"
          >
            <FaGithub className="social-menu__icon" />
          </a>
        </li>
        <li className="social-menu__item">
          <a
            href="https://www.linkedin.com/in/batukaraman/"
            target="_blank"
            className="social-menu__link"
          >
            <FaLinkedinIn className="social-menu__icon" />
          </a>
        </li>
        <li className="social-menu__item">
          <a
            href="https://codepen.io/batukaraman"
            target="_blank"
            className="social-menu__link"
          >
            <FaCodepen className="social-menu__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
