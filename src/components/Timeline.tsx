import "@/styles/timeline.scss";

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div
          className={`timeline__item timeline__item--${
            index % 2 == 0 ? "left" : "right"
          }`}
        >
          <small className="timeline__date">{item.date}</small>
          <div className="timeline__content">
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
              <small className="timeline__featured">
                <strong>Öne Çıkan: </strong> <span>{item.featured}</span>
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
