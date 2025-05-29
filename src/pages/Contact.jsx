import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';
// Uncomment below if using emailjs
// import emailjs from "emailjs-com";

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		try {
			// Uncomment below if using EmailJS
			/*
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_PUBLIC_KEY"
      );
      */
			alert("Message sent! I'll get back to you ASAP.");
			reset();
		} catch (error) {
			alert('Oops! Something went wrong.');
		}
	};

	return (
		<section
			id="contact"
			className="min-h-screen bg-zinc-900 text-white px-6 md:px-12 py-16 flex flex-col items-center"
		>
			<motion.h2
				className="text-3xl md:text-4xl font-bold mb-10"
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				Get In Touch
			</motion.h2>

			<motion.form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-lg flex flex-col gap-6"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				noValidate
			>
				<input
					type="text"
					placeholder="Your Name"
					className={`input ${
						errors.name ? 'border-red-500' : 'border-zinc-700'
					}`}
					{...register('name', { required: 'Name is required' })}
				/>
				{errors.name && (
					<p className="text-red-500 text-sm">{errors.name.message}</p>
				)}

				<input
					type="email"
					placeholder="Your Email"
					className={`input ${
						errors.email ? 'border-red-500' : 'border-zinc-700'
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
					<p className="text-red-500 text-sm">{errors.email.message}</p>
				)}

				<textarea
					placeholder="Your Message"
					rows={6}
					className={`input resize-none ${
						errors.message ? 'border-red-500' : 'border-zinc-700'
					}`}
					{...register('message', { required: 'Message is required' })}
				/>
				{errors.message && (
					<p className="text-red-500 text-sm">{errors.message.message}</p>
				)}

				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-cyan-600 hover:bg-cyan-500 transition-colors rounded-lg py-3 font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
				>
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</button>
			</motion.form>

			<motion.div
				className="flex gap-8 mt-12 text-3xl text-cyan-400"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.4 }}
			>
				<a
					href="https://x.com/Vortex1075"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Twitter"
					className="hover:text-cyan-300 transition"
				>
					<FaXTwitter />
				</a>
				<a
					href="https://github.com/Vortex105"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					className="hover:text-cyan-300 transition"
				>
					<FaGithub />
				</a>
			</motion.div>
		</section>
	);
}
