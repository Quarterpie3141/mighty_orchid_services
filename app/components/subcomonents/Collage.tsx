"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type CollageProps = {
	items: React.ReactNode[];
	/** Start at this index (defaults to 0) */
	startIndex?: number;
	/** Delay before starting rotation (ms). Use 0 to start immediately. */
	initialDelayMs?: number;
	/** Time each item stays visible (ms) */
	intervalMs?: number;
	/** Auto-rotate (defaults true) */
	autoplay?: boolean;
	/** Pause rotation when user hovers the collage (defaults true) */
	pauseOnHover?: boolean;
};

export default function Collage({
	items,
	startIndex = 0,
	initialDelayMs = 800, // shorter, feels snappier; change if you truly need 3s
	intervalMs = 12000,
	autoplay = true,
	pauseOnHover = true,
}: CollageProps) {
	const n = items.length;
	const safeStart = n > 0 ? ((startIndex % n) + n) % n : 0;

	const containerRef = useRef<HTMLDivElement | null>(null);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [index, setIndex] = useState(safeStart);
	const [running, setRunning] = useState(false); // becomes true after visible + delay
	const [hovering, setHovering] = useState(false);

	// Respect reduced motion
	const prefersReducedMotion = usePrefersReducedMotion();

	// Guard: nothing to render
	if (n === 0) {
		return null;
	}

	// If items list changes length, keep index valid
	useEffect(() => {
		setIndex((i) => (n > 0 ? i % n : 0));
	}, [n]);

	// Start only when the collage is visible (IntersectionObserver)
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		let visible = false;
		const io = new IntersectionObserver(
			([entry]) => {
				const nowVisible = !!entry?.isIntersecting;
				if (nowVisible && !visible) {
					// kick off after the initial delay
					clearTimeout(delayRef.current as any);
					delayRef.current = setTimeout(() => setRunning(true), initialDelayMs);
				}
				visible = nowVisible;
				if (!nowVisible) {
					setRunning(false);
					clearInterval(timerRef.current as any);
				}
			},
			{ threshold: 0.25 }, // start when at least 25% in view
		);

		io.observe(el);
		return () => {
			io.disconnect();
			clearTimeout(delayRef.current as any);
			clearInterval(timerRef.current as any);
		};
	}, [initialDelayMs]);

	// Rotation timer
	useEffect(() => {
		const shouldRun =
			autoplay && running && n > 1 && !(pauseOnHover && hovering);

		clearInterval(timerRef.current as any);
		if (shouldRun) {
			timerRef.current = setInterval(() => {
				setIndex((i) => (i + 1) % n);
			}, intervalMs);
		}
		return () => clearInterval(timerRef.current as any);
	}, [autoplay, running, n, intervalMs, hovering, pauseOnHover]);

	// Compute next index for preloading & safe access
	const nextIndex = useMemo(() => (index + 1) % n, [index, n]);

	// Framer variants (skip animation if reduced motion)
	const duration = prefersReducedMotion ? 0 : 1.0;
	const variants = prefersReducedMotion
		? {
				initial: { opacity: 1, scale: 1 },
				animate: { opacity: 1, scale: 1 },
				exit: { opacity: 1, scale: 1 },
			}
		: {
				initial: { opacity: 0, scale: 0.98 },
				animate: { opacity: 1, scale: 1 },
				exit: { opacity: 0, scale: 0.98 },
			};

	return (
		<div
			ref={containerRef}
			className="collage-container relative overflow-hidden lg:h-[35rem] md:h-[17rem] h-[18rem]"
			onMouseEnter={() => pauseOnHover && setHovering(true)}
			onMouseLeave={() => pauseOnHover && setHovering(false)}
		>
			<AnimatePresence mode="wait">
				<motion.div
					key={index} // stable key for exit/enter
					initial="initial"
					animate="animate"
					exit="exit"
					variants={variants}
					transition={{ duration, ease: "easeInOut" }}
				>
					{items[index]}
				</motion.div>
			</AnimatePresence>

			{/* Preload the next item off-screen to avoid flashes; keeps React tree warm */}
			<div
				aria-hidden
				inert
				className="absolute -z-10 opacity-0 pointer-events-none select-none"
				style={{ width: 0, height: 0 }}
			>
				{items[nextIndex]}
			</div>
		</div>
	);
}

/** Small hook to respect prefers-reduced-motion without adding a lib */
function usePrefersReducedMotion() {
	const [reduced, setReduced] = useState(false);
	useEffect(() => {
		const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
		const onChange = () => setReduced(mql.matches);
		onChange();
		mql.addEventListener?.("change", onChange);
		return () => mql.removeEventListener?.("change", onChange);
	}, []);
	return reduced;
}
