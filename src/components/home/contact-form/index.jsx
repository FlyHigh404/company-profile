"use client";

import Linkedin from "@/assets/icons/Linkedin";
import Facebook from "@/assets/icons/Facebook";
import Twitter from "@/assets/icons/Twitter";
import Instagram from "@/assets/icons/Instagram";
import Link from "next/link";
import { InputField, TextAreaField } from "@/components/shared/InputField";
import { useState } from "react";

const dataInit = {
	name: "",
	email: "",
	message: ""
};
export default function ContactForm() {
	const [data, setData] = useState(dataInit);
	const handleInputChange = (e) => setData((p) => ({ ...p, [e.target.name]: e.target.value }));
	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(data);
		setData(dataInit);
	};

	return (
		<section className="overflow-hidden w-full min-h-screen py-20 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-[55%_45%] items-center lg:items-start place-items-center gap-4">
			{/* Konten Kiri */}
			<div className="flex flex-col gap-10 text-center lg:text-left">
				<h1 className="typo-h1 typo-gradient">Siap Membantu Mewujudkan Solusi Terbaik</h1>

				<p className="typo-b-lg text-neutral-600">
					Kami terbuka untuk berbagai bentuk kerja sama, konsultasi, maupun pertanyaan terkait layanan dan produk kami.
					Silakan hubungi tim kami melalui formulir atau informasi kontak di bawah ini.
				</p>

				<div className="flex flex-col gap-8">
					<div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center lg:justify-start">
						<div className="space-y-2 font-medium typo-b-lg text-neutral-600">
							<p className="font-bold">Kontak Kami</p>

							<Link
								className="block underline underline-offset-2"
								target="_blank"
								href="mailto:flyhighsinergi.idn@gmail.com"
							>
								flyhighsinergi.idn@gmail.com
							</Link>
							<Link className="block underline underline-offset-2" target="_blank" href="tel:+628543657890">
								+628543657890
							</Link>
						</div>

						<div className="space-y-2 font-medium typo-b-lg text-neutral-600">
							<p className="font-bold">Ikuti Kami</p>

							<div className="flex flex-row gap-4 items-center justify-center">
								<Link target="_blank" href="https://linkedin.com/flyhigh" className="hover:scale-110">
									<Linkedin />
								</Link>
								<Link target="_blank" href="https://facebook.com/flyhigh" className="hover:scale-110">
									<Facebook />
								</Link>
								<Link target="_blank" href="https://x.com/flyhigh" className="hover:scale-110">
									<Twitter />
								</Link>
								<Link href="https://www.instagram.com/flyhighcorp_/" target="_blank" className="hover:scale-110">
									<Instagram />
								</Link>
							</div>
						</div>
					</div>

					<div className="space-y-2 font-medium typo-b-lg text-neutral-600">
						<p className="font-bold">Alamat</p>

						<p>Jl. Medayu No. 123, Ngagel, Surabaya, Indonesia</p>
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href="https://g.co/kgs/Ayppgeb"
							className="typo-b-md underline underline-offset-2"
						>
							Buka di Peta
						</Link>
					</div>
				</div>
			</div>

			{/* Formulir Kanan */}
			<div className="w-full max-w-md md:max-w-lg mt-10 p-10 border-2 border-neutral-300 rounded-2xl shadow-2xs bg-neutral-50 flex flex-col gap-4">
				<h3 className="typo-h3 font-bold text-neutral-700 text-center">Kirim Pesan Cepat</h3>

				<p className="mb-10 typo-b-lg font-medium text-neutral-600 text-center lg:text-left">
					Hubungi kami untuk konsultasi layanan, kerja sama strategis, atau kebutuhan solusi digital khusus.
				</p>

				<form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-12" action="#">
					<InputField label="Nama" type="text" name="name" value={data.name} onChange={handleInputChange} />

					<InputField label="Email" type="email" name="email" value={data.email} onChange={handleInputChange} />

					<TextAreaField rows="4" label="Pesan" name="message" value={data.message} onChange={handleInputChange} />

					<button
						type="submit"
						className="self-start mt-4 px-12 py-3 font-bold typo-b-lg text-white rounded-full bg-gradient-to-r gradient-color hover:scale-105 transition duration-300"
					>
						Kirim
					</button>
				</form>
			</div>
		</section>
	);
}
