"use client";

import { useState } from "react";

import Swal from "sweetalert2";

export default function AddProducts() {
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		details: "",
		image: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await fetch("/api/products", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (res.ok) {
				Swal.fire({
					icon: "success",
					title: "Product Added!",
					text: `Product "${formData.name}" was added successfully.`,
					confirmButtonColor: "#2563eb",
				});
				setFormData({ name: "", price: "", details: "", image: "" });
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: data.error || "Something went wrong!",
					confirmButtonColor: "#dc2626",
				});
			}
		} catch (err) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: err.message,
				confirmButtonColor: "#dc2626",
			});
		}

		setLoading(false);
	};

	return (
		<div className="mt-16 mx-4 md:mx-16 p-6 bg-gray-300 rounded-lg shadow-lg text-black mb-10">
			<h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
				Add Products
			</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block mb-1 font-medium">Product Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full border px-3 py-2 rounded"
						required
					/>
				</div>

				<div>
					<label className="block mb-1 font-medium">Price</label>
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						className="w-full border px-3 py-2 rounded"
						required
					/>
				</div>

				<div>
					<label className="block mb-1 font-medium">Details</label>
					<textarea
						name="details"
						value={formData.details}
						onChange={handleChange}
						className="w-full border px-3 py-2 rounded"
						rows={4}
						required
					/>
				</div>

				<div>
					<label className="block mb-1 font-medium">Image Link</label>
					<input
						type="text"
						name="image"
						value={formData.image}
						onChange={handleChange}
						className="w-full border px-3 py-2 rounded"
						placeholder="Enter image URL"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 flex items-center justify-center"
					disabled={loading}
				>
					{loading ? (
						<>
							<svg
								className="animate-spin h-5 w-5 mr-2 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
								></path>
							</svg>
							Adding...
						</>
					) : (
						"Add Product"
					)}
				</button>
			</form>
		</div>
	);
}
