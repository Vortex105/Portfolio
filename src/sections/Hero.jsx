import { motion } from 'framer-motion';
import { FaArrowDown, FaReact, FaJsSquare, FaNodeJs, FaGithub } from 'react-icons/fa';

export default function Hero() {
	const scrollToProjects = () => {
		document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-6 text-white pt-20"
		>
			<div className="max-w-4xl text-center space-y-8">
				{/* Main Heading */}
				<motion.h1
					className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Hey, I'm <span className="text-cyan-400 animate-pulse">Seseshe</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
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
					className="flex justify-center gap-8 text-4xl text-cyan-400 flex-wrap"
				>
					<FaReact title="React" className="hover:scale-110 transition" />
					<FaJsSquare title="JavaScript" className="hover:scale-110 transition" />
					<FaNodeJs title="Node.js" className="hover:scale-110 transition" />
					<FaGithub title="GitHub" className="hover:scale-110 transition" />
				</motion.div>

				{/* Call to Action */}
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.4 }}
					onClick={scrollToProjects}
					className="inline-flex items-center gap-3 text-base sm:text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
				>
					Explore My Work
					<FaArrowDown className="animate-bounce" />
				</motion.button>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
			>
				<FaArrowDown className="text-cyan-400 text-2xl" />
			</motion.div>
		</section>
	);
}
