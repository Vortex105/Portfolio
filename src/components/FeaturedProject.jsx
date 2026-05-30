import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const FeaturedProject = ({ title, description, github, live, image, tech }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			whileHover={{ y: -10 }}
			className="group h-full flex flex-col border border-slate-600/50 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-400/30 transition-all shadow-lg hover:shadow-cyan-500/10"
		>
			{/* Image Section */}
			{image && (
				<div className="h-56 overflow-hidden bg-slate-700/50">
					<motion.img
						src={image}
						alt={title}
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
					/>
				</div>
			)}

			{/* Content Section */}
			<div className="flex-1 p-6 flex flex-col">
				<h3 className="text-xl font-bold text-white mb-2">{title}</h3>
				<p className="text-slate-300 text-sm leading-relaxed flex-grow mb-4">
					{description}
				</p>

				{/* Tech Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{tech.map((item, index) => (
						<span
							key={index}
							className="bg-cyan-400/10 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-400/20"
						>
							{item}
						</span>
					))}
				</div>

				{/* Links */}
				<div className="flex gap-3">
					<motion.a
						href={live}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-4 py-2 text-sm rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/25"
					>
						<FaExternalLinkAlt size={14} />
						Live
					</motion.a>
					{github && (
						<motion.a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex-1 flex items-center justify-center gap-2 border border-slate-500 hover:border-cyan-400 hover:bg-slate-700/50 text-slate-300 hover:text-cyan-400 px-4 py-2 text-sm rounded-lg font-semibold transition-all"
						>
							<FaGithub size={14} />
							Repo
						</motion.a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default FeaturedProject;
