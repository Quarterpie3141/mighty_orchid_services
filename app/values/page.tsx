import { Footer, Header, Values } from "../components";

export default function Home() {
	return (
		<>
			<Header />
			<div className="pt-24">
				<Values />
			</div>
			<Footer />
		</>
	);
}
