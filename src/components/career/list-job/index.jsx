"use client";

import { useEffect, useState } from "react";
import { Alert, User, Gaji, Stack, Search, Dropdown } from "@/assets/icons/IconCareer";
import Link from "next/link";

export default function ListJob() {
	const [jobs, setJobs] = useState([]);
	const [selected, setSelected] = useState("Semua Tingkat");
	const [query, setQuery] = useState("");
	const [positions, setPositions] = useState(["Semua Tingkat"]);
	const [filteredJobs, setFilteredJobs] = useState([]);

	// fetch career data
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

	// get unique positions
	useEffect(() => {
		const uniquePositions = Array.from(new Set(jobs.map((job) => job.level)));
		setPositions(["Semua Tingkat", ...uniquePositions]);
	}, [jobs]);

	// filter jobs
	useEffect(() => {
		if (selected === "Semua Tingkat") {
			setFilteredJobs(jobs);
		} else {
			setFilteredJobs(jobs.filter((job) => job.level === selected));
		}

		if (query) {
			setFilteredJobs((p) => p.filter((job) => job.title.toLowerCase().includes(query.toLowerCase())));
		}
	}, [query, selected, jobs]);

	return (
		<section className="px-6 sm:px-[8%] py-16 flex flex-col">
			<div className="flex flex-col md:flex-row gap-4 md:gap-6 pb-10">
				<div className="flex items-center border-b-2 border-neutral-400 w-full md:w-1/2 typo-b-lg">
					<input
						onChange={(e) => setQuery(e.target.value)}
						type="text"
						placeholder="Cari Posisi"
						className="w-full px-3 py-2 focus:outline-none typo-b-md md:typo-b-lg placeholder:text-neutral-500"
					/>
					<Search className="fill-neutral-500" />
				</div>

				<div className="relative w-fit">
					<select
						value={selected}
						onChange={(e) => setSelected(e.target.value)}
						className="cursor-pointer w-full py-2 px-6 pe-11 border border-neutral-400 rounded-full bg-white focus:outline-none focus:ring-1 focus:ring-primary-neutral typo-b-rg text-neutral-800 appearance-none"
					>
						{Array.isArray(positions) &&
							positions.map((position, i) => (
								<option key={i} value={position} className="typo-b-rg text-neutral-800">
									{position}
								</option>
							))}
					</select>

					<div className="absolute inset-y-0 right-4 flex items-center">
						<Dropdown />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredJobs.map((job, i) => (
					<div key={i} className="p-6 border border-neutral-400 rounded-xl bg-white">
						<h1 className="font-bold tracking-tight typo-b-lg text-neutral-800">{job.title}</h1>

						<div className="mt-3 px-4 py-1 bg-neutral-200 w-fit rounded-full">
							<p className="font-medium tracking-wider typo-b-sm text-neutral-800">{job.level}</p>
						</div>

						<div className="mt-8 space-y-2 font-medium typo-b-sm text-neutral-600">
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

						<div className="mt-10 flex justify-end">
							<Link
								href={`/career/${job.id}`}
								className="block px-6 py-2 rounded-full bg-gradient-to-r gradient-color font-medium typo-b-sm text-neutral-50 transition duration-300 hover:scale-105"
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
