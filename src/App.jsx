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
		<div className="bg-[#0a0e27] text-white min-h-screen font-sans">
			<Navbar />

			<Hero />
			<About />
			<Projects />
			<Contact />

			<Footer />

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
