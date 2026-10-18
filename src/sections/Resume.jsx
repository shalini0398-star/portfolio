import { resume } from "../data/portfolio";

export default function Resume() {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-grid">
          <div>
            <h3>Experience</h3>
            {resume.experience.map(e => (
              <div className="timeline-item" key={e.title}>
                <h4>{e.title}</h4>
                <p className="muted">{e.place} · {e.period}</p>
                <ul>{e.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
              </div>
            ))}
          </div>
          <div>
            <h3>Education</h3>
            {resume.education.map(e => (
              <div className="timeline-item" key={e.title}>
                <h4>{e.title}</h4>
                <p className="muted">{e.place} · {e.period}</p>
              </div>
            ))}
            <a className="btn primary" href={resume.file} download>⬇ Download Resume (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  );
}
