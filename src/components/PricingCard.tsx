import { IconType } from "react-icons";
import "@/styles/pricing-card.scss";
import Button from "./Button";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type FeatureType = {
  name: string;
  icon?: IconType;
};

export interface PricingCardType {
  title: string;
  description: string;
  price: string;
  pricePer: string;
  primaryList?: FeatureType[] | string[];
  addition?: string;
  isPopular?: boolean;
  secondaryList?: string[];
  secondaryListTitle?: string;
  learnMoreModalContentComponent?: React.ReactElement;
}

function PricingCard({
  title,
  description,
  price,
  pricePer,
  primaryList: features,
  addition,
  isPopular = false,
  secondaryList: examples,
  secondaryListTitle,
  learnMoreModalContentComponent,
}: PricingCardType) {
  useScrollAnimation(".topToBottom", {
    initial: { opacity: "0", transform: "translateY(-10%) scale(0.9)" },
    whileInView: {
      opacity: "1",
      transform: "translateY(0) scale(1)",
      transition: `all .6s ease-in-out`,
    },
  });

  return (
    <div
      className={`pricing-card${isPopular ? " popular" : ""} topToBottom`}
      style={!isPopular ? { zIndex: 1 } : {}}
    >
      <div className="pricing-card__header">
        <div className="pricing-card__text">
          <div className="pricing-card__title">
            <h5>{title}</h5>
            {isPopular && <small className="badge primary">Popüler</small>}
          </div>
          <p>{description}</p>
        </div>
        <div className="pricing-card__body">
          <div className="pricing-card__price">
            <span>{price}</span>
            <span>/</span>
            <span>{pricePer}</span>
          </div>
          <Button
            text="Talep Gönder"
            variant={isPopular ? "primary" : "secondary"}
          />
        </div>
      </div>
      {features && features.length > 0 && (
        <div className="pricing-card__features">
          {addition && (
            <span>
              <strong>{addition}</strong>&nbsp;pakete ek olarak
            </span>
          )}
          <ul>
            {features.map((item) => (
              <li key={item.name}>
                {item.icon ? <item.icon /> : <IoCheckmarkOutline />}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {examples && features && <hr className="horizontal"></hr>}
      {examples && examples.length > 0 && (
        <div className="pricing-card__examples">
          {secondaryListTitle && <span>{secondaryListTitle}</span>}
          <ul>
            {examples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PricingCard;
