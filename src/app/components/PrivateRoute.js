// app/components/PrivateRoute.jsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status !== "loading" && !session) {
			router.push("/login"); // redirect to login if not authenticated
		}
	}, [session, status, router]);

	// While checking session or redirecting, you can show a loader
	if (status === "loading" || !session) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="loader border-4 border-blue-500 border-dashed rounded-full w-12 h-12 animate-spin"></div>
			</div>
		);
	}

	// If logged in, render the protected content
	return <>{children}</>;
}
