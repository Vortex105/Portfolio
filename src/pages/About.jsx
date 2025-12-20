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
import avatar from '../assets/avatar2.png'; 

const stackIcons = [
	{ icon: <FaReact />, name: 'React' },
	{ icon: <FaJsSquare />, name: 'JavaScript' },
	{ icon: <FaHtml5 />, name: 'HTML5' },
	{ icon: <FaCss3Alt />, name: 'CSS3' },
	{ icon: <SiTailwindcss />, name: 'Tailwind' },
	// { icon: <SiVite />, name: 'Vite' },
	// { icon: <FaGithub />, name: 'GitHub' },
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
 <div className="relative flex flex-col md:flex-row items-center md:items-stretch gap-10 p-8 rounded-2xl overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-0" />

      {/* Image Section */}
      <img
        src={avatar}
        alt="My Avatar"
        className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-xl"
      />

      {/* Text Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center text-left space-y-6 max-w-xl"
      >
        <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
          About Me
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed font-medium text-justify md:text-left">
          I’m a frontend developer obsessed with creating interfaces that just
          *click*. Using React, Tailwind, and motion, I bring clean design +
          smooth interactions to life. Started in 2024, and the grind hasn’t
          stopped since 🚀
        </p>
      </motion.div>
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

			{/* SKILLS GROWTH */}
			<div className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">Skills Growth</h2>
				<div className="grid gap-4">
					{[
						{ skill: "Frontend Fundamentals", details: "Mastered HTML, CSS, and JavaScript fundamentals through hands-on projects" },
						{ skill: "Interactive Development", details: "Built and deployed a fully functional quiz application" },
						{ skill: "Modern CSS", details: "Adopted Tailwind CSS for efficient, responsive styling" },
						{ skill: "React Development", details: "Currently building dynamic web applications with React and modern tools" }
					].map((item, i) => (
						<div key={i} className="bg-neutral-800/50 p-4 rounded-lg">
							<h3 className="text-lg font-medium text-blue-400">{item.skill}</h3>
							<p className="text-gray-300">{item.details}</p>
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
