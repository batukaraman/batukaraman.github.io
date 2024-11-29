import { PricingCardType } from "@/components/PricingCard";
import { AiOutlineLineChart, AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";

import { BsSliders } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import {
  IoLanguageOutline,
  IoMailOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoTextOutline,
} from "react-icons/io5";
import { PiFunction, PiHandshake } from "react-icons/pi";
import { RxComponent1 } from "react-icons/rx";
import { VscDebugDisconnect } from "react-icons/vsc";

export const DevPricing: PricingCardType[] = [
  {
    title: "Statik",
    description:
      "Statik, minimum güncelleme gerektiren yönetim paneli olmayan basit web siteleri için uygundur.",
    price: "₺1.000",
    pricePer: "Sayfa",
    lists: [
      {
        items: [
          {
            name: "Çoklu dil desteği",
            Icon: IoLanguageOutline,
          },
          {
            name: "E-Posta Servisi",
            Icon: IoMailOutline,
          },
          {
            name: "İçerik Girişi",
            Icon: IoTextOutline,
          },
          {
            name: "SEO",
            Icon: IoSearchOutline,
          },
          {
            name: "Yüksek Optimizasyon",
            Icon: AiOutlineLineChart,
          },
          {
            name: "Teknik Destek",
            Icon: PiHandshake,
          },
        ],
      },
      {
        title: "Örnekler",
        items: ["Tanıtım Siteleri", "Kartvizit Siteler", "Portföyler"],
      },
    ],
  },
  {
    title: "Yarı Dinamik",
    description:
      "Dinamik içerik ekleme gerektiren, düzenli güncellemelerle çalışan projeler için uygundur.",
    price: "₺1.500",
    pricePer: "Sayfa",
    isPopular: true,
    lists: [
      {
        addition: "Statik",
        items: [
          {
            name: "Veri Tabanı",
            Icon: GoDatabase,
          },
          {
            name: "Yönetim Paneli (CMS)",
            Icon: IoSettingsOutline,
          },
          {
            name: "Özelleştirilmiş Fonksiyonlar",
            Icon: PiFunction,
          },
          {
            name: "Kullanıcı Hesap Yönetimi",
            Icon: HiOutlineUser,
          },
          {
            name: "Basit Arama Fonksiyonu",
            Icon: BsSliders,
          },
        ],
      },
      {
        title: "Örnekler",
        items: [
          "Blog Siteleri",
          "Haber Siteleri",
          "Etkinlik Duyuru Platformları",
        ],
      },
    ],
  },
  {
    title: "Dinamik",
    description:
      "Kullanıcı etkileşimli, veri alışverişi yapan karmaşık projeler için uygundur; dinamik özellikler içerir.",
    price: "₺2.000",
    pricePer: "Sayfa",
    lists: [
      {
        addition: "Yarı Dinamik",
        items: [
          {
            name: "API Entegrasyonları",
            Icon: VscDebugDisconnect,
          },
          {
            name: "Gelişmiş Arama ve Filtreleme",
            Icon: BsSliders,
          },
          {
            name: "Gelişmiş Bileşen Sistemi",
            Icon: RxComponent1,
          },
          {
            name: "Veri Analitiği ve Raporlama",
            Icon: AiOutlinePieChart,
          },
        ],
      },
      {
        title: "Örnekler",
        items: [
          "E-ticaret Platformları",
          "Online Rezervasyon Sistemleri",
          "Sosyal Medya Platformları",
          "Planlayıcı ve İş Yönetim Araçları",
        ],
      },
    ],
  },
];

export const EduPricing: PricingCardType[] = [
  {
    title: "Web Programlama",
    description:
      "Modern web teknolojileriyle sıfırdan ileri düzeye frontend geliştirme eğitimi.",
    price: "₺100",
    pricePer: "Saat",
    isPopular: true,
    lists: [
      {
        title: "Modüller",
        items: [
          "HTML, CSS, JavaScript",
          "React/Next ve Redux",
          "Tailwind ve SASS",
          "Versiyon Kontrol (Git)",
          "UI/UX Temelleri",
          "Uygulamalı Projeler",
        ],
      },
    ],
  },
  {
    title: "Python ile Programlama",
    description:
      "Programlama temellerinden ileri düzeye Python becerileri ve algoritma geliştirme.",
    price: "₺80",
    pricePer: "Saat",
    lists: [
      {
        title: "Modüller",
        items: [
          "Programlama Temelleri",
          "Veri Yapıları ve Algoritmalar",
          "Nesne Tabanlı Programlama",
          "Git ve Proje Yönetimi",
          "Veri Bilimi veya UI Geliştirme",
          "Uygulamalı Projeler",
        ],
      },
    ],
  },
];

export const DesignPricing: PricingCardType[] = [
  {
    title: "UX",
    description:
      "Kullanıcıların ihtiyaçlarını analiz ederek etkili ve sorunsuz bir deneyim sunmayı hedefler.",
    price: "₺300",
    pricePer: "Sayfa",
    lists: [
      {
        items: [
          "UX Stratejisi",
          "Kullanıcı Personaları",
          "Bilgi Mimarisi",
          "Akış ve Yapı Tasarımı",
          "Kullanılabilirlik Testleri",
        ],
      },
    ],
  },
  {
    title: "UX + UI",
    description:
      "Deneyim ve görselliği birleştirerek dikkat çekici ve kullanıcı dostu arayüzler tasarlar.",
    price: "₺500",
    pricePer: "Sayfa",
    isPopular: true,
    lists: [
      {
        addition: "UX",
        items: [
          "Renk ve Tipografi",
          "Yerleşim ve Akış Tasarımı",
          "Prototyping",
        ],
      },
    ],
  },
];
