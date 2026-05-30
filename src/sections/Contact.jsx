import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaXTwitter, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa6';
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
		<section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
			<div className="max-w-4xl mx-auto">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
						Let's <span className="text-cyan-400">Connect</span>
					</h2>
					<p className="text-slate-300 text-lg">
						Have a project in mind or just want to chat? Get in touch!
					</p>
					<div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4" />
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{/* Contact Info Cards */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-600/50 text-center hover:border-cyan-400/30 transition-all"
						whileHover={{ y: -5 }}
					>
						<FaEnvelope className="text-3xl text-cyan-400 mx-auto mb-3" />
						<h3 className="text-lg font-semibold text-white mb-2">Email</h3>
						<a
							href="mailto:seseshe14@gmail.com"
							className="text-slate-300 hover:text-cyan-400 transition"
						>
							seseshe14@gmail.com
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-600/50 text-center hover:border-cyan-400/30 transition-all"
						whileHover={{ y: -5 }}
					>
						<FaXTwitter className="text-3xl text-cyan-400 mx-auto mb-3" />
						<h3 className="text-lg font-semibold text-white mb-2">Twitter</h3>
						<a
							href="https://x.com/Vortex1356"
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-300 hover:text-cyan-400 transition"
						>
							@Vortex1356
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-600/50 text-center hover:border-cyan-400/30 transition-all"
						whileHover={{ y: -5 }}
					>
						<FaGithub className="text-3xl text-cyan-400 mx-auto mb-3" />
						<h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
						<a
							href="https://github.com/Vortex105"
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-300 hover:text-cyan-400 transition"
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
					className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-600/50 space-y-6"
					noValidate
				>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<input
								type="text"
								placeholder="Your Name"
								className={`w-full px-4 py-3 rounded-lg bg-slate-700/50 border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
									errors.name ? 'border-red-500' : 'border-slate-600/50'
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
								className={`w-full px-4 py-3 rounded-lg bg-slate-700/50 border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
									errors.email ? 'border-red-500' : 'border-slate-600/50'
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
							className={`w-full px-4 py-3 rounded-lg bg-slate-700/50 border resize-none transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
								errors.message ? 'border-red-500' : 'border-slate-600/50'
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
						className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all py-3 font-semibold rounded-lg shadow-lg shadow-cyan-500/50 disabled:opacity-60 disabled:cursor-not-allowed text-white"
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
					<a
						href="https://x.com/Vortex1356"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
						className="text-cyan-400 hover:text-cyan-300 hover:scale-110 transition"
					>
						<FaXTwitter />
					</a>
					<a
						href="https://github.com/Vortex105"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="text-cyan-400 hover:text-cyan-300 hover:scale-110 transition"
					>
						<FaGithub />
					</a>
				</motion.div>
			</div>
		</section>
	);
}
