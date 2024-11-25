import React, { useEffect, useRef, useState } from "react";
import "@/styles/tab.scss";

export type TabItemType = {
  name: string;
  element: React.ReactNode;
};

export type TabProps = {
  items: TabItemType[];
};

export default function Tab({ items }: TabProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabHeaderRef = useRef<HTMLDivElement>(null);
  const gliderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tabHeader = tabHeaderRef.current;
    const glider = gliderRef.current;

    if (tabHeader && glider) {
      const buttons = Array.from(tabHeader.querySelectorAll(".tab__button"));
      const activeButton = buttons[activeTab];
      const buttonRect = activeButton.getBoundingClientRect();
      const headerRect = tabHeader.getBoundingClientRect();

      glider.style.width = `${buttonRect.width}px`;
      glider.style.transform = `translateX(${
        buttonRect.left - headerRect.left
      }px)`;
    }
  }, [activeTab]);

  return (
    <div className="tab">
      <div className="tab__header" ref={tabHeaderRef}>
        {items.map((item, index) => (
          <span
            key={item.name}
            onClick={() => setActiveTab(index)}
            className={`${index === activeTab ? "active " : ""}tab__button`}
          >
            {item.name}
          </span>
        ))}
        <span className="tab__glider" ref={gliderRef}></span>
      </div>
      <div className="tab__body" key={items[activeTab].name}>
        {items[activeTab].element}
      </div>
    </div>
  );
}
