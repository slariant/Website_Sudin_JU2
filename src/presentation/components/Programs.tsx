"use client";
import { motion } from "framer-motion";
import { Monitor, Users, BookOpen, Activity } from "lucide-react";

const programs = [
    {
        title: "ANBK & Asesmen",
        description: "Pelaksanaan Asesmen Nasional Berbasis Komputer untuk pemetaan mutu pendidikan secara berkala.",
        icon: <Monitor className="w-8 h-8 text-white" />,
        color: "bg-blue-600",
    },
    {
        title: "Pengembangan GTK",
        description: "Program pelatihan dan workshop intensif untuk meningkatkan profesionalisme guru.",
        icon: <Users className="w-8 h-8 text-white" />,
        color: "bg-indigo-600",
    },
    {
        title: "Literasi Sekolah",
        description: "Gerakan literasi sekolah untuk menumbuhkan minat baca dan kemampuan berpikir kritis siswa.",
        icon: <BookOpen className="w-8 h-8 text-white" />,
        color: "bg-teal-600",
    },
    {
        title: "Sekolah Sehat",
        description: "Mewujudkan lingkungan sekolah yang bersih, sehat, dan kondusif untuk pembelajaran.",
        icon: <Activity className="w-8 h-8 text-white" />,
        color: "bg-emerald-600",
    },
];

export default function Programs() {
    return (
        <section id="programs" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                    >
                        Program Unggulan
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Berbagai inisiatif strategis yang kami jalankan untuk meningkatkan kualitas pendidikan di Jakarta Utara.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow transition-colors duration-300 group"
                        >
                            <div className={`p-6 ${program.color} flex justify-center items-center h-32`}>
                                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                    {program.icon}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{program.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
