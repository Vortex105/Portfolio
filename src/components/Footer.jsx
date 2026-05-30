export default function Footer() {
	return (
		<footer className="w-full bg-black/90 text-slate-400 text-center py-6 text-sm border-t border-slate-700">
			<div className="max-w-6xl mx-auto px-6">
				
				<p className="mt-2 text-xs">
					Copyright © {new Date().getFullYear()} | All rights reserved
				</p>
			</div>
		</footer>
	);
}
