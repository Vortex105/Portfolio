import React from 'react';

const ProjectCard = ({ title, description, github }) => {
	return (
		<div className="bg-[#1a1a1a] p-5 rounded-lg border border-neutral-700 shadow-[inset_4px_-4px_3px_rgba(0,0,0,0.3)] hover:scale-103 cursor-default transition">
			<h3 className="text-lg font-semibold text-white">{title}</h3>
			<p className="text-gray-400 text-sm mt-2">{description}</p>

			<div className="mt-4">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-blue-400 underline hover:text-blue-500"
				>
					GitHub Repo
				</a>
				<p className="text-xs text-gray-500 mt-1">Not deployed by choice</p>
			</div>
		</div>
	);
};

export default ProjectCard;
