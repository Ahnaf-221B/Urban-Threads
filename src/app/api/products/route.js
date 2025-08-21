import clientPromise from "@/app/lib/mongodb";

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db("Urban");
		const products = await db.collection("products").find({}).toArray();

		return new Response(JSON.stringify(products), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}

export async function POST(req) {
	try {
		const body = await req.json();
		const client = await clientPromise;
		const db = client.db("Urban");

		const result = await db.collection("products").insertOne(body);

		return new Response(JSON.stringify({ insertedId: result.insertedId }), {
			status: 201,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}
