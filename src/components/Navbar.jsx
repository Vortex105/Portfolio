import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: 'Home', id: 'hero' },
		{ name: 'About', id: 'about' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Contact', id: 'contact' },
	];

	const toggleMenu = () => setIsOpen(!isOpen);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	return (
		<header className="w-full fixed top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 text-white shadow-lg">
			<div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
				<button
					onClick={() => scrollToSection('hero')}
					className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 hover:from-blue-300 hover:to-cyan-200 transition cursor-pointer"
				>
					SESESHE
				</button>

				{/* Desktop Links */}
				<nav className="hidden md:flex space-x-8 text-sm font-medium">
					{navLinks.map((link) => (
						<button
							key={link.name}
							onClick={() => scrollToSection(link.id)}
							className="relative text-white/80 hover:text-white transition-colors duration-200 group"
						>
							{link.name}
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
						</button>
					))}
				</nav>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden">
					<button
						className="cursor-pointer text-white/80 hover:text-white transition"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Nav */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.25 }}
						className="md:hidden bg-white/5 backdrop-blur-xl border-t border-white/10 px-4 py-2"
					>
						<ul className="flex flex-col space-y-3 text-center">
							{navLinks.map((link) => (
								<li key={link.name}>
									<button
										onClick={() => scrollToSection(link.id)}
										className="block w-full py-2 text-white/80 hover:text-white transition"
									>
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
