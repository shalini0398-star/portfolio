import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Hello, I am</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p>{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="hero-img">
          {/* Above the fold, so it loads eagerly with high priority */}
          <img src="images/avatar.svg" alt={`Portrait of ${profile.name}`} width="320" height="320" fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
