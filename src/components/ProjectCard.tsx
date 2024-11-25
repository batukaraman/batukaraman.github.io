import Button from "./Button";
import { IoEyeOutline } from "react-icons/io5";
import { VscSourceControl } from "react-icons/vsc";
import "@/styles/project-card.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export type ProjectType = {
  image: string;
  title: string;
  description: string;
  type: "Web App" | "Mobile App" | "UI/UX Tasarım";
  techstack: string[];
  sourceLink: string | null;
  visitLink: string | null;
  index?: number;
};

function ProjectCard({
  title,
  image,
  visitLink,
  sourceLink,
  description,
  techstack,
  index,
}: ProjectType) {
  const animationDelay = `${index * 0.3}s`;

  useScrollAnimation(".bottomToTop", {
    initial: { opacity: "0", transform: "translateY(10%)" },
    whileInView: {
      opacity: "1",
      transform: "translateY(0)",
      transition: `all 1s ease-in-out`,
    },
  });

  return (
    <div className="project-card bottomToTop" key={title}>
      <div className="project-card__image">
        <img src={image} alt="" />
        <div className="project-card__actions">
          {visitLink && (
            <Button
              href={visitLink}
              target="_blank"
              icon={IoEyeOutline}
              onlyIcon
              variant="secondary"
              classNames="project-card__visit"
            />
          )}
          {sourceLink && (
            <Button
              href={sourceLink}
              target="_blank"
              icon={VscSourceControl}
              onlyIcon
              variant="secondary"
              classNames="project-card__source"
            />
          )}
        </div>
      </div>
      <div className="project-card__body">
        <h5 className="project-card__title">{title}</h5>
        <div className="project-card__description">{description}</div>
        <div className="project-card__techstack">
          {techstack.map((tech) => (
            <small className="badge secondary" key={tech}>
              {tech}
            </small>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
