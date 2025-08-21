import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-white min-h-screen">
			{/* Hero Section */}
			<section className="relative text-white">
				{/* Banner Image */}
				<div className="absolute inset-0">
					<Image
						src="https://i.postimg.cc/gJmR714P/image.png" // 👈 place your banner image in public/images/banner.jpg
						alt="Men's Fashion Banner"
						fill
						className="object-cover object-center"
						priority
					/>
					<div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Premium Mens Outfit
					</h1>
					<p className="text-xl mb-8">
						Discover the latest trends in men&apos;s fashion
					</p>
					<Link
						href="/products"
						className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
					>
						Shop Now
					</Link>
				</div>
			</section>

			{/* Product Highlights */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12 text-black">
						Featured Collections
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
						{/* Formal Wear */}
						<div className="text-center">
							<div className="h-64 w-full relative rounded-lg overflow-hidden mb-4">
								<Image
									src="https://i.postimg.cc/RFZhKmXq/image.png" // 👈 place in public/images/formal.jpg
									alt="Formal Wear"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-semibold mb-2">Formal Wear</h3>
							<p className="text-gray-600">Elegant suits and formal attire</p>
						</div>

						{/* Casual Wear */}
						<div className="text-center">
							<div className="h-64 w-full relative rounded-lg overflow-hidden mb-4">
								<Image
									src="https://i.postimg.cc/K8hYQBJ6/image.png" // 👈 place in public/images/casual.jpg
									alt="Casual Wear"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-semibold mb-2">Casual Wear</h3>
							<p className="text-gray-600">Comfortable everyday clothing</p>
						</div>

						{/* Accessories */}
						<div className="text-center">
							<div className="h-64 w-full relative rounded-lg overflow-hidden mb-4">
								<Image
									src="https://i.postimg.cc/wjzmMC8R/image.png" // 👈 place in public/images/accessories.jpg
									alt="Accessories"
									fill
									className="object-cover"
								/>
							</div>
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
