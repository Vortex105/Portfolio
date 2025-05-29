import React from 'react';

const FeaturedProject = ({ title, description, github, live, image, tech }) => {
	return (
		<section className="bg-[#0f0f0f] text-white p-6 rounded-xl border border-neutral-700 shadow-xl">
			<h2 className="text-2xl font-bold mb-4">Featured Project</h2>
			<div className="flex flex-col md:flex-row gap-6">
				{image && (
					<img
						src={image}
						alt={title}
						className="w-full md:w-1/2 rounded-lg object-cover border"
					/>
				)}
				<div className="flex-1">
					<h3 className="text-xl font-semibold">{title}</h3>
					<p className="text-gray-300 mt-2">{description}</p>

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
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="border px-4 py-2 text-sm rounded hover:bg-white hover:text-black"
						>
							GitHub Repo
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProject;
