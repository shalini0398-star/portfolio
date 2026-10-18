import { useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  ["about", "About Me"], ["projects", "Projects"], ["skills", "Skills"],
  ["resume", "Resume"], ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">{profile.name.split(" ")[0]}<span>.</span></a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
