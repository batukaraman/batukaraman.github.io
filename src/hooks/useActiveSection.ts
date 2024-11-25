import { useState, useEffect } from "react";

export const links = [
  { label: "Ana", href: "#root" },
  { label: "Hakkımda", href: "#about" },
  { label: "Beceriler", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "Yeterlilik", href: "#qualification" },
  { label: "Hizmetler", href: "#services" },
  { label: "İletişim", href: "#contact" },
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
