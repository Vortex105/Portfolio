import { motion } from 'framer-motion';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCard from '../components/ProjectCard';
import TempusortPng from '../assets/projects/Tempusort.png';
import DevOdysseyPng from '../assets/projects/dev-odyssey.png';
import ResumeAnalysisPng from '../assets/projects/ResumeAnalysis.png';

export default function Projects() {
	const featured = [
		{
			title: 'Tempusort',
			description: 'A time management app to organize tasks and track productivity, also includes a study feature with Pomodoro technique integration.',
			live: 'https://tempusort.onrender.com',
			image: TempusortPng,
			tech: ['React', 'TailwindCSS', 'Vite', 'AI'],
		},
		{
			title: 'Dev Odyssey',
			description: 'A web application built for developers to track their projects and showcase their work.',
			live: 'https://devodyssey.onrender.com',
			github: 'https://github.com/Vortex105/Dev-Odyssey',
			image: DevOdysseyPng,
			tech: ['React', 'TailwindCSS', 'MERN'],
		},
		{
			title: 'ResumeMetric',
			description: 'A web application that analyzes resumes and provides feedback on how to improve them.',
			live: 'https://resumemetric.onrender.com',
			github: 'https://github.com/Vortex105/ResumeMetric',
			image: ResumeAnalysisPng,
			tech: ['React', 'TailwindCSS', 'Python', 'Express', 'NodeJS'],
		},
	];

	const others = [
		{
			title: 'Horizon Tours',
			description: 'A static website for a travel agency built with HTML, CSS, and JavaScript.',
			live: 'https://horizontours.onrender.com',
			github: 'https://github.com/Vortex105/Horizon-Chasers-Tours-website.git',
		},
		{
			title: 'Energem',
			description: 'A mockup landing page for an energy-saving company using modern web design principles.',
			live: 'https://energem.onrender.com',
			github: 'https://github.com/Vortex105/Energem.git',
		},
	];

	return (
		<section id="projects" className="py-24 px-6 bg-slate-900">
			<div className="max-w-6xl mx-auto">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
						My <span className="text-cyan-400">Projects</span>
					</h2>
					<div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
				</motion.div>

				{/* Featured Projects */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-20"
				>
					<h3 className="text-2xl font-bold text-white mb-8 text-center">
						Featured Projects
					</h3>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{featured.map((proj, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								viewport={{ once: true }}
							>
								<FeaturedProject {...proj} />
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Other Projects */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h3 className="text-2xl font-bold text-white mb-8 text-center">
						Other Projects
					</h3>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{others.map((proj, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								viewport={{ once: true }}
							>
								<ProjectCard {...proj} />
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
