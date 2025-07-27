import React from 'react';
import LandingLayout from '../layouts/LandingLayout';

const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      <section id="about">
        <h2>Welcome!</h2>
        <p>This is a basic landing page for your portfolio. Add your content here.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: youremail@example.com</p>
      </section>
    </LandingLayout>
  );
};

export default LandingPage;
