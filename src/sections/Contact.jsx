import { useState } from "react";
import { profile } from "../data/portfolio";

const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!emailOk(form.email)) err.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) err.message = "Message must be at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;

    // No backend needed: open the visitor's email app with the message pre-filled.
    // (Swap for Netlify Forms / Formspree to receive messages directly.)
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div>
            <p className="lead">Have a project in mind or just want to say hello? Send me a message.</p>
            <p>📧 <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p>📍 {profile.location}</p>
            <p>🔗 <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
          </div>

          <form onSubmit={submit} noValidate className="contact-form">
            <label>Name
              <input name="name" value={form.name} onChange={change} aria-invalid={!!errors.name} autoComplete="name" />
              {errors.name && <small className="error">{errors.name}</small>}
            </label>
            <label>Email
              <input name="email" type="email" value={form.email} onChange={change} aria-invalid={!!errors.email} autoComplete="email" />
              {errors.email && <small className="error">{errors.email}</small>}
            </label>
            <label>Message
              <textarea name="message" rows="5" value={form.message} onChange={change} aria-invalid={!!errors.message} />
              {errors.message && <small className="error">{errors.message}</small>}
            </label>
            <button className="btn primary" type="submit">Send Message</button>
            {sent && <p className="success" role="status">Thanks! Your email app should open with the message ready to send.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
