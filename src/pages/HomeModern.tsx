import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sections = [
	{
		title: 'Welcome',
		content:
			'Hi, I am Tania Chib. This is my modern portfolio inspired by GSAP demo apps.',
	},
	{
		title: 'Showcase',
		content: 'Check out my interactive projects and creative work below.',
	},
	{
		title: 'Skills',
		content: 'JavaScript, React, GSAP, Node.js, UI/UX, and more.',
	},
	{
		title: 'Contact',
		content: 'Let’s connect and build something amazing together!',
	},
];

const HomeModern: React.FC = () => {
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	useEffect(() => {
		sectionRefs.current.forEach((ref, i) => {
			if (ref) {
				gsap.from(ref, {
					opacity: 0,
					y: 100,
					scale: 0.8,
					rotate: i % 2 === 0 ? 8 : -8,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: ref,
						start: 'top 80%',
						scrub: true,
					},
				});
			}
		});
	}, []);
	return (
		<div
			style={{
				minHeight: '100vh',
				background:
					'radial-gradient(circle at 20% 30%, #00e6d0 0%, #232526 40%, #414345 100%)',
				position: 'relative',
				color: '#f3f3f3',
				fontFamily: 'Segoe UI, Roboto, Arial, sans-serif',
				overflow: 'hidden',
			}}
		>
			{/* Animated floating shapes */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			>
				<div
					className="floating-shape"
					style={{
						position: 'absolute',
						top: '10%',
						left: '5%',
						width: 80,
						height: 80,
						borderRadius: '50%',
						background: 'rgba(0,230,208,0.18)',
						filter: 'blur(2px)',
						animation: 'float1 8s infinite alternate',
					}}
				/>
				<div
					className="floating-shape"
					style={{
						position: 'absolute',
						top: '60%',
						left: '80%',
						width: 120,
						height: 120,
						borderRadius: '50%',
						background: 'rgba(178,254,250,0.15)',
						filter: 'blur(2px)',
						animation: 'float2 10s infinite alternate',
					}}
				/>
				<div
					className="floating-shape"
					style={{
						position: 'absolute',
						top: '40%',
						left: '40%',
						width: 60,
						height: 60,
						borderRadius: '50%',
						background: 'rgba(0,230,208,0.12)',
						filter: 'blur(2px)',
						animation: 'float3 12s infinite alternate',
					}}
				/>
			</div>
			<style>{`
			@keyframes float1 { 0% { transform: translateY(0); } 100% { transform: translateY(40px) scale(1.1); } }
			@keyframes float2 { 0% { transform: translateY(0); } 100% { transform: translateY(-60px) scale(1.2); } }
			@keyframes float3 { 0% { transform: translateY(0); } 100% { transform: translateY(30px) scale(1.05); } }
			`}</style>
			<header
				style={{
					textAlign: 'center',
					padding: '2rem 1rem 1rem 1rem',
					background: 'rgba(30, 30, 40, 0.85)',
					boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
					borderBottomLeftRadius: '24px',
					borderBottomRightRadius: '24px',
				}}
			>
				<h1
					style={{
						fontSize: '3rem',
						color: '#00e6d0',
						fontWeight: 700,
					}}
				>
					Tania Chib
				</h1>
				<h2
					style={{
						fontSize: '1.5rem',
						color: '#b2fefa',
						fontWeight: 400,
					}}
				>
					Modern Portfolio
				</h2>
			</header>
			<main
				style={{
					maxWidth: '900px',
					margin: '2rem auto',
					padding: '0 1rem',
				}}
			>
				{sections.map((sec, i) => (
					<div
						key={i}
						ref={(el) => {
							sectionRefs.current[i] = el;
						}}
						style={{
							background: 'rgba(255,255,255,0.07)',
							borderRadius: '18px',
							boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
							marginBottom: '2rem',
							padding: '2rem 1.5rem',
							transition: 'box-shadow 0.2s',
						}}
					>
						<h2
							style={{
								color: '#00e6d0',
								marginBottom: '1rem',
								fontSize: '1.5rem',
								letterSpacing: '1px',
							}}
						>
							{sec.title}
						</h2>
						<p style={{ fontSize: '1.1rem' }}>{sec.content}</p>
					</div>
				))}
			</main>
			<footer
				style={{
					textAlign: 'center',
					padding: '1.2rem 0 0.7rem 0',
					color: '#b2fefa',
					fontSize: '1rem',
				}}
			>
				&copy; {new Date().getFullYear()} Tania Chib
			</footer>
		</div>
	);
};
export default HomeModern;
