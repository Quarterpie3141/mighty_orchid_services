import { Footer, Header } from "../../components";

export default function PolicyLayout({
	eyebrow,
	title,
	lastUpdated,
	children,
}: {
	eyebrow: string;
	title: string;
	lastUpdated: string;
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />

			<section
				className="relative py-24 md:py-32 bg-white"
				style={{
					backgroundImage: 'url("/svg/pattern-white.svg")',
					backgroundPosition: "center",
				}}
			>
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full">
							{eyebrow}
						</span>
						<h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-coolGray-900">
							{title}
						</h1>
						<p className="mt-4 text-coolGray-500">Last updated {lastUpdated}</p>
					</div>

					<div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-coolGray-200 to-transparent" />

					<article className="max-w-3xl mx-auto text-coolGray-700 leading-relaxed">
						{children}
					</article>
				</div>
			</section>

			<Footer />
		</>
	);
}

/* ---------- small, consistent building blocks ---------- */

export function H2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="mt-12 mb-4 text-2xl md:text-3xl font-semibold text-coolGray-900">
			{children}
		</h2>
	);
}

export function H3({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="mt-8 mb-3 text-xl font-semibold text-coolGray-900">
			{children}
		</h3>
	);
}

export function H4({ children }: { children: React.ReactNode }) {
	return (
		<h4 className="mt-6 mb-2 text-lg font-semibold text-coolGray-800">
			{children}
		</h4>
	);
}

export function P({ children }: { children: React.ReactNode }) {
	return <p className="mt-4">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
	return <ul className="mt-3 pl-6 list-disc space-y-2">{children}</ul>;
}

export function OL({ children }: { children: React.ReactNode }) {
	return <ol className="mt-3 pl-6 list-[lower-alpha] space-y-2">{children}</ol>;
}

export function ExternalLink({ href }: { href: string }) {
	return (
		<a
			href={`https://${href}`}
			className="text-mto-blue hover:text-mto-orange underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			{href}
		</a>
	);
}

export function Copyright() {
	return (
		<p className="mt-12 text-sm text-coolGray-400">© LegalVision ILP Pty Ltd</p>
	);
}
