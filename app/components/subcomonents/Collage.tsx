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
	initialDelayMs = 0,
	intervalMs = 3000,
	autoplay = true,
	pauseOnHover = true,
}: CollageProps) {
	const n = items.length;
	const safeStart = n > 0 ? ((startIndex % n) + n) % n : 0;

	const startDelayTimeoutRef = useRef<number | null>(null);
	const tickTimeoutRef = useRef<number | null>(null);
	const nextTickAtRef = useRef<number | null>(null);
	const remainingToNextTickRef = useRef<number>(intervalMs);
	const [index, setIndex] = useState(safeStart);
	const [ready, setReady] = useState(initialDelayMs <= 0);
	const [hovering, setHovering] = useState(false);
	const [pageHidden, setPageHidden] = useState(false);

	// Respect reduced motion
	const prefersReducedMotion = usePrefersReducedMotion();

	// Guard: nothing to render
	if (n === 0) {
		return null;
	}

	// If items list changes length, keep index valid
	useEffect(() => {
		setIndex((i) => (n > 0 ? ((i % n) + n) % n : 0));
	}, [n]);

	// Keep index aligned when startIndex changes
	useEffect(() => {
		setIndex(safeStart);
	}, [safeStart]);

	// Pause when tab is not visible to avoid browser timer throttling side-effects.
	useEffect(() => {
		const onVisibilityChange = () => {
			setPageHidden(document.visibilityState !== "visible");
		};

		onVisibilityChange();
		document.addEventListener("visibilitychange", onVisibilityChange);
		return () =>
			document.removeEventListener("visibilitychange", onVisibilityChange);
	}, []);

	// Start rotation after a deterministic initial delay.
	useEffect(() => {
		if (startDelayTimeoutRef.current !== null) {
			window.clearTimeout(startDelayTimeoutRef.current);
			startDelayTimeoutRef.current = null;
		}

		if (!autoplay || n <= 1) {
			setReady(false);
			return;
		}

		if (initialDelayMs <= 0) {
			setReady(true);
			return;
		}

		setReady(false);
		startDelayTimeoutRef.current = window.setTimeout(() => {
			setReady(true);
		}, initialDelayMs);

		return () => {
			if (startDelayTimeoutRef.current !== null) {
				window.clearTimeout(startDelayTimeoutRef.current);
				startDelayTimeoutRef.current = null;
			}
		};
	}, [autoplay, n, initialDelayMs]);

	// Rotation timer with drift correction and pause/resume support.
	useEffect(() => {
		const paused = (pauseOnHover && hovering) || pageHidden;
		const shouldRun = autoplay && ready && n > 1 && !paused;

		if (tickTimeoutRef.current !== null) {
			window.clearTimeout(tickTimeoutRef.current);
			tickTimeoutRef.current = null;
		}

		if (!shouldRun) {
			if (nextTickAtRef.current !== null) {
				remainingToNextTickRef.current = Math.max(
					0,
					nextTickAtRef.current - performance.now(),
				);
			}
			return;
		}

		const scheduleNext = (delayMs: number) => {
			const safeDelay = Math.max(0, delayMs);
			nextTickAtRef.current = performance.now() + safeDelay;
			tickTimeoutRef.current = window.setTimeout(() => {
				const expectedTickAt = nextTickAtRef.current ?? performance.now();
				const now = performance.now();
				const drift = Math.max(0, now - expectedTickAt);

				setIndex((i) => (i + 1) % n);
				remainingToNextTickRef.current = intervalMs;
				scheduleNext(Math.max(0, intervalMs - drift));
			}, safeDelay);
		};

		scheduleNext(
			Math.min(
				intervalMs,
				Math.max(0, remainingToNextTickRef.current || intervalMs),
			),
		);

		return () => {
			if (tickTimeoutRef.current !== null) {
				window.clearTimeout(tickTimeoutRef.current);
				tickTimeoutRef.current = null;
			}
		};
	}, [autoplay, ready, n, intervalMs, hovering, pauseOnHover, pageHidden]);

	// Reset next tick budget when interval changes.
	useEffect(() => {
		remainingToNextTickRef.current = intervalMs;
	}, [intervalMs]);

	// Cleanup all timers on unmount.
	useEffect(() => {
		return () => {
			if (startDelayTimeoutRef.current !== null) {
				window.clearTimeout(startDelayTimeoutRef.current);
			}
			if (tickTimeoutRef.current !== null) {
				window.clearTimeout(tickTimeoutRef.current);
			}
		};
	}, []);

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
