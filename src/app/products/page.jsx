"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("/api/products");
				const data = await res.json();
				setProducts(data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="loader border-4 border-blue-500 border-dashed rounded-full w-12 h-12 animate-spin"></div>
			</div>
		);
	}

	if (!products.length) {
		return <p className="text-center mt-20">No products found.</p>;
	}

	return (
		<div className="mt-16 mx-4 md:mx-16 ">
			{/* Title */}
			<h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
				All Products
			</h1>

			{/* Product Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
				{products.map((product) => (
					<div
						key={product._id}
						className="group relative bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col border border-gray-100"
					>
						{/* Image */}
						{product.image && (
							<div className="relative w-full h-52 overflow-hidden rounded-xl mb-4">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 "
								/>
							</div>
						)}

						{/* Details */}
						<h2 className="text-xl font-semibold  text-white transition mb-2">
							{product.name}
						</h2>
						<p className="text-gray-400 text-sm mb-3 line-clamp-2">
							{product.details}
						</p>
						<p className="text-lg font-bold text-blue-700 mb-4">
							${product.price}
						</p>

						{/* Button */}
						<Link
							href={`/products/${product._id}`}
							className="mt-auto inline-block bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition"
						>
							View Details
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
