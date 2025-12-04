import Header from "@/src/presentation/components/Header";
import Hero from "@/src/presentation/components/Hero";
import About from "@/src/presentation/components/About";
import Programs from "@/src/presentation/components/Programs";
import Services from "@/src/presentation/components/Services";
import News from "@/src/presentation/components/News";
import Contact from "@/src/presentation/components/Contact";
import Footer from "@/src/presentation/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Programs />
            <Services />
            <News />
            <Contact />
            <Footer />
        </main>
    );
}
