import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const blogs = [
  { title: 'How I Built My Portfolio', date: 'July 2025', summary: 'A step-by-step guide to building a modern React portfolio.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' },
  { title: 'Top 5 JavaScript Tricks', date: 'June 2025', summary: 'My favorite JS tips for cleaner code.', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
  { title: 'React + GSAP Animations', date: 'May 2025', summary: 'How to add smooth animations to your React apps.', img: 'https://images.unsplash.com/photo-1508780709619-79562169bc64' },
];

const BlogSection: React.FC = () => {
  const blogRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (listRef.current) {
      gsap.to(listRef.current, {
        x: () => -(listRef.current!.scrollWidth - listRef.current!.clientWidth),
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: blogRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
          pin: true,
        },
      });
      gsap.utils.toArray('.blog-item').forEach((item: any, i) => {
        gsap.fromTo(item, {
          opacity: 0,
          scale: 0.8,
          y: 60,
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'left center',
            scrub: true,
          },
        });
      });
    }
  }, []);
  return (
    <section id="blog" ref={blogRef} style={{ overflow: 'hidden', position: 'relative', padding: '2rem 0' }}>
      <h2 style={{ marginBottom: '2rem' }}>Blog</h2>
      <ul ref={listRef} style={{ display: 'flex', gap: '2rem', listStyle: 'none', padding: 0, margin: 0, minWidth: '100vw' }}>
        {blogs.map((blog, i) => (
          <li className="blog-item" key={i} style={{ minWidth: '320px', background: '#222', borderRadius: '16px', padding: '1.5rem', color: '#b2fefa', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px #00e6d0', position: 'relative' }}>
            <img src={blog.img} alt={blog.title} style={{ width: '120px', height: '120px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 2px 8px #00e6d0', marginBottom: '1rem' }} />
            <h3 style={{ color: '#00e6d0', textAlign: 'center' }}>{blog.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#b2fefa', textAlign: 'center' }}>{blog.date}</p>
            <p style={{ textAlign: 'center' }}>{blog.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default BlogSection;
