// components/VideoFeature.tsx
import type { RefObject } from "react";

// Rendered inside the Testimonials section as the featured video testimonial --
// it is no longer a standalone section of its own.
//
// The video is served from the CDN in every environment, including local dev --
// it is not kept in /public. The CDN object name is case-sensitive.
const CDN_BASE = "https://cdn.mtos.com.au";

const VIDEO_SRC = `${CDN_BASE}/videos/Testimonial1.mp4`;
const VIDEO_POSTER = "/other-assets/video/testimonial1-poster.jpg";
const VIDEO_CAPTIONS = "/other-assets/video/testimonial1.vtt";

type VideoFeatureProps = {
	videoRef?: RefObject<HTMLVideoElement>;
};

export default function VideoFeature({ videoRef }: VideoFeatureProps) {
	return (
		<div id="video" className="relative mx-auto w-full max-w-xs sm:max-w-sm">
			{/* Offset accent panel behind the player, purely decorative. */}
			<div
				aria-hidden="true"
				className="absolute -inset-3 -rotate-2 rounded-2xl bg-mto-celadon/50"
			/>
			<div
				aria-hidden="true"
				className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-mto-orange/20"
			/>
			{/* Source is coded 1080x1080 but has a 9:16 sample aspect ratio, so it
			    displays as portrait. Match that or the frame stretches. */}
			<div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl shadow-xl bg-coolGray-900 ring-1 ring-mto-blue/10">
				<video
					ref={videoRef}
					className="absolute inset-0 h-full w-full object-contain"
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
			<p className="relative mt-5 text-center text-sm text-coolGray-500">
				A message from one of the families we support.
			</p>
		</div>
	);
}
