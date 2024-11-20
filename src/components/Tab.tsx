import { useState } from "react";
import "@/styles/tab.scss";

export default function Tab({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab">
      <div className="tab__header">
        {items.map((item, index) => (
          <h4
            key={item.name}
            onClick={() => setActiveTab(index)}
            className={`${index === activeTab ? "active " : ""}tab__button`}
          >
            {item.name}
          </h4>
        ))}
      </div>
      <div className="tab__body">{items[activeTab].element}</div>
    </div>
  );
}
