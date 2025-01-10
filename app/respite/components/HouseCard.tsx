"use client";
interface HouseCardProps {
	image: string;
	name: string;
	address: string;
	link: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
	image,
	name,
	address,
	link,
}) => {
	return (
		<div className="flex flex-col justify-between rounded-lg bg-mto-blue m-auto max-w-96 min-w-60 h-[370px] shadow-md w-1/3 mb-24">
			<div className="relative mt-6 mx-4 rounded-lg bg-white shadow-md h-56">
				<img
					src={image}
					alt="House"
					className="object-cover h-full w-full rounded-xl mb-6"
				/>
			</div>
			<div className="border-none p-6 text-center">
				<p className="text-white tracking-normal leading-relaxed font-semibold text-lg my-4">
					{name}
				</p>
			</div>
			<div className="p-3 border border-white flex items-center justify-between bg-white">
				<p className="font-light text-xs text-mto-blue">{address}</p>
				<a
					href={link}
					className="select-none border-none outline-none shadow-md text-white uppercase font-bold text-xs px-6 py-3 bg-mto-blue hover:bg-mto-orange transition rounded-md"
				>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default HouseCard;
