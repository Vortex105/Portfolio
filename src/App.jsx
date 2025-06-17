import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';

const App = () => {
	return (
		<div className="bg-[#0f172a] text-white min-h-screen font-sans">
			<Navbar />

			<div className="py-10">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
			<ToastContainer
				theme="dark"
				pauseOnHover
				closeOnClick
				position="top-center"
				transition={Slide}
				autoClose={3000}
			/>

			<footer className="w-full text-gray-600 text-md bg-black/75 backdrop-blur py-5 text-center fixed bottom-0">
				Copyright © {new Date().getFullYear()} Seseshe
			</footer>
		</div>
	);
};

export default App;
