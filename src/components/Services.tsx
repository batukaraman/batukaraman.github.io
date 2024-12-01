import SectionHeader from "./SectionHeader";
import "@/styles/services.scss";
import Tab, { TabItemType } from "./Tab";
import PricingCard, { PricingCardType } from "./PricingCard";
import { DesignPricing, DevPricing, EduPricing } from "@/data";
import useToggle from "@/hooks/useToggle";
import { useAppDispatch } from "@/hooks/useRedux";
import { setService } from "@/store/serviceSlice";

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
  const { handleOpen } = useToggle({
    id: "modal-request",
  });

  const dispatch = useAppDispatch();

  const handleOpenRequestModal = (serviceName: string, packageName: string) => {
    dispatch(setService({ serviceName, packageName }));
    handleOpen();
  };

  const tabs: TabItemType[] = servies.map(({ title, prices }) => {
    return {
      name: title,
      element: (
        <div className="services__body">
          {prices.map((item, index) => (
            <PricingCard
              key={index}
              {...item}
              onPrimaryButtonClick={() =>
                handleOpenRequestModal(title, item.title)
              }
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
    </section>
  );
}

export default Services;
