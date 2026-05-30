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
			className="group h-full flex flex-col border border-blue-400/20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl hover:border-blue-400/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-blue-500/20"
		>
			{/* Image Section */}
			{image && (
				<div className="h-56 overflow-hidden bg-white/5">
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
				<p className="text-white/70 text-sm leading-relaxed flex-grow mb-4">
					{description}
				</p>

				{/* Tech Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{tech.map((item, index) => (
						<span
							key={index}
							className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-400/30 backdrop-blur"
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
						className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/50 hover:to-cyan-500/50 border border-blue-400/30 hover:border-blue-400/50 backdrop-blur text-white px-4 py-2 text-sm rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/10"
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
							className="flex-1 flex items-center justify-center gap-2 border border-white/20 hover:border-blue-400/50 hover:bg-white/10 text-white/70 hover:text-blue-300 px-4 py-2 text-sm rounded-lg font-semibold transition-all backdrop-blur"
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
