'use client'
import { useState } from 'react'
import { Alert, User, Gaji, Stack, Search, Dropdown } from '@/assets/icons/IconCareer'

export default function ListJob() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Semua Tingkat')

  const positions = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'DevOps Engineer', 'Product Manager']
  return (
    <section className="px-[8%] py-[5%] flex flex-col">
      <div className=" flex flex-row gap-3 pb-5">
        <div className="border-b-2  border-neutral-800 flex flex-row ">
          <input className="w-md focus:outline-none" placeholder="Cari Posisi" />

          <Search />
        </div>
        <div className="relative inline-block w-64">
          <div className="flex">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500">
              <span>{selected}</span>
              <Dropdown />
            </button>
          </div>
          {isOpen && (
            <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {positions.map((position, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelected(position)
                    setIsOpen(false)
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

      <div className="grid grid-cols-3 gap-4">
        <div className=" bg-white border-2 rounded-xl p-5 text-neutral-400 font-semibold">
          <h1 className="typo-h4 text-neutral-700 pb-3">Frontend Developer</h1>
          <div className="bg-neutral-300 w-1/4 rounded-2xl">
            <p className="text-neutral-700 text-center typo-lg font-semibold text-lg px-3 py-1">Magang</p>
          </div>

          <div className="pt-6">
            <div className="flex flex-row gap-2">
              <Alert />
              <p>Ditutup 24 november 2025</p>
            </div>
            <div className="flex flex-row gap-2">
              <User />
              <p>pengalaman min 1 tahun</p>
            </div>
            <div className="flex flex-row gap-2">
              <Gaji />
              <p>2.000.000-3.000.000</p>
            </div>
            <div className="flex flex-row gap-2">
              <Stack />
              <p>React, NextJs, HTML, CSS</p>
            </div>
          </div>
          <div className="flex justify-end">
            <a href="/" className="text-lg font-semibold text-white px-10 py-2 inline-block rounded-full bg-gradient-to-r from-[#EF9419] to-[#C94F1E] transition duration-300 hover:scale-110 mt-4">
              Lihat lowongan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
