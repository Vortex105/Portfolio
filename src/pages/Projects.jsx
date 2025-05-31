import React from 'react';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
	const featured = {
		title: 'Quiz App',
		description: 'Multiple-choice quiz app with scoring and results summary.',
		github: 'https://github.com/Vortex105/Quiz',
		live: 'https://quiz2-4wwj.onrender.com',
		image: './src/assets/projects/quiz.png', // optional
		tech: ['API', 'Javascript'],
	};

	const others = [
		{
			title: 'Weather App',
			description:
				'A React-based weather app with real-time data and animated UI.',
			github: 'https://github.com/Vortex105/AtmosLive',
		},
		{
			title: 'To-Do List',
			description:
				'Basic to-do list app with CRUD functionality using localStorage.',
			github: 'https://github.com/Vortex105/To-do-list',
		},
		{
			title: 'Stopwatch',
			description:
				'A minimal stopwatch with start, pause, and reset functions.',
			github: 'https://github.com/Vortex105/Stopwatch',
		},
	];

	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<FeaturedProject {...featured} />

			<motion.section
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="mt-12"
			>
				<h2 className="text-2xl text-white font-bold mb-6">Other Projects</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{others.map((proj, i) => (
						<ProjectCard key={i} {...proj} />
					))}
				</div>
			</motion.section>
		</main>
	);
};

export default Projects;
