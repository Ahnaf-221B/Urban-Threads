"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
	const { data: session } = useSession();

	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Left side (Logo / Brand) */}
					<div className="flex-shrink-0">
						<Link href="/" className="text-xl font-bold text-blue-600">
							Urban Threads
						</Link>
					</div>

					{/* Center Links */}
					<div className="hidden md:flex space-x-6">
						<Link
							href="/"
							className="text-gray-700 hover:text-blue-600 transition-colors"
						>
							Home
						</Link>
						<Link
							href="/products"
							className="text-gray-700 hover:text-blue-600 transition-colors"
						>
							Products
						</Link>

						{/* Only show if logged in */}
						{session && (
							<Link
								href="/dashboard/add-products"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Add Product
							</Link>
						)}
					</div>

					{/* Right side (Auth buttons) */}
					<div className="flex items-center space-x-4">
						{  session ? (
							<>
								<p className="text-gray-700 text-sm hidden sm:block">
									Hi, {session.user?.name || session.user?.email}
								</p>
								<button
									onClick={() => signOut({ callbackUrl: "/" })}
									className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
								>
									Logout
								</button>
							</>
						) : (
							<Link
								href='/login'
								className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
							>
								Login
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
