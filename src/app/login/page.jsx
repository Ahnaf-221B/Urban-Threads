"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Login() {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push("/products");
		}
	}, [session, router]);

	return (
		<div className="min-h-screen flex items-center bg-gray-700 justify-center bg- px-4">
			<div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
				<div className="text-center mb-6">
					<h2 className="text-4xl font-extrabold text-gray-900 mb-2">
						Welcome Back!
					</h2>
					<p className="text-gray-500">
						Sign in to access your account and explore products
					</p>
				</div>

				<div className="mt-8 space-y-6">
					<button
						onClick={() => signIn("google")}
						className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
					>
					
						Sign in with Google
					</button>
				</div>

				<div className="mt-6 text-center">
					<p className="text-gray-400 text-sm">
						Don't have an account?{" "}
						<span className="text-blue-600 font-semibold hover:underline cursor-pointer">
							Sign up
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
