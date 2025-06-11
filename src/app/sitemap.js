export const revalidate = 604800; // 1 week

export default async function sitemap() {
	let career = [];

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/career.json`).then((res) => res.json());
		career = res;
	} catch (error) {
		console.error("Expected build error:", error);
	}

	const urls = career.map((c) => ({
		url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/career/${c.id}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.7
	}));

	return [
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/career`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9
		},
		...urls
	];
}
