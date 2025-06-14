import Image from "next/image";
import testiKarir1 from "@/assets/images/testi-karir-1.png";
import testiKarir2 from "@/assets/images/testi-karir-2.png";
import testiKarir3 from "@/assets/images/testi-karir-3.png";

const testimonials = [
	{
		image: testiKarir1,
		name: "Alexa",
		role: "Frontend Developer Intern",
		text: "Monthly meeting dan kegiatan-kegiatan lain yang menyenangkan."
	},
	{
		image: testiKarir2,
		name: "Lava",
		role: "Backend Developer Intern",
		text: "Monthly meeting dan kegiatan-kegiatan lain yang menyenangkan."
	},
	{
		image: testiKarir3,
		name: "Teri",
		role: "Frontend Developer Intern",
		text: "Monthly meeting dan kegiatan-kegiatan lain yang menyenangkan."
	}
];

export default function Testimoni() {
	return (
		<section className="px-6 sm:px-[8%] py-12">
			<div className="flex flex-col justify-center gap-10">
				<h1 className="typo-h1 typo-gradient gradient-color text-center">Apa Kata Mereka?</h1>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((item, index) => (
						<div key={index} className="flex flex-col items-center justify-center gap-4 text-center">
							<Image
								src={item.image}
								alt={`Testimoni Karir ${index + 1}`}
								width={300}
								height={300}
								className="w-4/5 max-w-[250px] sm:w-full h-auto"
							/>
							<h5 className="typo-h5 font-bold text-neutral-800">
								{item.name} - {item.role}
							</h5>
							<p className="typo-b-md  text-neutral-700">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
