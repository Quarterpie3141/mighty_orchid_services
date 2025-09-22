import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";
import team from "./../team.json";

// ---- Types & helpers ----
export type Member = {
	slug: string;
	firstName: string;
	lastName: string;
	position: string;
	email: string;
	photo?: string;
	bio?: string;
};

function getAllMembers(): Member[] {
	return team as Member[];
}

function getMemberBySlug(slug: string): Member | undefined {
	return (team as Member[]).find((m) => m.slug === slug);
}

// ---- SEO ----
// On newer Next.js, `params` can be a Promise in dynamic APIs.
// Type it as a Promise and await it before using.
type ParamsPromise = Promise<{ slug: string }>;

export async function generateMetadata({
	params,
}: {
	params: ParamsPromise;
}) {
	const { slug } = await params;
	const member = getMemberBySlug(slug);
	if (!member) return { title: "Team Member" };

	const fullName = `${member.firstName} ${member.lastName}`;
	const description =
		member.bio ?? `${fullName} — ${member.position} at With Grace Support.`;

	return {
		title: `${fullName} — ${member.position}`,
		description,
		openGraph: {
			title: `${fullName} — ${member.position}`,
			description,
			images: member.photo ? [member.photo] : undefined,
		},
	};
}

// ---- SSG ----
export async function generateStaticParams() {
	return getAllMembers().map((m) => ({ slug: m.slug }));
}

// ---- Page ----
// Also accept (and await) async params here to be future-proof.
export default async function MemberPage({
	params,
}: {
	params: ParamsPromise;
}) {
	const { slug } = await params;
	const member = getMemberBySlug(slug);
	if (!member) return notFound();

	const fullName = `${member.firstName} ${member.lastName}`;

	return (
		<>
			<Header />

			<section
				className="relative py-24 bg-white"
				style={{
					backgroundImage: 'url("/svg/pattern-white.svg")',
					backgroundPosition: "center",
				}}
			>
				<div className="container mx-auto px-4">
					<div className="mb-8">
						<a
							href="/team"
							className="text-sm text-coolGray-500 hover:text-coolGray-700 underline"
						>
							← Back to Team
						</a>
					</div>

					<div className="grid lg:grid-cols-[160px_1fr] gap-8 items-start">
						<div className="flex justify-center lg:justify-start">
							<Image
								src={member.photo || "/blank-avatar.jpg"}
								alt={`${fullName} photo`}
								width={160}
								height={160}
								className="rounded-full object-cover shadow-sm"
								priority
							/>
						</div>

						<div>
							<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full">
								Team
							</span>
							<h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-coolGray-900 mb-2">
								{fullName}
							</h1>
							<p className="text-lg md:text-xl text-mto-orange font-semibold mb-4">
								{member.position}
							</p>

							<a
								href={`mailto:${member.email}`}
								className="inline-block text-sm font-medium underline text-coolGray-700 hover:text-coolGray-900 mb-8"
							>
								{member.email}
							</a>

							<div className="prose whitespace-pre-line max-w-none text-coolGray-700">
								<p className="text-lg">
									{member.bio ||
										"This team member’s biography will be added soon."}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
