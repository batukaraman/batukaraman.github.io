import { useRef } from "react";
import useActiveSection, { links } from "@/hooks/useActiveSection";
import useToggle from "@/hooks/useToggle";
import "@/styles/navigation.scss";

function Navigation() {
  const activeSection = useActiveSection();
  const navRef = useRef(null);

  const { isOpen } = useToggle({
    id: "navigation",
    elementRef: navRef,
  });

  return (
    <nav ref={navRef} className={`navigation ${isOpen ? "visible" : ""}`}>
      <ul className="navigation__body">
        {links.map((item) => (
          <li key={item.href} className="navigation__item">
            <a
              href={item.href}
              className={`navigation__link ${
                item.href === activeSection ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
