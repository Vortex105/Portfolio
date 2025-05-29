import { motion } from 'framer-motion';
import {
	FaArrowRight,
	FaReact,
	FaJsSquare,
	FaNodeJs,
	FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-900 px-6 text-white"
		>
			<div className="max-w-4xl text-center space-y-6">
				<motion.h1
					className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Hey, I’m <span className="text-cyan-500">Seseshe</span>
				</motion.h1>

				<motion.p
					className="text-zinc-400 max-w-xl mx-auto text-lg sm:text-xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, delay: 0.3 }}
				>
					A Frontend Developer turning caffeine and ideas into slick UIs.
					Obsessed with performance, pixel perfection, and React sauce.
				</motion.p>

				<motion.Link
					to="/projects"
					className="inline-flex items-center gap-2 text-sm sm:text-base bg-cyan-600 hover:bg-cyan-500 transition-all px-6 py-3 rounded-full font-semibold shadow-lg"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.6, duration: 0.4 }}
				>
					See My Work <FaArrowRight className="ml-1" />
				</motion.Link>
				<div className="mt-8 flex justify-center gap-6 text-3xl text-cyan-400">
					<FaReact title="React" />
					<FaJsSquare title="JavaScript" />
					<FaNodeJs title="Node.js" />
					<FaGithub title="GitHub" />
				</div>
			</div>
		</section>
	);
}
