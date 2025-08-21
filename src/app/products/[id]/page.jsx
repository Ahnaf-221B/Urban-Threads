"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import PrivateRoute from "@/app/components/PrivateRoute";

export default function ProductDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await fetch(`/api/products/${id}`);
				const data = await res.json();

				if (!res.ok) {
					await Swal.fire({
						icon: "error",
						title: "Error",
						text: data.error || "Failed to fetch product",
						confirmButtonColor: "#dc2626",
						background: document.documentElement.classList.contains("dark")
							? "#1f2937"
							: "#fff",
						color: document.documentElement.classList.contains("dark")
							? "#fff"
							: "#000",
					});
					router.push("/products");
					return;
				}

				setProduct(data);
			} catch (err) {
				await Swal.fire({
					icon: "error",
					title: "Error",
					text: err.message,
					confirmButtonColor: "#dc2626",
					background: document.documentElement.classList.contains("dark")
						? "#1f2937"
						: "#fff",
					color: document.documentElement.classList.contains("dark")
						? "#fff"
						: "#000",
				});
				router.push("/products");
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id, router]);

	if (loading) {
		return (
			<div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center">
					<div className="loading loading-spinner loading-lg text-blue-600 dark:text-blue-400"></div>
					<p className="mt-4 text-gray-600 dark:text-gray-300">
						Loading product details...
					</p>
				</div>
			</div>
		);
	}

	if (!product) return null;

	return (
		<PrivateRoute>
			<div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-6 md:px-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
					{/* Product Image */}
					<div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
						{product.image ? (
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-auto max-h-[500px] object-contain hover:scale-105 transition-transform duration-300"
							/>
						) : (
							<div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 py-20">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-28 w-28"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p className="mt-3">No image available</p>
							</div>
						)}
					</div>

					{/* Product Info */}
					<div className="flex flex-col justify-center">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{product.name}
						</h1>

						<p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-6">
							${product.price}
						</p>

						{/* Accordion-like details */}
						<div className="mb-8">
							<h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
								Description
							</h2>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								{product.details || "No additional details provided."}
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-4 mt-4">
							<button
								className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-md"
								onClick={() => {
									Swal.fire({
										title: "Added to Cart!",
										text: `${product.name} has been added to your cart.`,
										icon: "success",
										confirmButtonColor: "#2563eb",
									});
								}}
							>
								Buy now
							</button>

							<button
								className="flex-1 px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-semibold transition-colors"
								onClick={() => {
									Swal.fire({
										title: "Added to Wishlist!",
										text: `${product.name} has been added to your wishlist.`,
										icon: "info",
										confirmButtonColor: "#2563eb",
									});
								}}
							>
							Wishlist
							</button>
						</div>

						{/* Back Button */}
						<button
							onClick={() => router.back()}
							className="mt-8 inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
									clipRule="evenodd"
								/>
							</svg>
							Go Back
						</button>
					</div>
				</div>
			</div>
		</PrivateRoute>
	);
}
