import { motion } from 'framer-motion';
import {
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaGithub,
	FaPython,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import avatar from '../assets/avatar2.png';

const stackIcons = [
	{ icon: <FaReact />, name: 'React' },
	{ icon: <FaJsSquare />, name: 'JavaScript' },
	{ icon: <FaHtml5 />, name: 'HTML5' },
	{ icon: <FaCss3Alt />, name: 'CSS3' },
	{ icon: <SiTailwindcss />, name: 'Tailwind' },
	{ icon: <FaPython />, name: 'Python' },
	{ icon: <SiExpress />, name: 'Express' },
];

export default function About() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="about"
			className="py-24 px-6 relative"
		>
			<div className="max-w-6xl mx-auto relative z-10">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
						About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
					</h2>
					<div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full" />
				</motion.div>

				{/* Bio Section */}
				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					<motion.img
						src={avatar}
						alt="My Avatar"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl shadow-blue-500/30 mx-auto border border-white/10"
					/>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<p className="text-xl text-white/80 leading-relaxed">
							I'm a frontend developer obsessed with creating interfaces that just <span className="text-blue-400 font-semibold">*click*</span>. Using React, Tailwind, and motion, I bring clean design + smooth interactions to life.
						</p>
						<p className="text-lg text-white/70 leading-relaxed">
							Started my coding journey in 2024, and the grind hasn't stopped since 🚀 I'm passionate about turning complex ideas into elegant, user-friendly solutions.
						</p>
					</motion.div>
				</div>

				{/* Tech Stack */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
				>
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
						Tech Stack
					</h3>
					<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
						{stackIcons.map((tech, i) => (
							<motion.div
								key={i}
								className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/10 transition-all cursor-default"
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ type: 'spring', stiffness: 300 }}
							>
								<span className="text-4xl text-blue-400/80 hover:text-blue-300 transition">{tech.icon}</span>
								<span className="text-xs text-white/70 text-center">{tech.name}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Skills Growth */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
						Skills Growth
					</h3>
					<div className="grid md:grid-cols-2 gap-6">
						{[
							{
								skill: 'Frontend Fundamentals',
								details: 'Mastered HTML, CSS, and JavaScript fundamentals through hands-on projects',
							},
							{
								skill: 'Interactive Development',
								details: 'Built and deployed a fully functional quiz application',
							},
							{
								skill: 'Modern CSS',
								details: 'Adopted Tailwind CSS for efficient, responsive styling',
							},
							{
								skill: 'React Development',
								details: 'Currently building dynamic web applications with React and modern tools',
							},
						].map((item, i) => (
							<motion.div
								key={i}
								variants={itemVariants}
								className="bg-white/5 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/50 p-6 rounded-xl transition-all"
								whileHover={{ y: -5, borderColor: 'rgba(96, 165, 250, 0.3)' }}
							>
								<h4 className="text-lg font-semibold text-blue-400 mb-2">
									{item.skill}
								</h4>
								<p className="text-white/70 text-sm leading-relaxed">
									{item.details}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
