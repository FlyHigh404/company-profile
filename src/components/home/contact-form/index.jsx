'use client'

import Linkedin from '@/assets/icons/Linkedin'
import Facebook from '@/assets/icons/Facebook'
import Twitter from '@/assets/icons/Twitter'
import Instagram from '@/assets/icons/Instagram'
import Link from 'next/link'
import { InputField, TextAreaField } from '@/components/shared/InputField'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const dataInit = {
  name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [data, setData] = useState(dataInit)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleInputChange = (e) => setData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.status === 200) {
        setSuccess(true)
        toast.success('Pesan Anda telah terkirim.')
        setData(dataInit)
      } else {
        setError(true)
        toast.error(result.message || 'Terjadi kesalahan saat mengirim pesan.')
      }
    } catch (err) {
      console.error(err)
      setError(true)
      toast.error('Gagal menghubungi server. Silakan coba lagi nanti.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <section className="overflow-hidden w-full min-h-screen py-20 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-[55%_45%] items-center lg:items-start place-items-center gap-4">
        <div className="flex flex-col gap-10 text-center lg:text-left">
          <h1 className="typo-h1 typo-gradient">Siap Membantu Mewujudkan Solusi Terbaik</h1>
          <p className="typo-b-lg text-neutral-600">
            Kami terbuka untuk berbagai bentuk kerja sama, konsultasi, maupun pertanyaan terkait layanan dan produk kami. Silakan hubungi tim kami melalui formulir atau informasi kontak di bawah ini.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center lg:justify-start">
              <div className="space-y-2 font-medium typo-b-lg text-neutral-600">
                <p className="font-bold">Kontak Kami</p>
                <Link className="block underline underline-offset-2" href="mailto:flyhighsinergi.idn@gmail.com" target="_blank">
                  flyhighsinergi.idn@gmail.com
                </Link>
                <Link className="block underline underline-offset-2" href="tel:+628543657890" target="_blank">
                  +628543657890
                </Link>
              </div>

              <div className="space-y-2 font-medium typo-b-lg text-neutral-600">
                <p className="font-bold">Ikuti Kami</p>
                <div className="flex flex-row gap-4 items-center">
                  <Link target="_blank" href="https://www.linkedin.com/company/cv-flyhigh-sinergi-indonesia/" className="hover:scale-110">
                    <Linkedin />
                  </Link>
                  <Link target="_blank" href="https://facebook.com/flyhigh" className="hover:scale-110">
                    <Facebook />
                  </Link>
                  <Link target="_blank" href="https://x.com/flyhigh" className="hover:scale-110">
                    <Twitter />
                  </Link>
                  <Link target="_blank" href="https://www.instagram.com/flyhighcorp_/" className="hover:scale-110">
                    <Instagram />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-2 font-medium typo-b-lg text-neutral-600">
              <p className="font-bold">Alamat</p>
              <p>Jl. Medayu No. 123, Ngagel, Surabaya, Indonesia</p>
              <Link target="_blank" href="https://g.co/kgs/Ayppgeb" className="underline underline-offset-2">
                Buka di Peta
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md md:max-w-lg mt-10 p-10 border-2 border-neutral-300 rounded-2xl shadow-2xs bg-neutral-50 flex flex-col gap-4">
          <h3 className="typo-h3 font-bold text-neutral-700 text-center">Kirim Pesan Cepat</h3>
          <p className="mb-10 typo-b-lg font-medium text-neutral-600 text-center lg:text-left">Hubungi kami untuk konsultasi layanan, kerja sama strategis, atau kebutuhan solusi digital khusus.</p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <InputField type="text" name="name" value={data.name} onChange={handleInputChange} placeholder="Nama Anda" />
            <InputField type="email" name="email" value={data.email} onChange={handleInputChange} placeholder="Email Aktif" />
            <TextAreaField rows="4" name="message" value={data.message} onChange={handleInputChange} placeholder="Tulis pesan Anda di sini..." />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 self-start mt-4 px-12 py-3 font-bold typo-b-lg text-white rounded-full bg-gradient-to-r gradient-color hover:scale-105 transition duration-300 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Mengirim...
                </>
              ) : (
                'Kirim'
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
