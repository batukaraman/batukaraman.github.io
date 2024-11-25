import SectionHeader from "./SectionHeader";
import Timeline, { TimelineItem } from "./Timeline";
import Tab from "./Tab";

const experiences: TimelineItem[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQF4PpTx_q9nYA/company-logo_100_100/company-logo_100_100/0/1630665770589?e=1740009600&v=beta&t=Hft_0_JgZP2tCFbbsyQAPhpCNaaGX0zvMegsrEwP11U",
    title: "Tutor",
    subtitle: "Algorithmics · Yarı zamanlı",
    featured:
      "Sınıf Yönergesi · Veri Yapıları ve Algoritmalar · Python · Git · Nesne Tabanlı Programlama",
    description:
      "7-17 yaş arasındaki kursiyerlere Python ve Scratch öğretiyorum.",
    date: "Eki 2023 - Halen",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQHBGnDMLlMZ8g/company-logo_100_100/company-logo_100_100/0/1687764484019/bionluk_logo?e=1740009600&v=beta&t=ZlXJGrjxljHSISbrPyX6H1CNjKwaqEeCbelbUPB0wuY",
    title: "Frontend Developer",
    subtitle: "Bionluk · Serbest çalışan",
    featured:
      "React · React Native · Typescript · JavaScript · Ön Uç Geliştirme · HTML5 · React.js · CSS · Redux · Tailwind",
    description:
      "6 yıllık web geliştirme deneyimimle, projelerin ihtiyaçlarına uygun teknolojiler ve yapılar seçiyorum. Son 4 yıldır React kullanıyor, Java ile mobil geliştirme deneyimimden de faydalanarak son 2 yıldır React Native projeleri de geliştiriyorum. TypeScript, Redux, Tailwind gibi modern araçlarla çalışarak verimli ve ölçeklenebilir çözümler üretiyorum.",
    date: "Haz 2019 - Halen",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEO5w8oD3xSYA/company-logo_100_100/company-logo_100_100/0/1704701541485/bimser_z_m_logo?e=1740009600&v=beta&t=a611wSCaV0P_01b8qoUuXNlku11xGEtkdYbcxliyGaY",
    title: "Software Developer",
    subtitle: "Bimser Çözüm · Stajyer",
    featured:
      "Android Geliştirme · Veri Yapıları ve Algoritmalar · Birim Testleri · Test Güdümlü Geliştirme · Yazılım Geliştirme Yaşam Döngüsü (SDLC) · Git · MySQL · Arka Uç Geliştirme · SQL",
    description: `• Yazılım Test Uzmanlığı eğitimini tamamladım ve Postman gibi araçlarla mobil, web ve API testleri yaptım.
    • Python ile SQLite veritabanını kullanarak Numara Rehberi uygulaması geliştirdim.
    • Java kullanarak, telefon veri tabanına erişim sağlayan Telefon Rehberi uygulaması yaptım.
    • Socket.IO ile web tabanlı Agar.io oyununu klonladım.
    `,
    date: "Eki 2020 - Haz 2021",
  },
];

const education: TimelineItem[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQHr-CYNN5SAcg/company-logo_100_100/company-logo_100_100/0/1683706425339/akdeniz_universitesi_logo?e=1740009600&v=beta&t=tci-OOTasnM10KFbBDIKuXf-t2-9hteODpli4QX4clk",
    title: "Bilgisayar Programlama",
    subtitle: "Akdeniz Üniversitesi · Ön Lisans",
    featured:
      "Java · Android Development · Front-End Development · C · WordPress · Test-Driven Development · Design Patterns · JavaScript · C# · AJAX · Data Structures and Algorithms · Unit Testing · SQL · Software Development Life Cycle (SDLC) · Pascal · MySQL · CSS · Back-End Web Development · UML · Git · Web Teknolojileri · C++ · HTML",
    description: `Not: 3,64 CGPA
Yüksek Onur Öğrencisi`,
    date: "Eki 2021 - Tem 2023",
  },
  {
    image: "https://static.licdn.com/aero-v1/sc/h/8zzzkhxduv0r11cuxbs48pg03",
    title: "Web Programlama",
    subtitle: "Yerel Lise",
    featured:
      "Software Development Life Cycle (SDLC) · Front-End Development · HTML5 · CSS · Test-Driven Development · JavaScript · C# · Git · HTML · PHP · SQL · Data Structures · Algorithms",
    description: null,
    date: "2017 - 2021",
  },
];

const certificates: TimelineItem[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1740614400&v=beta&t=BmTkFp2tHdamcroXZTOL27sOWJ-gDOZmun6Zoiz0hxo",
    title: "Agile with Atlassian Jira",
    subtitle: "Coursera (Atlassian)",
    date: "Kas 2023",
    featured: "Kanban · agile · JIRA · Scrum",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1740614400&v=beta&t=BmTkFp2tHdamcroXZTOL27sOWJ-gDOZmun6Zoiz0hxo",
    title: "Programming with JavaScript",
    subtitle: "Coursera (Meta)",
    date: "Kas 2023",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1740614400&v=beta&t=BmTkFp2tHdamcroXZTOL27sOWJ-gDOZmun6Zoiz0hxo",
    title: "Introduction to Front-End Development",
    subtitle: "Coursera (Meta)",
    date: "Eki 2023",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1740614400&v=beta&t=CO4o3B5U5QVZkLaeO_hJV6IwRAyqJYt-8W7I3d3Xvio",
    title: "Fundamentals of digital marketing",
    subtitle: "Google",
    date: "May 2023",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGhlnO4Yx6XcA/company-logo_100_100/company-logo_100_100/0/1698136097699/turkcell_gelecei_yazanlar_logo?e=1740614400&v=beta&t=WzOpqMv2wjwDsTqYiY0uG7bFqPnWx57wfxcLSltLvR0",
    title: "Web Programlama 301",
    subtitle: "Turkcell Geleceği Yazanlar",
    date: "Mar 2023",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGhlnO4Yx6XcA/company-logo_100_100/company-logo_100_100/0/1698136097699/turkcell_gelecei_yazanlar_logo?e=1740614400&v=beta&t=WzOpqMv2wjwDsTqYiY0uG7bFqPnWx57wfxcLSltLvR0",
    title: "Python Programlama 401",
    subtitle: "Turkcell Geleceği Yazanlar",
    date: "Haz 2022",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGhlnO4Yx6XcA/company-logo_100_100/company-logo_100_100/0/1698136097699/turkcell_gelecei_yazanlar_logo?e=1740614400&v=beta&t=WzOpqMv2wjwDsTqYiY0uG7bFqPnWx57wfxcLSltLvR0",
    title: "Temel Network",
    subtitle: "Turkcell Geleceği Yazanlar",
    date: "Haz 2022",
  },
];

const tabs = [
  {
    name: "Deneyimler",
    element: <Timeline items={experiences} />,
  },
  {
    name: "Eğitim",
    element: <Timeline items={education} />,
  },
  {
    name: "Sertifikalar",
    element: <Timeline items={certificates} />,
  },
];

function Qualification() {
  return (
    <section id="qualification" className="qualification">
      <SectionHeader text={"Yeterlilik"} />
      <Tab items={tabs} />
    </section>
  );
}

export default Qualification;
