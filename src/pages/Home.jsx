import Navbar from "../components/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#09090B]">
            <Navbar/>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Highlights />
        </div>
    );
}