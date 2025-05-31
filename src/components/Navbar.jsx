import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' },
	];

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur text-white shadow-md mb-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
				<Link to="/" className="text-2xl font-bold  text-teal-400">
					SESESHE
				</Link>

				{/* Desktop Links */}
				<nav className="hidden md:flex space-x-8 text-sm font-medium">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.path}
							className="text-lg hover:text-teal-300 transition duration-200"
						>
							{link.name}
						</Link>
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
									<Link
										to={link.path}
										onClick={() => setIsOpen(false)}
										className="block py-2 text-white hover:text-teal-300 "
									>
										{link.name}
									</Link>
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
