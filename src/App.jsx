import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Education from "./components/Education";

function App() {
  return (
    <div className="font-sans text-white bg-black">
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        <section id="services">
          <Services />
        </section>
         <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
