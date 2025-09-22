import {
	ContactForm,
	FAQ,
	Footer,
	Header,
	Help,
	Hero,
	MeetTheTeam,
	Testimonials,
	Values,
} from "./components";

export default function Home() {
	return (
		<>
			<section
				className="relative bg-transparent overflow-hidden"
				style={{
					backgroundImage: 'url("https://i.imgur.com/vs6w1Nn.png")',
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="md:p-6 p-20 pb-16" />
				{/* Header */}
				<Header />
				{/* Hero */}
				<Hero />
			</section>
			{/* How can we help you */}
			<Help />
			{/* Values */}
			<Values />
			<MeetTheTeam />
			{/* Parralax  */}
			<section
				className="pt-24 bg-white bg-fixed"
				style={{
					backgroundImage: 'url("https://i.imgur.com/sCLl6U6.png")',
					backgroundPosition: "top",
					backgroundSize: "cover",
				}}
			>
				<div className=" h-[30rem]" />
			</section>
			{/* Testimonials */}
			<Testimonials />
			{/* Meet the team */}
			{/* Contact us*/}
			<ContactForm />
			{/* FAQ */}
			<FAQ />
			{/* Footer */}
			<Footer />
		</>
	);
}
