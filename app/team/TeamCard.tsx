import Image from "next/image";

type TeamMember = {
	firstName: string;
	lastName: string;
	position: string;
	email: string;
	photo?: string;
	slug: string;
	bio?: string;
};

export default function TeamCard({ member }: { member: TeamMember }) {
	const fullName = `${member.firstName} ${member.lastName}`;
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
			<a href={`/team/${member.slug}`}>
				<div className="text-center max-w-xs mx-auto hover:shadow-lg transition-shadow duration-300 hover:bg-coolGray-100 p-2">
					<Image
						className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
						src={member.photo || "/blank-avatar.jpg"}
						alt={`${fullName} photo`}
						width={96}
						height={96}
					/>
					<h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
						{fullName}
					</h3>
					<span className="inline-block mb-2 text-lg font-medium text-mto-orange">
						{member.position}
					</span>
					<div className="flex items-center justify-center">
						<a
							className="text-sm text-coolGray-500 hover:text-coolGray-700 underline"
							href={`mailto:${member.email}`}
						>
							{member.email}
						</a>
					</div>
				</div>
			</a>
		</div>
	);
}
