import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';

const App = () => {
	return (
		<div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white min-h-screen font-sans relative overflow-x-hidden">
			{/* Animated Background Elements */}
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
				<div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			<div className="relative z-10">
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>

			<ToastContainer
				theme="dark"
				pauseOnHover
				closeOnClick
				position="top-center"
				transition={Slide}
				autoClose={3000}
			/>
		</div>
	);
};

export default App;
