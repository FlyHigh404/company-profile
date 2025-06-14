"use client";

import { useEffect, useState } from "react";
import { Alert, User, Gaji, Stack, Search, Dropdown } from "@/assets/icons/IconCareer";
import Link from "next/link";

export default function ListJob() {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("Semua Tingkat");
	const [jobs, setJobs] = useState([]);
	const [filteredJobs, setFilteredJobs] = useState([]);
	const [positions, setPositions] = useState(["Semua Tingkat"]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("/career.json");
				const data = await response.json();
				setJobs(data);
				setFilteredJobs(data);
			} catch (error) {
				console.error("Gagal memuat data:", error);
			}
		};
		getData();
	}, []);

	useEffect(() => {
		if (selected === "Semua Tingkat") {
			setFilteredJobs(jobs);
		} else {
			setFilteredJobs(jobs.filter((job) => job.level === selected));
		}
	}, [selected, jobs]);

	return (
		<section className="px-6 sm:px-[8%] py-16 flex flex-col">
			<div className="flex flex-col md:flex-row gap-4 md:gap-6 pb-10">
				<div className="flex items-center border-b-2 border-neutral-800 w-full md:w-1/2">
					<input className="w-full px-3 py-2 focus:outline-none typo-b-md md:typo-b-lg" placeholder="Cari Posisi" />
					<Search />
				</div>

				<div className="relative w-full md:w-64">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="w-full px-4 py-2 bg-white border border-gray-300 shadow-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full typo-b-sm md:typo-b-lg"
					>
						<span>{selected}</span>
						<Dropdown />
					</button>

					{isOpen && (
						<ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto typo-b-sm">
							{positions.map((position, index) => (
								<li
									key={index}
									onClick={() => {
										setSelected(position);
										setIsOpen(false);
									}}
									className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
								>
									{position}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredJobs.map((job) => (
					<div key={job.id} className="bg-white border-2 rounded-xl p-5 text-neutral-400 font-semibold shadow-sm">
						<h1 className="typo-b-lg text-neutral-700 pb-3 font-bold">{job.title}</h1>
						<div className="bg-neutral-300 w-fit rounded-2xl px-3 py-1 mb-4">
							<p className="text-neutral-700 text-center font-semibold typo-b-sm">{job.level}</p>
						</div>

						<div className="pt-2 space-y-2 typo-b-sm text-neutral-700">
							<div className="flex gap-2 items-start">
								<Alert />
								<p>{job.detail.time}</p>
							</div>
							<div className="flex gap-2 items-start">
								<User />
								<p>{job.detail.experience}</p>
							</div>
							<div className="flex gap-2 items-start">
								<Gaji />
								<p>{job.detail.salary}</p>
							</div>
							<div className="flex gap-2 items-start">
								<Stack />
								<p>{job.detail.tech.join(", ")}</p>
							</div>
						</div>

						<div className="flex justify-end">
							<Link
								href={`/career/${job.id}`}
								className="typo-b-sm font-semibold text-white px-6 py-2 inline-block rounded-full bg-gradient-to-r from-[#EF9419] to-[#C94F1E] transition duration-300 hover:scale-105 mt-4"
							>
								Lihat lowongan
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
