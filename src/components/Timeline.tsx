import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "@/styles/timeline.scss";

export interface TimelineItem {
  image: string;
  title: string;
  subtitle: string;
  featured?: string;
  description?: string;
  date: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

function Timeline({ items }: TimelineProps) {
  useScrollAnimation(".leftToRight", {
    initial: { opacity: "0", transform: "translateX(-50%)" },
    whileInView: {
      opacity: "1",
      transform: "translateX(0)",
      transition: "all 1s ease-in-out",
    },
  });

  useScrollAnimation(".rightToLeft", {
    initial: { opacity: "0", transform: "translateX(50%)" },
    whileInView: {
      opacity: "1",
      transform: "translateX(0)",
      transition: "all 1s ease-in-out",
    },
  });

  useScrollAnimation(".opacity", {
    initial: { opacity: "0" },
    whileInView: {
      opacity: "1",
      transition: "all 1s ease-in-out",
    },
  });

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div
          key={index}
          className={`timeline__item timeline__item--${
            index % 2 == 0 ? "left" : "right"
          }`}
        >
          <small className="timeline__date opacity">{item.date}</small>
          <div
            className={`timeline__content ${
              index % 2 == 0 ? "leftToRight" : "rightToLeft"
            }`}
          >
            <div className="timeline__header">
              <img src={item.image} alt="" className="timeline__image" />
              <div className="timeline__text">
                <h5 className="timeline__title">{item.title}</h5>
                <span className="timeline__subtitle">{item.subtitle}</span>
              </div>
            </div>
            <div className="timeline__body">
              {item.description && (
                <p className="timeline__description">{item.description}</p>
              )}
              {item.featured && (
                <small className="timeline__featured">
                  <strong>Öne Çıkan: </strong> <span>{item.featured}</span>
                </small>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
