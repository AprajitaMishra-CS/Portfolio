import Navbar from "../components/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#09090B]">
            <Navbar/>
            <Hero />
            <About />
        </div>
    );
}