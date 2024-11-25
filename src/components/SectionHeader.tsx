import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function SectionHeader({ text }) {
  useScrollAnimation(".leftToRight", {
    initial: { opacity: "0", transform: "translateX(-20%)" },
    whileInView: {
      opacity: "1",
      transform: "translateX(0)",
      transition: "all 1s ease-in-out",
    },
  });

  return (
    <div className="section-header">
      <h3 className="section-header__title leftToRight">{text}</h3>
      <span className="section-header__shadow">{text}</span>
    </div>
  );
}

export default SectionHeader;
