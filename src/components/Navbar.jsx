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
		<header className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur text-white shadow-md">
			<div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
				<button
					onClick={() => scrollToSection('hero')}
					className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
				>
					SESESHE
				</button>

				{/* Desktop Links */}
				<nav className="hidden md:flex space-x-8 text-sm font-medium">
					{navLinks.map((link) => (
						<button
							key={link.name}
							onClick={() => scrollToSection(link.id)}
							className="text-lg hover:text-cyan-300 transition duration-200"
						>
							{link.name}
						</button>
					))}
				</nav>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden">
					<button
						className="cursor-pointer"
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
						className="md:hidden bg-black/90 px-4 py-2"
					>
						<ul className="flex flex-col space-y-3 text-center">
							{navLinks.map((link) => (
								<li key={link.name}>
									<button
										onClick={() => scrollToSection(link.id)}
										className="block w-full py-2 text-white hover:text-cyan-300"
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
