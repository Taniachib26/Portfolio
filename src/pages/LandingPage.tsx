import React, { useEffect, useRef } from 'react';
import LandingLayout from '../layouts/LandingLayout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogSection from '../components/BlogSection';
import GallerySection from '../components/GallerySection';
import CertificationsSection from '../components/CertificationsSection';
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS', level: 88 },
];

const funFacts = [
  '🌏 I love traveling and exploring new cultures.',
  '🎮 Gaming is my favorite way to relax.',
  '📚 I read tech blogs every day.',
  '🎧 Music keeps me focused while coding.',
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/', icon: '🐦' },
];

const timeline = [
  { year: '2022', event: 'Started B.Tech at Chandigarh University' },
  { year: '2023', event: 'Built my first React project' },
  { year: '2024', event: 'Interned at a tech startup' },
  { year: '2025', event: 'Launched my portfolio website' },
];

const interests = [
  '🖌️ UI/UX Design',
  '🤖 AI & Machine Learning',
  '🌐 Web Development',
  '📱 Mobile Apps',
  '🎥 Video Editing',
];

const achievements = [
  '🏆 Hackathon Winner 2024',
  '🎓 Dean’s List 2023',
  '💡 Published a tech blog',
];

const testimonials = [
  { name: 'Alex', text: 'Tania is a creative and dedicated developer. Her work always stands out!' },
  { name: 'Priya', text: 'Amazing collaborator and problem solver. Highly recommend working with her.' },
  { name: 'Rahul', text: 'Her portfolio is super inspiring and full of cool ideas.' },
];

const LandingPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(heroRef.current, { opacity: 0, y: -40, duration: 1, ease: 'power2.out' });
    gsap.from(socialsRef.current, { opacity: 0, scale: 0.5, duration: 1, delay: 0.2, ease: 'back.out(1.7)' });
    // Scroll animations
    [aboutRef, skillsRef, factsRef, projectsRef, contactRef, timelineRef, interestsRef, achievementsRef, testimonialsRef].forEach((ref, i) => {
      if (ref.current) {
        gsap.from(ref.current, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: 0.1 * i,
        });
      }
    });
    // Animate skill bars
    skills.forEach((skill, i) => {
      gsap.to(`.skill-bar-${i}`, {
        width: `${skill.level}%`,
        duration: 1.2,
        delay: 0.5 + i * 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
        },
      });
    });
  }, []);

  // Simple testimonials carousel
  const [testimonialIdx, setTestimonialIdx] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx(idx => (idx + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LandingLayout>
      <div ref={heroRef} style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1 style={{ fontSize: '2.8rem', color: '#00e6d0', fontWeight: 700 }}>Tania Chib</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#b2fefa', fontWeight: 400 }}>Student | Developer | Learner</h2>
        <p style={{ fontSize: '1.1rem', color: '#f3f3f3', marginTop: '0.5rem' }}>
          Building cool things with code and creativity.
        </p>
      </div>
      <div ref={socialsRef} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {socialLinks.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', margin: '0 1rem', textDecoration: 'none' }}>
            {link.icon}
          </a>
        ))}
      </div>
      <section id="about" ref={aboutRef}>
        <h2>About Me</h2>
        <p>🚀 Hi! I'm Tania, a tech enthusiast and student at Chandigarh University. I love building cool web apps and exploring new technologies.</p>
        <p>Fun Fact: I can code for hours with just coffee and good music!</p>
      </section>
      <section id="timeline" ref={timelineRef}>
        <h2>My Journey</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {timeline.map((item, i) => (
            <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#00e6d0', marginRight: '1rem' }}>{item.year}</span>
              <span>{item.event}</span>
            </li>
          ))}
        </ul>
      </section>
      <section id="skills" ref={skillsRef}>
        <h2>Skills</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {skills.map((skill, i) => (
            <li key={skill.name} style={{ marginBottom: '1rem' }}>
              <span style={{ fontWeight: 500 }}>{skill.name}</span>
              <div style={{ background: '#222', borderRadius: '8px', overflow: 'hidden', height: '12px', marginTop: '4px', boxShadow: '0 1px 4px #00e6d0' }}>
                <div className={`skill-bar-${i}`} style={{ background: 'linear-gradient(90deg, #00e6d0, #b2fefa)', height: '100%', width: '0%' }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="interests" ref={interestsRef}>
        <h2>Interests</h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
          {interests.map((interest, i) => (
            <li key={i} style={{ background: '#222', borderRadius: '8px', padding: '0.5rem 1rem', color: '#b2fefa', fontWeight: 500 }}>{interest}</li>
          ))}
        </ul>
      </section>
      <section id="achievements" ref={achievementsRef}>
        <h2>Achievements</h2>
        <ul>
          {achievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
      </section>
      <section id="fun-facts" ref={factsRef}>
        <h2>Fun Facts</h2>
        <ul>
          {funFacts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      </section>
      <section id="projects" ref={projectsRef}>
        <h2>Projects</h2>
        <ul>
          <li><strong>Portfolio Website:</strong> This site, built with React, Vite, and GSAP for smooth animations.</li>
          <li><strong>Weather App:</strong> Real-time weather updates with animated transitions.</li>
          <li><strong>Quiz Game:</strong> Interactive quizzes with score tracking and fun effects.</li>
        </ul>
        <p>✨ More projects coming soon. Stay tuned!</p>
      </section>
      <section id="testimonials" ref={testimonialsRef}>
        <h2>Testimonials</h2>
        <div style={{ background: '#222', borderRadius: '12px', padding: '1rem', color: '#b2fefa', textAlign: 'center', minHeight: '80px' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
            "{testimonials[testimonialIdx].text}"
          </p>
          <p style={{ fontWeight: 700, marginTop: '0.5rem' }}>- {testimonials[testimonialIdx].name}</p>
        </div>
      </section>
      <section id="contact" ref={contactRef}>
        <h2>Contact</h2>
        <p>Email: chibtania@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        <p>Let's connect and create something awesome together!</p>
        <a href="#" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.7rem 1.5rem', background: 'linear-gradient(90deg, #00e6d0, #b2fefa)', color: '#232526', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px #00e6d0', transition: 'transform 0.2s' }}>Download Resume</a>
      </section>
      <BlogSection />
      <GallerySection />
      <CertificationsSection />
    </LandingLayout>
  );
};

export default LandingPage;
