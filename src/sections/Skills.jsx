import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map(g => (
            <div className="skill-group" key={g.group}>
              <h3>{g.group}</h3>
              {g.items.map(s => (
                <div className="skill" key={s.name}>
                  <div className="skill-head"><span>{s.name}</span><span>{s.level}%</span></div>
                  <div className="bar" role="progressbar" aria-valuenow={s.level} aria-valuemin="0" aria-valuemax="100" aria-label={s.name}>
                    <div className="fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
