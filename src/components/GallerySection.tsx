import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const images = [
  '/public/vite.svg',
  '/src/assets/react.svg',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
];

const GallerySection: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.from(galleryRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: galleryRef.current,
        start: 'top 80%',
      },
    });
  }, []);
  return (
    <section id="gallery" ref={galleryRef}>
      <h2>Gallery</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Gallery ${i}`} style={{ width: '120px', height: '120px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 2px 8px #00e6d0' }} />
        ))}
      </div>
    </section>
  );
};
export default GallerySection;
