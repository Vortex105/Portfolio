import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 bg-[#1e293b] shadow-lg">
			<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
				<h1 className="text-2xl font-bold text-cyan-400">Seseshe</h1>
				<div className="space-x-6 text-lg">
					<Link to="/" className="hover:text-cyan-400 transition-all">
						Home
					</Link>
					<Link to="/projects" className="hover:text-cyan-400 transition-all">
						Projects
					</Link>
					<Link to="/about" className="hover:text-cyan-400 transition-all">
						About
					</Link>
					<Link to="/contact" className="hover:text-cyan-400 transition-all">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
