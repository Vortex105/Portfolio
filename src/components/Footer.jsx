export default function Footer() {
	return (
		<footer className="w-full bg-white/5 backdrop-blur-xl text-white/70 text-center py-6 text-sm border-t border-white/10">
			<div className="max-w-6xl mx-auto px-6">
				<p>
					Built with <span className="text-blue-400">💙</span> by{' '}
					<span className="text-white font-semibold">Seseshe</span>
				</p>
				<p className="mt-2 text-xs text-white/50">
					Copyright © {new Date().getFullYear()} | All rights reserved
				</p>
			</div>
		</footer>
	);
}
