import { IconType } from "react-icons";
import "@/styles/button.scss";

type ButtonType = {
  text?: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  onlyIcon?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  disable?: boolean;
  classNames?: string;
  onClick?: () => void;
};

function Button({
  text,
  icon: Icon,
  iconPosition = "left",
  onlyIcon = false,
  variant = "primary",
  size = "md",
  disable = false,
  classNames,
  onClick,
}: ButtonType) {
  const withIcon = Boolean(Icon && !onlyIcon);

  return (
    <button
      disabled={disable}
      className={`button ${variant} ${size} ${withIcon ? "with-icon" : ""} ${
        onlyIcon ? "only-icon" : ""
      } ${classNames}`}
      onClick={onClick}
    >
      {Icon && iconPosition === "left" && !onlyIcon && (
        <Icon className="icon" />
      )}
      {!onlyIcon && text}
      {Icon && iconPosition === "right" && !onlyIcon && (
        <Icon className="icon" />
      )}
      {onlyIcon && Icon && <Icon className="icon only-icon-size" />}
    </button>
  );
}

export default Button;
