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
  href?: string;
  download?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
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
  href,
  download,
  target,
}: ButtonType) {
  const withIcon = Boolean(Icon && !onlyIcon);
  const downloadable = Boolean(download && href);

  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && !onlyIcon && (
        <Icon className="icon" />
      )}
      {!onlyIcon && text}
      {Icon && iconPosition === "right" && !onlyIcon && (
        <Icon className="icon" />
      )}
      {onlyIcon && Icon && <Icon className="icon only-icon-size" />}
    </>
  );

  if (href) {
    return (
      <a
        target={target}
        href={href}
        className={`button ${variant} ${size} ${withIcon ? "with-icon" : ""} ${
          onlyIcon ? "only-icon" : ""
        } ${classNames}`}
        onClick={onClick}
        download={downloadable}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      disabled={disable}
      className={`button ${variant} ${size} ${withIcon ? "with-icon" : ""} ${
        onlyIcon ? "only-icon" : ""
      } ${classNames ? classNames : ""}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
