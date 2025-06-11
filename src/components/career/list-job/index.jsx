export default function ListJob(){
    return(
        <section className="px-[8%] py-[5%] flex flex-col">
                <div>
                    <p>search</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className=" bg-amber-300 border-2 text-neutral-400">
                        <h1>Frontend Developer</h1>
                        <p>Magang</p>

                        <div>
                            <p>Ditutup 24 november 2025</p>
                            <p>pengalaman min 1 tahun</p>
                            <p>2.000.000-3.000.000</p>
                            <p>React, NextJs, HTML, CSS</p>
                        </div>

                        <button className="bg-gradient-to-r from-[#f1740d] to-[#f4541c] text-white py-2 px-4 rounded-md mt-4">Lihat lowongan</button>

                    </div>
                </div>
        </section>
    )
}