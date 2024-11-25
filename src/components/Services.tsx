import SectionHeader from "./SectionHeader";
import "@/styles/services.scss";
import Tab, { TabItemType } from "./Tab";
import PricingCard, { PricingCardType } from "./PricingCard";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoTextOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { PiHandshake } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { PiFunction } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { BsSliders } from "react-icons/bs";
import { VscDebugDisconnect } from "react-icons/vsc";
import { RxComponent1 } from "react-icons/rx";
import { AiOutlinePieChart } from "react-icons/ai";

const DevPricing: PricingCardType[] = [
  {
    title: "Statik",
    description:
      "Statik, minimum güncelleme gerektiren yönetim paneli olmayan basit web siteleri için uygundur.",
    price: "₺1.000",
    pricePer: "Sayfa",
    primaryList: [
      {
        name: "Çoklu dil desteği",
        icon: IoLanguageOutline,
      },
      {
        name: "E-Posta Servisi",
        icon: IoMailOutline,
      },
      {
        name: "İçerik Girişi",
        icon: IoTextOutline,
      },
      {
        name: "SEO",
        icon: IoSearchOutline,
      },
      {
        name: "Yüksek Optimizasyon",
        icon: AiOutlineLineChart,
      },
      {
        name: "Teknik Destek",
        icon: PiHandshake,
      },
    ],
    secondaryList: ["Tanıtım Siteleri", "Kartvizit Siteler", "Portföyler"],
    secondaryListTitle: "Örnekler",
  },
  {
    title: "Yarı Dinamik",
    description:
      "Dinamik içerik ekleme gerektiren, düzenli güncellemelerle çalışan projeler için uygundur.",
    price: "₺1.500",
    pricePer: "Sayfa",
    primaryList: [
      {
        name: "Veri Tabanı",
        icon: GoDatabase,
      },
      {
        name: "Yönetim Paneli (CMS)",
        icon: IoSettingsOutline,
      },
      {
        name: "Özelleştirilmiş Fonksiyonlar",
        icon: PiFunction,
      },
      {
        name: "Kullanıcı Hesap Yönetimi",
        icon: AiOutlineUser,
      },
      {
        name: "Basit Arama Fonksiyonu",
        icon: BsSliders,
      },
    ],
    addition: "Statik",
    isPopular: true,
    secondaryList: [
      "Blog Siteleri",
      "Haber Siteleri",
      "Etkinlik Duyuru Platformları",
    ],
    secondaryListTitle: "Örnekler",
  },
  {
    title: "Dinamik",
    description:
      "Kullanıcı etkileşimli, veri alışverişi yapan karmaşık projeler için uygundur; dinamik özellikler içerir.",
    price: "₺2.000",
    pricePer: "Sayfa",
    primaryList: [
      {
        name: "API Entegrasyonları",
        icon: VscDebugDisconnect,
      },
      {
        name: "Gelişmiş Arama ve Filtreleme",
        icon: BsSliders,
      },
      {
        name: "Gelişmiş Bileşen Sistemi",
        icon: RxComponent1,
      },
      {
        name: "Veri Analitiği ve Raporlama",
        icon: AiOutlinePieChart,
      },
    ],
    addition: "Yarı Dinamik",
    secondaryList: [
      "E-ticaret Platformları",
      "Online Rezervasyon Sistemleri",
      "Sosyal Medya Platformları",
      "Planlayıcı ve İş Yönetim Araçları",
    ],
    secondaryListTitle: "Örnekler",
  },
];

const EduPricing: PricingCardType[] = [
  {
    title: "Web Programlama",
    description:
      "Statik, minimum güncelleme gerektiren yönetim paneli olmayan basit web siteleri için uygundur.",
    price: "₺1.000",
    pricePer: "Sayfa",
    isPopular: true,
    secondaryList: ["Konu 1", "Konu 2"],
    secondaryListTitle: "Modüller",
  },
  {
    title: "Python ile Programlama",
    description:
      "Statik, minimum güncelleme gerektiren yönetim paneli olmayan basit web siteleri için uygundur.",
    price: "₺1.000",
    pricePer: "Sayfa",
    secondaryList: ["Konu 1", "Konu 2"],
    secondaryListTitle: "Modüller",
  },
];

const DesignPricing: PricingCardType[] = [
  {
    title: "Kullanıcı Deneyimi",
    description:
      "Statik, minimum güncelleme gerektiren yönetim paneli olmayan basit web siteleri için uygundur.",
    price: "₺1.000",
    pricePer: "Sayfa",
    secondaryList: ["Planlayıcı"],
    secondaryListTitle: "Örnekler",
  },
  {
    title: "UX + UI",
    description:
      "Statik, minimum güncelleme gerektiren yönetim paneli olmayan basit web siteleri için uygundur.",
    price: "₺1.000",
    pricePer: "Sayfa",
    isPopular: true,
    secondaryList: ["Planlayıcı"],
    secondaryListTitle: "Örnekler",
  },
];

const tabs: TabItemType[] = [
  {
    name: "Uygulama",
    element: (
      <div className="services__body">
        {DevPricing.map((item) => (
          <PricingCard key={item.title} {...item} />
        ))}
      </div>
    ),
  },
  {
    name: "Eğitim",
    element: (
      <div className="services__body">
        {EduPricing.map((item) => (
          <PricingCard key={item.title} {...item} />
        ))}
      </div>
    ),
  },
  {
    name: "Tasarım",
    element: (
      <div className="services__body">
        {DesignPricing.map((item) => (
          <PricingCard key={item.title} {...item} />
        ))}
      </div>
    ),
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <SectionHeader text="Hizmetler" />
      <Tab items={tabs} />
    </section>
  );
}

export default Services;
