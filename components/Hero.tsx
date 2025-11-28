"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={ref} id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src="/images/education-bg.png"
                    alt="Education Background"
                    className="w-full h-full object-cover"
                />
            </motion.div>
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 z-20 text-center text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/50 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm drop-shadow-lg" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.7)' }}>
                        Selamat Datang di Portal Resmi
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.7)' }}>
                        Suku Dinas Pendidikan Wilayah II <br />
                        <span className="text-blue-300">Jakarta Utara</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed"
                    style={{ textShadow: '0 3px 12px rgba(0,0,0,0.7)' }}
                >
                    Mendukung peningkatan mutu pendidikan yang berkualitas, inklusif, dan inovatif untuk masa depan generasi bangsa.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all shadow-lg shadow-blue-600/30"
                    >
                        Informasi Layanan
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all"
                    >
                        Program Unggulan
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
