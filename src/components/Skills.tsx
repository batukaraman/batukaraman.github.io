import "@/styles/skills.scss";
import SectionHeader from "./SectionHeader";

const skills = [
  {
    title: "Programlama Dilleri",
    items: [
      "JavaScript(ES6)",
      "TypeScript",
      "HTML/CSS",
      "SASS",
      "Python",
      "SQL",
      "PHP",
    ],
  },
  {
    title: "Kütüphaneler & Çerçeveler",
    items: [
      "Express",
      "React Native",
      "React",
      "Redux",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    title: "Araçlar",
    items: ["Git", "Postman", "Figma", "Photoshop", "MySQL", "WordPress"],
  },
  {
    title: "Bilgiler",
    items: [
      "OOP",
      "Web Services",
      "Network Temelleri",
      "Unit Test",
      "MVC",
      "SEO",
      "Dijital Pazarlama Temelleri",
      "UI/UX Temelleri",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionHeader text="Beceriler" />
      <div className="skills__body">
        {skills.map((skill) => (
          <div className="skills__part" key={skill.title}>
            <h4>{skill.title}</h4>
            <ul className="skills__list">
              {skill.items.map((item) => (
                <li className="skills__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
