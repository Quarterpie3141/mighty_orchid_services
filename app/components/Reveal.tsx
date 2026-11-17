"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface RevealProps {
	children: React.ReactNode;
	/** Seconds to wait before this item animates, used to stagger a grid. */
	delay?: number;
	className?: string;
}

/**
 * Fades and lifts its children into place as they scroll into view, with a
 * slight tilt so cards appear to settle forward.
 *
 * Motion is skipped entirely when the visitor's device asks for reduced
 * motion, or when they have switched on Reduce motion in our own
 * accessibility controls. In both cases the children render as plain,
 * fully visible content.
 */
export default function Reveal({
	children,
	delay = 0,
	className,
}: RevealProps) {
	const prefersReducedMotion = useReducedMotion();
	const [siteReduceMotion, setSiteReduceMotion] = useState(false);

	useEffect(() => {
		const read = () => {
			setSiteReduceMotion(document.body.dataset.reduceMotion === "true");
		};
		read();

		// The accessibility controls write this attribute on the body, so watch
		// it and drop the motion straight away if the visitor turns it on.
		const observer = new MutationObserver(read);
		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ["data-reduce-motion"],
		});
		return () => observer.disconnect();
	}, []);

	if (prefersReducedMotion || siteReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 28, rotateX: 7 }}
			whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.55, ease: "easeOut", delay }}
			style={{ transformPerspective: 900 }}
		>
			{children}
		</motion.div>
	);
}
