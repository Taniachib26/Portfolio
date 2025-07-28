import React from 'react';
import './LandingLayout.css';

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="landing-layout">
      <header className="landing-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="landing-main">
        <section id="about" className="landing-section">
          <h2>About Me</h2>
          <p>I'm a dedicated learner with a keen interest in software development, web technologies, and innovation.</p>
        </section>
        <section id="education" className="landing-section">
          <h2>Education</h2>
          <p>Bachelor of Technology, Chandigarh University<br/>2022 - Present</p>
        </section>
        <section id="skills" className="landing-section">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
            <li>Problem Solving</li>
          </ul>
        </section>
        <section id="projects" className="landing-section">
          <h2>Projects</h2>
          <ul>
            <li><strong>Portfolio Website:</strong> This website, built with React and Vite.</li>
            <li><strong>Other Project:</strong> [Add your project here]</li>
          </ul>
        </section>
        <section id="contact" className="landing-section">
          <h2>Contact</h2>
          <p>Email: chibtania@gmail.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        </section>
        {children}
      </main>
      <footer className="landing-footer">
        &copy; {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
};

export default LandingLayout;
