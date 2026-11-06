import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Highlights", href: "#highlights" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#09090B]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
                <Link to="/" className="text-xl font-bold tracking-tight text-white">
                    <img src="/images/logo.png" className="h-12 w-12 rounded-full" />
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-violet-400">
                            {link.name}
                        </a>
                    ))}
                </div>

                <a href="#contact" className="hidden items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/20 md:flex">
                    Let's Connect
                    <ArrowUpRight size={16}/>
                </a>

                <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
                    {isOpen ? <X size={26}/> : <Menu size={26}/>}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-white/10 bg-[#09090B] px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a className="text-sm font-medium text-zinc-400 transition-colors hover:text-violet-400">
                                {link.name}
                            </a>
                        ))}

                        <a href="#contact" onClick={() => setIsOpen(false)} className="flex w-fit items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white">
                            Let's Connect
                            <ArrowUpRight size={16}/>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
} 