"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
	const router = useRouter();

	useEffect(() => {
		// Replace with your target URL
		router.push("https://mtos.com.au");
	}, [router]);

	return <p>Redirecting...</p>;
}
