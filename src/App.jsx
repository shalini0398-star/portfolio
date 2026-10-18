import { lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LazySection from "./components/LazySection";
import "./index.css";

// Each section is its own JS chunk, downloaded only when needed
const About    = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills   = lazy(() => import("./sections/Skills"));
const Resume   = lazy(() => import("./sections/Resume"));
const Contact  = lazy(() => import("./sections/Contact"));

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LazySection id="about"><About /></LazySection>
        <LazySection id="projects" minHeight={700}><Projects /></LazySection>
        <LazySection id="skills"><Skills /></LazySection>
        <LazySection id="resume"><Resume /></LazySection>
        <LazySection id="contact"><Contact /></LazySection>
      </main>
      <Footer />
    </>
  );
}
