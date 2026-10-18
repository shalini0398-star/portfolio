import { projects } from "../data/portfolio";
import LazyImage from "../components/LazyImage";

export default function Projects() {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map(p => (
            <article className="project-card" key={p.title}>
              <LazyImage src={p.image} alt={`${p.title} preview`} width="640" height="400" />
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
                <div className="project-links">
                  <a href={p.demo}>Live Demo</a>
                  <a href={p.code} target="_blank" rel="noreferrer">Source Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
