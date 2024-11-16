import "@/styles/hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <span className="hero__greeting">Merhaba, ben</span>
        <h1 className="hero__name">Batuhan Karaman</h1>
        <strong className="hero__title">
          <div className="typewriter">
            <span>Frontend Developer</span>
            <span>Tutor</span>
            <span>UI/UX Designer</span>
            <span>Content Creator</span>
            <span>Web Developer</span>
          </div>
        </strong>
      </div>
      <div className="hero__image">
        <div className="blob"></div>
      </div>
    </section>
  );
}

export default Hero;
