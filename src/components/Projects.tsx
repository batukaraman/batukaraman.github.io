import "@/styles/projects.scss";
import SectionHeader from "./SectionHeader";
import Tab, { TabItemType } from "./Tab";
import ProjectCard, { ProjectType } from "./ProjectCard";

const projects: ProjectType[] = [
  {
    image: "./image/ozdentoz.jpg",
    title: "Kurumsal Tanıtım Sitesi",
    description:
      "Manavgat, Antalya'da bulunan Öz Dent Öz Ağız ve Diş Sağlığı Polikliniğinin talebi üzerine geliştirildi.",
    type: "Web App",
    techstack: ["React", "TypeScript", "Redux", "SASS", "PHP"],
    sourceLink: null,
    visitLink: "https://ozdentoz.com",
  },
  {
    image: "./image/dashboard.jpg",
    title: "E-Ticaret İçin Yönetim Paneli",
    description:
      "Typescript'i deneyimlemek için geliştirilmiş örnek bir projedir.",
    type: "Web App",
    techstack: ["React", "TypeScript", "MUI", "Recharts"],
    sourceLink: "https://github.com/batukaraman/react-typescript-dashboard",
    visitLink: "https://react-dashboard-batukaraman.netlify.app",
  },
  {
    image: "./image/e-commerce.jpg",
    title: "E-Ticaret Web Sitesi",
    description:
      "Vanilla Javascript ile bir slider bileşeni geliştirdim ve bunu böyle bir örnek projede değerlendirdim.",
    type: "Web App",
    techstack: ["Javascrip", "HTML/CSS"],
    sourceLink: "https://github.com/batukaraman/e-commerce",
    visitLink: null,
  },
  {
    image: "./image/todo.jpg",
    title: "Yapılacaklar Web Sitesi",
    description: "İlk SASS deneyimini yaşamak için basit bir uygulama.",
    type: "Web App",
    techstack: ["React", "Redux", "SASS"],
    sourceLink: "https://github.com/batukaraman/react-todo-list",
    visitLink: "https://react-todo-list-batukaraman.netlify.app/",
  },
  {
    image: "./image/tulpar.jpg",
    title: "Tulpar: Uçuş Değerlendirme Platformu",
    description:
      "Türkiye Girişimcilik Vakfı ile yürütülen Airpreneurs 2024 kapsamında Tulpar ekibim ile geliştirdiğimiz uygulama.",
    type: "Mobile App",
    techstack: ["React Native", "Typescript", "Reanimated"],
    sourceLink: "https://github.com/batukaraman/tulpar",
    visitLink: "https://appetize.io/app/b_dajuozkb75iezabrdndzt3bbom",
  },
];

const tabs: TabItemType[] = [
  {
    name: "Web App",
    element: (
      <div className="projects__body">
        {projects
          .filter((word) => word.type == "Web App")
          .map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
      </div>
    ),
  },
  {
    name: "Mobile App",
    element: (
      <div className="projects__body">
        {projects
          .filter((word) => word.type == "Mobile App")
          .map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
      </div>
    ),
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionHeader text="Projeler" />
      <Tab items={tabs} />
    </section>
  );
}

export default Projects;
