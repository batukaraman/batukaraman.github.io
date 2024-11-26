import { IconType } from "react-icons";
import "@/styles/pricing-card.scss";
import Button from "./Button";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BsArrowRight } from "react-icons/bs";
import React from "react";

type PricingCardListItemType = {
  name: string;
  Icon?: IconType;
  link?: string;
};

type PricingCardListType = {
  title?: string;
  addition?: string;
  items: PricingCardListItemType[] | string[];
};

export interface PricingCardType {
  title: string;
  description: string;
  price: string;
  pricePer: string;
  isPopular?: boolean;
  lists?: PricingCardListType[];
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

function PricingCard({
  title,
  description,
  price,
  pricePer,
  isPopular = false,
  lists,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: PricingCardType) {
  useScrollAnimation(".slaceUp", {
    initial: { opacity: "0", transform: "scale(0.9)" },
    whileInView: {
      opacity: "1",
      transform: "scale(1)",
      transition: `all .6s ease-in-out`,
    },
  });

  return (
    <div
      className={`pricing-card${isPopular ? " popular" : ""} slaceUp`}
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
          {onPrimaryButtonClick && (
            <Button
              text="Talep Gönder"
              variant={isPopular ? "primary" : "secondary"}
              onClick={onPrimaryButtonClick}
            />
          )}
        </div>
      </div>
      {lists &&
        lists.map(({ title, addition, items }, index) => (
          <React.Fragment key={index}>
            <div className="pricing-card__list">
              {title && (
                <span className="pricing-card__list__title">{title}</span>
              )}
              {addition && (
                <small className="pricing-card__list__addition">
                  <strong>{addition}</strong>&nbsp;paketine ek olarak
                </small>
              )}
              <ul className="pricing-card__list__body">
                {items.map((item, index) => {
                  const isItemObject = typeof item === "object";
                  const content = (
                    <>
                      {isItemObject && item.Icon ? (
                        <item.Icon />
                      ) : (
                        <IoCheckmarkOutline />
                      )}
                      <span>{isItemObject ? item.name : item}</span>
                    </>
                  );

                  return (
                    <li key={index} className="pricing-card__list__item">
                      {isItemObject && item.link ? (
                        <a href={item.link}>{content}</a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            {lists.length - 1 !== index && <hr className="horizontal" />}
          </React.Fragment>
        ))}
      {onSecondaryButtonClick && (
        <Button
          text="Daha Fazla Bilgi"
          variant="tertiary"
          iconPosition="right"
          icon={BsArrowRight}
          onClick={onSecondaryButtonClick}
        />
      )}
    </div>
  );
}

export default PricingCard;
