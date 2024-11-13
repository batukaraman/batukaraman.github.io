import "@/styles/hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <span className="hero__greeting">Merhaba, ben</span>
        <h1 className="hero__name">Batuhan Karaman</h1>
        <h2 className="hero__title">Frontend Developer &amp; Tutor</h2>
      </div>
      <div className="hero__image">
        <div className="blob"></div>
      </div>
    </section>
  );
}

export default Hero;
