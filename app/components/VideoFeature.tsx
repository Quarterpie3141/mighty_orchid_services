// components/VideoFeature.tsx
// Drop the video file in at /public/other-assets/video/ and update VIDEO_SRC.
const VIDEO_SRC = "/other-assets/video/mtos-intro.mp4";
const VIDEO_POSTER = "/other-assets/stock/people-coffee.jpg";
const VIDEO_CAPTIONS = "/other-assets/video/mtos-intro.vtt";

export default function VideoFeature() {
	return (
		<section
			id="video"
			className="py-24 md:pb-32 bg-white"
			style={{
				backgroundImage: 'url("svg/pattern-white.svg")',
				backgroundPosition: "center",
			}}
		>
			<div className="container px-4 mx-auto">
				<div className="md:max-w-4xl mb-12 mx-auto text-center">
					<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-blue font-medium uppercase rounded-full shadow-sm">
						Watch
					</span>
					<h2 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
						Get to know Mighty Orchid Services
					</h2>
					<p className="text-lg md:text-xl text-coolGray-500 font-medium">
						Take a moment to see who we are, the people we support, and the care
						we bring to our community every day.
					</p>
				</div>
				<div className="max-w-4xl mx-auto">
					<div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-xl bg-coolGray-900">
						<video
							className="absolute inset-0 h-full w-full object-cover"
							controls
							preload="metadata"
							playsInline
							poster={VIDEO_POSTER}
						>
							<source src={VIDEO_SRC} type="video/mp4" />
							<track
								kind="captions"
								src={VIDEO_CAPTIONS}
								srcLang="en"
								label="English"
								default
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</section>
	);
}
