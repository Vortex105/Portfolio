import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, live, github }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			whileHover={{ y: -8 }}
			className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/10 transition-all h-full flex flex-col"
		>
			<h3 className="text-lg font-bold text-white mb-2">{title}</h3>
			<p className="text-slate-300 text-sm leading-relaxed flex-grow mb-4">
				{description}
			</p>

			<div className="flex gap-3 flex-wrap">
				{github && (
					<motion.a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
					>
						<FaGithub size={16} />
						Repository
					</motion.a>
				)}
				{live && (
					<motion.a
						href={live}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
					>
						<FaExternalLinkAlt size={16} />
						Live Demo
					</motion.a>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
