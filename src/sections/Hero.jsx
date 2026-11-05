import { motion } from "motion/react";
import { ArrowUpRight, Download, Code2, Sparkles } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#09090B] px-6 pt-28 pb-16 lg:px-16">
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]"/>
            {/* Main Content */}
            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* Left Content */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                        <Sparkles size={15} />
                        Welcome to my creative space    
                    </div>

                    <p className="mb-3 text-lg text-zinc-400">
                        Hello, I'm    
                    </p> 

                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl xl:text-7xl">
                        Aprajita
                        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                            Mishra.
                        </span>
                    </h1>

                    <h2 className="mt-6 text-xl font-semibold text-zinc-200 sm:text-2xl">
                        Full-Stack Developer
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
                        | build modern, responsive and user friendly web applications. Passionate about creating meaningful digital
                        experiences through clean code, thoughtful design ad intelligent technology.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 font-semibold text-white transition-all hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/25">
                            Explore My Work
                            <ArrowUpRight size={18}/>
                        </a>

                        <a href="/Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-all hover:border-violet-400 hover:text-violet-400">
                            Download Resume
                            <Download size={18}/>
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-5">
                        <a href="https://github.com/AprajitaMishra-CS" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-400 transition-colors hover:text-white">
                            <FaGithub size={23} />
                        </a>

                        <a href="https://linkedin.com/in/aprajitamishra-cs" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-400 transition-colors hover:text-white">
                            <FaLinkedin size={23}/>
                        </a>
                    </div>
                </motion.div> 

                {/* Right content */}
                <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex min-h-[380px] items-center justify-center">
                    <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[90px]"/>

                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative flex h-72 w-72 items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-500/20 via-[#171522] to-blue-500/10 shadow-2xl shadow-violet-900/20 sm:h-96 sm:w-96">
                        <div className="absolute inset-5 rounded-[32px] border border-white/10"/>

                        <div className="text-center">
                            <Code2 size={100} strokeWidth={1} className="mx-auto text-violet-300"/>

                            <p className="mt-6 text-3xl font-bold tracking-widest text-white">
                                {"<DEV/>"}
                            </p>

                            <p className="mt-2 text-sm tracking-[0.3em] text-zinc-400">
                                BUILD &bull; CREATE &bull; INNOVATE
                            </p>
                        </div>

                        <div className="absolute -right-7 top-12 rounded-xl border border-white/10 bg-[#18181F] px-4 py-3 text-sm text-violet-300 shadow-xl">
                            React.js
                        </div>

                        <div className="absolute -bottom-5 left-0 rounded-xl border border-white/10 bg-[#18181F] px-4 py-3 text-sm text-blue-300 shadow-xl">
                            Node.js
                        </div>

                        <div className="absolute -left-7 top-1/2 rounded-xl border border-white/10 bg-[#18181F] px-4 py-3 text-sm text-purple-300 shadow-xl">
                            JavaScript
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}