import { useState, useEffect } from "react";

export const links = [
  { label: "Ana", href: "#root" },
  { label: "Hakkımda", href: "#about" },
  { label: "Beceriler", href: "#skills" },
  { label: "Yeterlilik", href: "#qualifıcation" },
  { label: "Hizmetler", href: "#services" },
  { label: "Projeler", href: "#projects" },
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>(
    links[0]?.href || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = links.map((link) => {
        const element = document.querySelector(link.href);
        if (!element) return { href: link.href, top: Infinity };
        const rect = element.getBoundingClientRect();
        return { href: link.href, top: rect.top + window.scrollY + 100 };
      });

      const visibleSection =
        sections.find((section) => section.top >= scrollPosition) ||
        sections[0];
      setActiveSection(visibleSection.href);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return activeSection;
}
