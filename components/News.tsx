"use client";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

const news = [
    {
        title: "Sosialisasi Kurikulum Merdeka di Jakarta Utara",
        date: "27 Nov 2025",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1544531696-b761aa51143c?q=80&w=1000&auto=format&fit=crop",
        summary: "Sudin Pendidikan Wilayah II menggelar sosialisasi implementasi Kurikulum Merdeka bagi sekolah-sekolah di wilayah Jakarta Utara."
    },
    {
        title: "Prestasi Siswa Jakut di Olimpiade Sains Nasional",
        date: "25 Nov 2025",
        author: "Humas",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1000&auto=format&fit=crop",
        summary: "Selamat kepada para siswa yang telah berhasil meraih medali emas pada ajang OSN tingkat nasional tahun ini."
    },
    {
        title: "Peningkatan Kompetensi Guru Melalui Workshop Digital",
        date: "20 Nov 2025",
        author: "Dikdas",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
        summary: "Workshop pemanfaatan teknologi digital dalam pembelajaran diikuti oleh ratusan guru dari berbagai jenjang pendidikan."
    },
];

export default function News() {
    return (
        <section id="news" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                        >
                            Berita Terkini
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 text-lg"
                        >
                            Informasi terbaru seputar pendidikan di Jakarta Utara.
                        </motion.p>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        Lihat Semua Berita &rarr;
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    Berita
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                                    <div className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {item.date}</div>
                                    <div className="flex items-center"><User className="w-3 h-3 mr-1" /> {item.author}</div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {item.summary}
                                </p>
                                <span className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center">
                                    Baca Selengkapnya
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <button className="text-blue-600 font-semibold hover:text-blue-700">Lihat Semua Berita &rarr;</button>
                </div>
            </div>
        </section>
    );
}
