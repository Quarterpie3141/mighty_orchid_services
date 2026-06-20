"use client";

import { useEffect, useId, useState } from "react";

type FontScale = "default" | "large" | "x-large";

type AccessibilityPreferences = {
	fontScale: FontScale;
	highContrast: boolean;
	reduceMotion: boolean;
};

const STORAGE_KEY = "mtos-accessibility-preferences";
const VISIBILITY_STORAGE_KEY = "mtos-accessibility-visibility";

const defaultPreferences: AccessibilityPreferences = {
	fontScale: "default",
	highContrast: false,
	reduceMotion: false,
};

const fontScaleClassNames: Record<FontScale, string> = {
	default: "bg-[#16355c] text-white",
	large: "bg-white text-[#16355c]",
	"x-large": "bg-white text-[#16355c]",
};

function applyPreferences(preferences: AccessibilityPreferences) {
	const root = document.documentElement;
	const body = document.body;

	root.dataset.fontScale = preferences.fontScale;
	body.dataset.contrast = preferences.highContrast ? "high" : "default";
	body.dataset.reduceMotion = preferences.reduceMotion ? "true" : "false";
	root.style.colorScheme = preferences.highContrast ? "light" : "normal";
	root.style.setProperty(
		"--accessibility-outline-width",
		preferences.highContrast ? "3px" : "2px",
	);
	root.style.setProperty(
		"--accessibility-outline-color",
		preferences.highContrast ? "#000000" : "#16355c",
	);
}

export default function AccessibilityControls() {
	const panelId = useId();
	const [isOpen, setIsOpen] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const [preferences, setPreferences] =
		useState<AccessibilityPreferences>(defaultPreferences);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		const nextPreferences = {
			...defaultPreferences,
			reduceMotion: prefersReducedMotion,
		};
		const storedPreferences = window.localStorage.getItem(STORAGE_KEY);

		if (storedPreferences) {
			try {
				const parsedPreferences = JSON.parse(
					storedPreferences,
				) as Partial<AccessibilityPreferences>;
				nextPreferences.fontScale =
					parsedPreferences.fontScale ?? nextPreferences.fontScale;
				nextPreferences.highContrast =
					parsedPreferences.highContrast ?? nextPreferences.highContrast;
				nextPreferences.reduceMotion =
					parsedPreferences.reduceMotion ?? nextPreferences.reduceMotion;
			} catch {
				window.localStorage.removeItem(STORAGE_KEY);
			}
		}

		const storedVisibility = window.localStorage.getItem(
			VISIBILITY_STORAGE_KEY,
		);
		if (storedVisibility === "hidden") {
			setIsHidden(true);
		}

		setPreferences(nextPreferences);
		setIsReady(true);
	}, []);

	useEffect(() => {
		if (!isReady) {
			return;
		}

		applyPreferences(preferences);
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

		return () => {
			applyPreferences(defaultPreferences);
		};
	}, [isReady, preferences]);

	useEffect(() => {
		if (!isReady) {
			return;
		}

		window.localStorage.setItem(
			VISIBILITY_STORAGE_KEY,
			isHidden ? "hidden" : "visible",
		);
	}, [isHidden, isReady]);

	if (isHidden) {
		return (
			<div className="fixed bottom-5 left-0 z-[90]">
				<button
					type="button"
					onClick={() => {
						setIsHidden(false);
						setIsOpen(true);
					}}
					aria-label="Show accessibility options"
					className="rounded-r-2xl border border-l-0 border-[#16355c]/15 bg-white px-3 py-4 text-sm font-semibold text-[#16355c] shadow-[0_14px_34px_rgba(22,53,92,0.18)] transition hover:border-[#16355c]/30 hover:bg-[#f7f9fc]"
				>
					<span className="block text-lg leading-none" aria-hidden="true">
						&gt;
					</span>
				</button>
			</div>
		);
	}

	return (
		<div className="fixed bottom-5 left-5 z-[90] flex max-w-[calc(100vw-2.5rem)] flex-col items-start gap-3">
			{isOpen ? (
				<div
					id={panelId}
					className="w-[min(22rem,calc(100vw-2.5rem))] rounded-3xl border border-[#16355c]/20 bg-white p-5 shadow-[0_24px_60px_rgba(22,53,92,0.2)]"
				>
					<div className="mb-4 flex items-start justify-between gap-4">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4b6382]">
								Accessibility
							</p>
							<h2 className="mt-1 text-xl font-semibold text-[#16355c]">
								Reading and motion controls
							</h2>
						</div>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="rounded-full border border-[#16355c]/15 px-3 py-1 text-sm font-medium text-[#16355c] transition hover:border-[#16355c]/35 hover:bg-[#16355c]/5"
						>
							Close
						</button>
					</div>

					<div className="space-y-4">
						<div>
							<p className="text-sm font-medium text-[#16355c]">Text size</p>
							<div className="mt-2 grid grid-cols-3 gap-2">
								{(
									[
										["default", "Default", "A"],
										["large", "Large", "A+"],
										["x-large", "Extra large", "A++"],
									] as const
								).map(([value, label, sample]) => (
									<button
										key={value}
										type="button"
										onClick={() =>
											setPreferences((current) => ({
												...current,
												fontScale: value,
											}))
										}
										aria-pressed={preferences.fontScale === value}
										className={`rounded-2xl border px-3 py-3 text-left transition ${
											preferences.fontScale === value
												? fontScaleClassNames[value]
												: "border-[#16355c]/15 bg-[#f5f7fb] text-[#16355c] hover:border-[#16355c]/35"
										}`}
									>
										<span className="block text-lg font-semibold">
											{sample}
										</span>
										<span className="mt-1 block text-xs font-medium">
											{label}
										</span>
									</button>
								))}
							</div>
						</div>

						<label className="flex items-center justify-between gap-4 rounded-2xl border border-[#16355c]/12 bg-[#f7f9fc] px-4 py-3 text-[#16355c]">
							<div>
								<p className="font-medium">High contrast</p>
								<p className="text-sm text-[#4b6382]">
									Boosts legibility and focus outlines.
								</p>
							</div>
							<input
								type="checkbox"
								checked={preferences.highContrast}
								onChange={(event) =>
									setPreferences((current) => ({
										...current,
										highContrast: event.target.checked,
									}))
								}
								className="h-5 w-5 accent-[#16355c]"
							/>
						</label>

						<label className="flex items-center justify-between gap-4 rounded-2xl border border-[#16355c]/12 bg-[#f7f9fc] px-4 py-3 text-[#16355c]">
							<div>
								<p className="font-medium">Reduce motion</p>
								<p className="text-sm text-[#4b6382]">
									Minimises animation, transitions, and smooth scrolling.
								</p>
							</div>
							<input
								type="checkbox"
								checked={preferences.reduceMotion}
								onChange={(event) =>
									setPreferences((current) => ({
										...current,
										reduceMotion: event.target.checked,
									}))
								}
								className="h-5 w-5 accent-[#16355c]"
							/>
						</label>

						<button
							type="button"
							onClick={() => setPreferences(defaultPreferences)}
							className="w-full rounded-2xl border border-[#16355c]/15 px-4 py-3 text-sm font-medium text-[#16355c] transition hover:border-[#16355c]/35 hover:bg-[#16355c]/5"
						>
							Reset accessibility settings
						</button>

						<button
							type="button"
							onClick={() => {
								setIsOpen(false);
								setIsHidden(true);
							}}
							className="w-full rounded-2xl border border-[#16355c]/15 px-4 py-3 text-sm font-medium text-[#16355c] transition hover:border-[#16355c]/35 hover:bg-[#16355c]/5"
						>
							Hide accessibility button
						</button>
					</div>
				</div>
			) : null}

			<div className="relative inline-flex items-center">
				<button
					type="button"
					onClick={() => setIsOpen((current) => !current)}
					aria-expanded={isOpen}
					aria-controls={panelId}
					className="rounded-full border border-[#16355c]/15 bg-[#16355c] px-5 py-3 pr-12 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(22,53,92,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0f2540]"
				>
					Accessibility options
				</button>
				<button
					type="button"
					onClick={(event) => {
						event.stopPropagation();
						setIsOpen(false);
						setIsHidden(true);
					}}
					aria-label="Minimize accessibility controls"
					className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-sm font-semibold leading-none text-white transition hover:bg-white/28"
				>
					×
				</button>
			</div>
		</div>
	);
}
