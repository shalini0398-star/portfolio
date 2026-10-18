import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
