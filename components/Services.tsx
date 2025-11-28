"use client";
import { motion } from "framer-motion";
import { GraduationCap, Info, FileText, MessageSquare, Database, UserCheck, ArrowRight } from "lucide-react";

const services = [
    { title: "PPDB Online", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Informasi Sekolah", icon: <Info className="w-6 h-6" /> },
    { title: "Layanan Administratif", icon: <FileText className="w-6 h-6" /> },
    { title: "Pengaduan Masyarakat", icon: <MessageSquare className="w-6 h-6" /> },
    { title: "Data Pendidikan", icon: <Database className="w-6 h-6" /> },
    { title: "Pembinaan GTK", icon: <UserCheck className="w-6 h-6" /> },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                    >
                        Layanan Publik
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="text-gray-600 text-lg"
                    >
                        Akses mudah dan cepat ke berbagai layanan pendidikan.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1.0] }}
                            className="group p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:rotate-6 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                    {service.icon}
                                </div>
                                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
