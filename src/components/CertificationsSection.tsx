import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { name: 'React Developer', issuer: 'Coursera', year: 2024 },
  { name: 'JavaScript Mastery', issuer: 'Udemy', year: 2023 },
  { name: 'Node.js Specialist', issuer: 'edX', year: 2025 },
];

const CertificationsSection: React.FC = () => {
  const certRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.from(certRef.current, {
      opacity: 0,
      rotate: 10,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: certRef.current,
        start: 'top 80%',
      },
    });
  }, []);
  return (
    <section id="certifications" ref={certRef} style={{ background: 'rgba(40,60,80,0.85)', border: '2px solid #00e6d0', borderRadius: '16px', padding: '2rem 1rem', margin: '2rem 0', boxShadow: '0 4px 24px #00e6d0', minHeight: '180px' }}>
      <h2 style={{ color: '#00e6d0', fontWeight: 700, fontSize: '1.6rem', marginBottom: '1rem', textShadow: '0 2px 8px #232526' }}>Certifications</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {certifications.map((cert, i) => (
          <li key={i} style={{ marginBottom: '1rem', background: 'rgba(60,80,100,0.95)', borderRadius: '12px', padding: '1.2rem', color: '#f3f3f3', boxShadow: '0 2px 12px #00e6d0', fontSize: '1.1rem', border: '1px solid #00e6d0' }}>
            <strong style={{ color: '#00e6d0', fontSize: '1.2rem', textShadow: '0 1px 4px #232526' }}>{cert.name}</strong> <br />
            <span style={{ color: '#b2fefa', fontWeight: 500 }}>{cert.issuer} &mdash; {cert.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CertificationsSection;
