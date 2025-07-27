import React from 'react';
import './LandingLayout.css';

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="landing-layout">
      <header className="landing-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="landing-main">{children}</main>
      <footer className="landing-footer">
        &copy; {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
};

export default LandingLayout;
