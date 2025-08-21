import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Premium Mens Outfit
					</h1>
					<p className="text-xl mb-8">
						Discover the latest trends in men&apos;s fashion
					</p>
					<Link
						href="/products"
						className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
					>
						Shop Now
					</Link>
				</div>
			</section>

			{/* Product Highlights */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">
						Featured Collections
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
							<h3 className="text-xl font-semibold mb-2">Formal Wear</h3>
							<p className="text-gray-600">Elegant suits and formal attire</p>
						</div>
						<div className="text-center">
							<div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
							<h3 className="text-xl font-semibold mb-2">Casual Wear</h3>
							<p className="text-gray-600">Comfortable everyday clothing</p>
						</div>
						<div className="text-center">
							<div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
							<h3 className="text-xl font-semibold mb-2">Accessories</h3>
							<p className="text-gray-600">
								Complete your look with our accessories
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
