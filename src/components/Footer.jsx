import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#09090B] px-5 py-8 sm:px-8 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
                <a href="#home">
                    <img src="/images/logo.png" className="h-20 w-20 rounded-full" />
                </a>

                <p className="text-center text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} Aprajita Mishra. All right reserved.
                </p>

                <div className="flex items-center gap-5">
                    <a href="https://github.com/AprajitaMishra-CS" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-500 transition hover:text-white">
                        <FaGithub size={19} />
                    </a>

                    <a href="https://linkedin.com/in/aprajitamishra-cs" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-500 transition hover:text-white">
                        <FaLinkedinIn size={19} />
                    </a>

                    <a href="#home" aria-label="Back to top" className="text-zinc-500 transition hover:text-violet-400">
                        <ArrowUpRight size={19} />
                    </a>
                </div>
            </div>
        </footer>
    )
} 