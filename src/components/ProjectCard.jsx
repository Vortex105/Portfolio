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
			className="bg-white/5 backdrop-blur-xl border border-blue-400/20 p-6 rounded-2xl hover:border-blue-400/50 hover:bg-white/10 shadow-lg hover:shadow-blue-500/20 transition-all h-full flex flex-col"
		>
			<h3 className="text-lg font-bold text-white mb-2">{title}</h3>
			<p className="text-white/70 text-sm leading-relaxed flex-grow mb-4">
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
						className="flex items-center gap-2 text-sm text-blue-400/80 hover:text-blue-300 transition"
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
						className="flex items-center gap-2 text-sm text-blue-400/80 hover:text-blue-300 transition"
					>
						<FaExternalLinkAlt size={16} />
						Live
					</motion.a>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
