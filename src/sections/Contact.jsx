import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaXTwitter, FaGithub, FaEnvelope } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		const params = {
			name: data.name.trim(),
			time: format(new Date(), 'do MMMM, yyyy. HH:mm:ss'),
			email: data.email.trim(),
			message: data.message.trim(),
		};
		try {
			await emailjs.send(
				'service_7opo7f6',
				'template_0chpqos',
				params,
				'FFwfpPtFqrEvEWUNC'
			);
			toast.success("Message sent successfully! I'll get back to you ASAP.");
			reset();
		} catch (error) {
			toast.error('Oops! Something went wrong. Please try again');
		}
	};

	return (
		<section id="contact" className="py-24 px-6 relative">
			<div className="max-w-4xl mx-auto relative z-10">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
						Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Connect</span>
					</h2>
					<p className="text-white/70 text-lg">
						Have a project in mind or just want to chat? Get in touch!
					</p>
					<div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full mt-4" />
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{/* Contact Info Cards */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="bg-white/5 backdrop-blur-xl border border-blue-400/20 p-6 rounded-xl text-center hover:border-blue-400/50 hover:bg-white/10 transition-all"
						whileHover={{ y: -5 }}
					>
						<FaEnvelope className="text-3xl text-blue-400 mx-auto mb-3" />
						<h3 className="text-lg font-semibold text-white mb-2">Email</h3>
						<a
							href="mailto:seseshe14@gmail.com"
							className="text-white/70 hover:text-blue-400 transition"
						>
							seseshe14@gmail.com
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="bg-white/5 backdrop-blur-xl border border-blue-400/20 p-6 rounded-xl text-center hover:border-blue-400/50 hover:bg-white/10 transition-all"
						whileHover={{ y: -5 }}
					>
						<FaXTwitter className="text-3xl text-blue-400 mx-auto mb-3" />
						<h3 className="text-lg font-semibold text-white mb-2">Twitter</h3>
						<a
							href="https://x.com/Vortex1356"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/70 hover:text-blue-400 transition"
						>
							@Vortex1356
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="bg-white/5 backdrop-blur-xl border border-blue-400/20 p-6 rounded-xl text-center hover:border-blue-400/50 hover:bg-white/10 transition-all"
						whileHover={{ y: -5 }}
					>
						<FaGithub className="text-3xl text-blue-400 mx-auto mb-3" />
						<h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
						<a
							href="https://github.com/Vortex105"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/70 hover:text-blue-400 transition"
						>
							Vortex105
						</a>
					</motion.div>
				</div>

				{/* Contact Form */}
				<motion.form
					onSubmit={handleSubmit(onSubmit)}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="bg-white/5 backdrop-blur-xl border border-blue-400/20 p-8 rounded-2xl space-y-6"
					noValidate
				>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<input
								type="text"
								placeholder="Your Name"
								className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50 ${
									errors.name ? 'border-red-500' : 'border-white/20'
								}`}
								{...register('name', { required: 'Name is required' })}
							/>
							{errors.name && (
								<p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
							)}
						</div>

						<div>
							<input
								type="email"
								placeholder="Your Email"
								className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50 ${
									errors.email ? 'border-red-500' : 'border-white/20'
								}`}
								{...register('email', {
									required: 'Email is required',
									pattern: {
										value: /^\S+@\S+\.\S+$/,
										message: 'Invalid email address',
									},
								})}
							/>
							{errors.email && (
								<p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
							)}
						</div>
					</div>

					<div>
						<textarea
							placeholder="Your Message"
							rows={5}
							className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border resize-none transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50 ${
								errors.message ? 'border-red-500' : 'border-white/20'
							}`}
							{...register('message', { required: 'Message is required' })}
						/>
						{errors.message && (
							<p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
						)}
					</div>

					<motion.button
						type="submit"
						disabled={isSubmitting}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="w-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/40 hover:to-cyan-500/40 border border-blue-400/30 hover:border-blue-400/50 backdrop-blur text-white px-8 py-3 font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
					>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</motion.button>
				</motion.form>

				{/* Social Links */}
				<motion.div
					className="flex justify-center gap-6 mt-12 text-2xl"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<motion.a
						href="https://x.com/Vortex1356"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
						className="text-blue-400/70 hover:text-blue-400 hover:scale-110 transition"
						whileHover={{ scale: 1.2 }}
					>
						<FaXTwitter />
					</motion.a>
					<motion.a
						href="https://github.com/Vortex105"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="text-blue-400/70 hover:text-blue-400 hover:scale-110 transition"
						whileHover={{ scale: 1.2 }}
					>
						<FaGithub />
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
