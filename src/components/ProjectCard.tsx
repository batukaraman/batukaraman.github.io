import Button from "./Button";
import { IoEyeOutline } from "react-icons/io5";
import { VscSourceControl } from "react-icons/vsc";
import "@/styles/project-card.scss";

export type ProjectType = {
  image: string;
  title: string;
  description: string;
  type: "Web App" | "Mobile App" | "UI/UX Tasarım";
  techstack: string[];
  sourceLink: string | null;
  visitLink: string | null;
};

function ProjectCard({
  title,
  image,
  visitLink,
  sourceLink,
  description,
  techstack,
}: ProjectType) {
  return (
    <div className="project-card" key={title}>
      <div className="project-card__image">
        <img src={image} alt="" />
        <div className="project-card__actions">
          {visitLink && (
            <Button
              href={visitLink}
              target="_blank"
              icon={IoEyeOutline}
              onlyIcon
              variant="tertiary"
              classNames="project-card__visit"
            />
          )}
          {sourceLink && (
            <Button
              href={sourceLink}
              target="_blank"
              icon={VscSourceControl}
              onlyIcon
              variant="tertiary"
              classNames="project-card__soruce"
            />
          )}
        </div>
      </div>
      <div className="project-card__body">
        <h5 className="project-card__title">{title}</h5>
        <div className="project-card__description">{description}</div>
        <div className="project-card__techstack">
          {techstack.map((tech) => (
            <small className="badge" key={tech}>
              {tech}
            </small>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
