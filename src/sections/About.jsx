import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div>
            {profile.about.map((p, i) => <p key={i} className="lead">{p}</p>)}
            <p className="muted">📍 {profile.location}</p>
          </div>
          <div className="facts">
            {profile.facts.map(f => (
              <div className="fact" key={f.label}>
                <strong>{f.value}</strong><span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
