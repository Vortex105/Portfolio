import React from 'react';
import { motion } from 'framer-motion';
import {
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';
import avatar from '../assets/avatar.png'; // replace with your image path

const stackIcons = [
	{ icon: <FaReact />, name: 'React' },
	{ icon: <FaJsSquare />, name: 'JavaScript' },
	{ icon: <FaHtml5 />, name: 'HTML5' },
	{ icon: <FaCss3Alt />, name: 'CSS3' },
	{ icon: <SiTailwindcss />, name: 'Tailwind' },
	{ icon: <SiVite />, name: 'Vite' },
	{ icon: <FaGithub />, name: 'GitHub' },
];

const timeline = [
	{ year: '2024', text: 'Started learning web development' },
	{ year: '2024', text: 'Built a quiz app and deployed It' },
	{ year: '2024', text: 'Started learning tailwindcss' },
	{ year: '2025', text: 'Started with ReactJS' },
];

const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="max-w-5xl mx-auto px-6 py-16 text-white"
			id="about"
		>
			{/* HEADER */}
			<div className="flex flex-col md:flex-row items-center gap-8">
				<img
					src={avatar}
					alt="My Avatar"
					className="w-40 h-40 rounded-full object-cover border-4 border-neutral-700 aspect-square"
				/>

				<div>
					<h1 className="text-4xl font-bold mb-3">About Me</h1>
					<p className="text-gray-300 leading-relaxed">
						I'm a frontend developer with a focus on building slick,
						user-friendly web apps using React, Tailwind, and motion libraries.
						I started this journey in 2024 and haven’t looked back since.
					</p>
				</div>
			</div>

			{/* TECH STACK */}
			<div className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-4xl text-blue-400">
					{stackIcons.map((tech, i) => (
						<div
							key={i}
							className="flex flex-col items-center gap-1 hover:scale-110 transition"
						>
							{tech.icon}
							<span className="text-sm text-gray-300">{tech.name}</span>
						</div>
					))}
				</div>
			</div>

			{/* TIMELINE */}
			<div className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">My Journey</h2>
				<div className="border-l-2 border-neutral-700 pl-4 space-y-4">
					{timeline.map((item, i) => (
						<div key={i}>
							<h3 className="text-lg font-medium text-blue-400">{item.year}</h3>
							<p className="text-gray-300">{item.text}</p>
						</div>
					))}
				</div>
			</div>

			{/* GOALS */}
			<div className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">What’s Next</h2>
				<p className="text-gray-300 leading-relaxed mb-6">
					I’m open to internships, freelance projects, and collaborative
					opportunities. I want to keep growing, learn backend tools eventually,
					and build things that solve real problems.
				</p>
				<a
					href="/src/assets/resume.pdf"
					download
					className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition"
				>
					Download Resume
				</a>
			</div>
		</motion.section>
	);
};

export default About;
