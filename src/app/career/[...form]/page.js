"use client";

import CpuSvg from "@/assets/icons/Cpu";
import DangerSvg from "@/assets/icons/Danger";
import MoneySvg from "@/assets/icons/Money";
import UserAiSvg from "@/assets/icons/UserAi";
import ArrowLeft2 from "@/assets/icons/ArrowLeft2";
import Wizard1 from "@/assets/icons/Wizard1";
import Wizard2 from "@/assets/icons/Wizard2";
import Wizard3 from "@/assets/icons/Wizard3";
import { InputField, TextAreaField, CheckBoxField } from "@/components/shared/InputField";
import NavigationBar from "@/components/shared/NavigationBar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import toast, { Toaster } from "react-hot-toast";

const dataInit = {
	name: "",
	email: "",
	phone: "",
	linkedin: "",
	github: "",
	cv: "",
	portfolio: "",
	reason: "",
	career: null
};
const formSections = ["Informasi Pribadi", "Pengalaman & Portofolio", "Motivasi & Konfirmasi"];
export default function CareerForm() {
	const router = useRouter();
	const params = useParams();
	const paramsId = params.form?.[0] || "";

	const [career, setCareer] = useState();
	useEffect(() => {
		const fetchCareerDetail = async () => {
			const loadingToast = toast.loading("Memuat detail karir...");
			try {
				const res = await fetch("/career.json");
				if (!res.ok) {
					toast.dismiss(loadingToast);
					return toast.error("Gagal memuat detail karir.");
				}
				const data = await res.json();

				const careerData = data.find((item) => item.id === paramsId);
				if (!careerData) {
					toast.dismiss(loadingToast);
					return router.push("/career");
				}

				setCareer(careerData);
				toast.dismiss(loadingToast);
			} catch (error) {
				console.error("Error fetching career detail:", error);
				toast.error("Terjadi kesalahan saat memuat detail karir.");
				toast.dismiss(loadingToast);
			}
		};

		fetchCareerDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [activeSection, setActiveSection] = useState(0);
	const [data, setData] = useState(dataInit);
	const [confirm, setConfirm] = useState(false);
	const handleInputChange = (e) => setData((p) => ({ ...p, [e.target.name]: e.target.value }));
	const handleBackClick = () => {
		if (activeSection > 0) {
			setActiveSection((prev) => prev - 1);
		}
	};
	const handleButtonClick = (e) => {
		if (activeSection < formSections.length - 1) {
			e.preventDefault();
			setActiveSection((n) => n + 1);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const loadingToast = toast.loading("Mengirim lamaran...");

		try {
			const body = JSON.stringify({ ...data, career: career });
			const res = await fetch("/api/career", {
				method: "POST",
				body
			});

			if (res.status.toString().startsWith("4")) {
				toast.error("Pastikan sudah mengisi form dengan benar, silakan cek kembali.");
			}
			if (res.status.toString().startsWith("5")) {
				toast.error("Terjadi kesalahan pada server, silakan coba lagi nanti.");
			}
			if (res.status.toString().startsWith("2")) {
				setData(dataInit);
				setConfirm(false);
				setActiveSection(0);
				toast.success("Lamaran Anda telah berhasil dikirim! Terima kasih atas minat Anda.");
			}

			toast.dismiss(loadingToast);
		} catch (error) {
			console.log("Error submitting career application:", error);

			toast.error("Terjadi kesalahan saat mengirim lamaran. Silakan coba lagi.");
			toast.dismiss(loadingToast);
		}
	};

	return (
		<>
			<NavigationBar />
			<main className="py-8 grid justify-items-center grid-cols-1 md:grid-cols-2">
				{/* Detail */}
				<section className="w-full max-w-xl p-4 sm:p-8 font-medium typo-b-rg text-neutral-600 flex flex-col gap-8">
					<Link href="/career" className="size-fit p-1 rounded-full hover:bg-neutral-200 -translate-x-1/3">
						<ArrowLeft2 className="w-6 h-6 fill-neutral-800" />
					</Link>

					<div>
						<h1 className="typo-h2 text-neutral-800">{career?.title || ""}</h1>
						<p className="typo-h4 text-neutral-800">{career?.level || ""}</p>
					</div>

					{career?.detail && (
						<div className="text-neutral-800 flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<DangerSvg /> <p>{career.detail?.time || ""}</p>
							</div>
							<div className="flex items-center gap-2">
								<UserAiSvg /> <p>{career.detail?.experience || ""}</p>
							</div>
							<div className="flex items-center gap-2">
								<MoneySvg /> <p>{career.detail?.salary || ""}</p>
							</div>
							<div className="flex items-center gap-2">
								<CpuSvg /> <p>{career.detail?.tech.join(", ") ?? ""}</p>
							</div>
						</div>
					)}

					<div className="flex flex-col gap-2">
						<h2 className="typo-h5 text-neutral-700">Deskripsi</h2>

						<p>{career?.description || ""}</p>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="typo-h5 text-neutral-700">Tanggung Jawab</h2>

						<ul className="list-disc pl-5">
							{career?.responsibilities && career.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
						</ul>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="typo-h5 text-neutral-700">Kualifikasi</h2>

						<ul className="list-disc pl-5">
							{career?.qualification && career.qualification.map((item, i) => <li key={i}>{item}</li>)}
						</ul>
					</div>
				</section>

				{/* Form */}
				<section className="w-full max-w-2xl py-8 px-4 my-8 flex flex-col gap-10">
					{/* Wizard */}
					<div className="w-full scale-80 flex items-center">
						<div>
							<Wizard1 />
						</div>
						<div
							className={`transition-all w-full h-1 scale-[102%] bg-primary-neutral ${
								activeSection < 1 && "opacity-50"
							}`}
						/>
						<div className={`transition-all ${activeSection < 1 && "opacity-50"}`}>
							<Wizard2 />
						</div>
						<div
							className={`transition-all w-full h-1 scale-[102%] bg-primary-neutral ${
								activeSection < 2 && "opacity-50"
							}`}
						/>
						<div className={`transition-all ${activeSection < 2 && "opacity-50"}`}>
							<Wizard3 />
						</div>
					</div>

					{/* Header */}
					<div className="px-4 flex items-center gap-6">
						<motion.button
							onClick={handleBackClick}
							style={{ opacity: activeSection > 0 ? 1 : 0 }}
							className="cursor-pointer"
						>
							<ArrowLeft2 className="w-6 h-6 fill-neutral-800" />
						</motion.button>
						<h3 className="typo-h3">{formSections[activeSection]}</h3>
					</div>

					{/* Form Fields */}
					<form
						onSubmit={handleSubmit}
						className="w-full px-4 md:px-8 pb-8 pt-16 rounded-4xl bg-primary-lightest/50 flex flex-col justify-between gap-20"
					>
						<AnimatePresence mode="wait">
							{/* Informasi Pribadi */}
							{activeSection === 0 && (
								<motion.div
									key={0}
									variants={variants}
									initial="initial"
									animate="animate"
									exit="exit"
									className="w-full flex flex-col gap-12"
								>
									<InputField
										label="Nama Lengkap"
										type="text"
										name="name"
										required
										value={data.name}
										onChange={handleInputChange}
									/>

									<InputField label="Email" type="email" name="email" value={data.email} onChange={handleInputChange} />

									<InputField
										label="Nomor Telepon"
										type="text"
										name="phone"
										required
										value={data.phone}
										onChange={handleInputChange}
									/>
								</motion.div>
							)}

							{/* Pengalaman & Portofolio */}
							{activeSection === 1 && (
								<motion.div
									key={1}
									variants={variants}
									initial="initial"
									animate="animate"
									className="w-full flex flex-col gap-12"
								>
									<InputField
										label="Tautan Profil Linkedin"
										type="text"
										name="linkedin"
										required
										value={data.linkedin}
										onChange={handleInputChange}
									/>

									<InputField
										label="Tautan Github"
										type="text"
										name="github"
										required
										value={data.github}
										onChange={handleInputChange}
									/>

									<InputField label="Tautan CV" type="text" name="cv" value={data.cv} onChange={handleInputChange} />

									<InputField
										label="Tautan Portfolio"
										type="text"
										name="portfolio"
										required
										value={data.portfolio}
										onChange={handleInputChange}
									/>
								</motion.div>
							)}

							{/* Motivasi & Konfirmasi */}
							{activeSection === 2 && (
								<motion.div
									key={2}
									variants={variants}
									initial="initial"
									animate="animate"
									exit="exit"
									className="w-full flex flex-col gap-12"
								>
									<TextAreaField
										rows={5}
										label="Alasan Melamar"
										type="text"
										name="reason"
										required
										value={data.reason}
										onChange={handleInputChange}
									/>

									<CheckBoxField
										label="Saya menyatakan bahwa semua informasi yang saya berikan dalam formulir lamaran ini adalah benar dan akurat."
										name="confirm"
										required
										checked={confirm}
										onChange={(e) => setConfirm(e.target.checked)}
									/>
								</motion.div>
							)}
						</AnimatePresence>

						<button
							type="submit"
							onClick={handleButtonClick}
							disabled={
								(activeSection === 0 && (!data.name || !data.email || !data.phone)) ||
								(activeSection === 1 && (!data.linkedin || !data.github || !data.cv || !data.portfolio)) ||
								(activeSection === 2 && (!data.reason || !confirm))
							}
							className="cursor-pointer w-11/12 p-4 rounded-full bg-gradient-to-r gradient-color font-semibold tracking-wide typo-b-lg text-neutral-50 disabled:opacity-50 disabled:cursor-default"
						>
							{activeSection === formSections.length - 1 ? "Kirim Lamaran" : "Langkah Berikutnya"}
						</button>
					</form>
				</section>
			</main>
			<Footer />

			<Toaster position="bottom-right" />
		</>
	);
}

const variants = {
	initial: { x: -20, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: 20, opacity: 0 }
};
