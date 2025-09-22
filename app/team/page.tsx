import { Footer, Header } from "../components";
import TeamCard from "./TeamCard";
import team from "./team.json";
export default function Team() {
	return (
		<>
			<Header />

			<section
				className="relative py-24 bg-white"
				style={{
					backgroundImage: 'url("svg/pattern-white.svg")',
					backgroundPosition: "center",
				}}
				id="Team"
			>
				<div className="relative container px-4 mx-auto pt-24">
					<div className="mb-16 text-center">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full">
							Our Team
						</span>
						<h3 className="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
							Dedicated people, delivering quality care.
						</h3>
						<p className="text-lg md:text-xl text-coolGray-500 font-medium max-w-2xl mx-auto">
							At Mighty Orchid Services, our team is made up of skilled and
							compassionate professionals who are committed to supporting
							individuals and families with respect, dignity, and consistency.
							We bring together experience, empathy, and a shared belief in
							“people looking after people.”
						</p>
					</div>

					<div className="flex flex-wrap -mx-4">
						{team.map((member, idx) => (
							<TeamCard key={`${member.email}-${idx}`} member={member} />
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
