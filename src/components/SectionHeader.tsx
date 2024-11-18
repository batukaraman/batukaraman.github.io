function SectionHeader({ text }) {
  return (
    <div className="section-header">
      <h3 className="section-header__title">{text}</h3>
      <span className="section-header__shadow">{text}</span>
    </div>
  );
}

export default SectionHeader;
