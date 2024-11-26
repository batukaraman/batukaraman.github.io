import SectionHeader from "./SectionHeader";
import "@/styles/services.scss";
import Tab, { TabItemType } from "./Tab";
import PricingCard, { PricingCardType } from "./PricingCard";
import Modal from "./Modal";
import { DesignPricing, DevPricing, EduPricing } from "@/data";
import { useState } from "react";

type ServiceType = {
  title: string;
  prices: PricingCardType[];
};

const servies: ServiceType[] = [
  {
    title: "Uygulama",
    prices: DevPricing,
  },
  {
    title: "Eğitim",
    prices: EduPricing,
  },
  {
    title: "Tasarım",
    prices: DesignPricing,
  },
];

function Services() {
  const [open, setOpen] = useState(false);

  const tabs: TabItemType[] = servies.map(({ title, prices }) => {
    return {
      name: title,
      element: (
        <div className="services__body">
          {prices.map((item, index) => (
            <PricingCard
              key={index}
              {...item}
              onPrimaryButtonClick={() => setOpen(true)}
            />
          ))}
        </div>
      ),
    };
  });

  return (
    <section className="services" id="services">
      <SectionHeader text="Hizmetler" />
      <Tab items={tabs} />
      {/* <Modal isOpen={open} setOpen={setOpen}>
        <h3>Talep Gönderme</h3>
        <p>Bu modal, Talep Gönderme işlemleri için gösteriliyor.</p>
      </Modal> */}
    </section>
  );
}

export default Services;
