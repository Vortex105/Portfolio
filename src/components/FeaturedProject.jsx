import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProject = ({ title, description, github, live, image, tech }) => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			
		>
			<div className="flex flex-col h-[500px] border border-neutral-700">
				{image && (
					<div className="h-[250px]">
						<img
							src={image}
							alt={title}
							className="w-full h-full object-cover"
						/>
					</div>
				)}
				<div className="flex-1 p-4 flex flex-col">
					<h3 className="text-xl font-semibold">{title}</h3>
					<p className="text-gray-300 mt-2 flex-grow overflow-y-auto">{description}</p>

					<div className="flex flex-wrap gap-2 mt-4">
						{tech.map((item, index) => (
							<span
								key={index}
								className="bg-[#1f1f1f] text-xs text-white px-3 py-1 rounded-full"
							>
								{item}
							</span>
						))}
					</div>

					<div className="mt-6 flex gap-4">
						<a
							href={live}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-700"
						>
							Live Demo
						</a>
						{github && (
							<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="border px-4 py-2 text-sm rounded hover:bg-white hover:text-black"
						>
							GitHub Repo
						</a>
						)}
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default FeaturedProject;
