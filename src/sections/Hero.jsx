import { motion } from 'framer-motion';
import { FaArrowDown, FaReact, FaJsSquare, FaNodeJs, FaGithub } from 'react-icons/fa';

export default function Hero() {
	const scrollToProjects = () => {
		document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center px-6 text-white pt-20 relative"
		>
			<div className="max-w-4xl text-center space-y-8 relative z-10">
				{/* Main Heading */}
				<motion.h1
					className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Hey, I'm{' '}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300">
						Seseshe
					</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, delay: 0.3 }}
				>
					A Frontend Developer turning caffeine and ideas into slick UIs. Obsessed with performance, pixel perfection, and React sauce.
				</motion.p>

				{/* Tech Stack Icons */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.6, duration: 0.4 }}
					className="flex justify-center gap-8 text-4xl text-white/60 flex-wrap"
				>
					<motion.div whileHover={{ scale: 1.2, color: '#60a5fa' }} className="cursor-pointer transition">
						<FaReact title="React" />
					</motion.div>
					<motion.div whileHover={{ scale: 1.2, color: '#60a5fa' }} className="cursor-pointer transition">
						<FaJsSquare title="JavaScript" />
					</motion.div>
					<motion.div whileHover={{ scale: 1.2, color: '#60a5fa' }} className="cursor-pointer transition">
						<FaNodeJs title="Node.js" />
					</motion.div>
					<motion.div whileHover={{ scale: 1.2, color: '#60a5fa' }} className="cursor-pointer transition">
						<FaGithub title="GitHub" />
					</motion.div>
				</motion.div>

				{/* Call to Action */}
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.4 }}
					onClick={scrollToProjects}
					className="inline-flex items-center gap-3 text-base sm:text-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-xl border border-blue-400/30 hover:border-blue-400/50 transition-all px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-blue-500/20"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Explore My Work
					<FaArrowDown className="animate-bounce" />
				</motion.button>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
			>
				<FaArrowDown className="text-blue-400/60 text-2xl" />
			</motion.div>
		</section>
	);
}
