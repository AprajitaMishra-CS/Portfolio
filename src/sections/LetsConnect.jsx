import { motion } from "motion/react";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LetsConnect() {
    return (
        <section id="contact" className="relative overflow-hidden bg-[#09090B] px-5 py-28 sm:px-8 lg:px-16">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]"/>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-4xl text-center">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                    <Sparkles size={15} />
                    HAVE A PROJECT IN MIND ?
                </div>

                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                    Let's Build Something
                    <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                        Meaningful Together.
                    </span>
                </h2>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                    I'm always open to discussing new opportunities, collaborating on interesting projects, and connecting
                    with people who love building technology.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a href="mailto:mishraaprajita700@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-600">
                        Get In Touch
                        <ArrowUpRight size={17} />
                    </a>

                    <a href="https://github.com/AprajitaMishra-CS" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-violet-500/50">
                        <FaGithub size={17} />
                        GitHub
                    </a>
                </div>

                <div className="mt-12 flex items-center justify-center gap-5">
                    <a href="https://github.com/AprajitaMishra-CS" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-zinc-500 transition hover:text-white">
                        <FaGithub size={22} />
                    </a>

                    <a href="https://linkedin.com/in/aprajitamishra-cs" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-zinc-500 transition hover:text-white">
                        <FaLinkedin size={22} />
                    </a>

                    <a href="mailto:mishraaprajita700@gmail.com" aria-label="Send Email" className="text-zinc-500 transition hover:text-white">
                        <Mail size={22} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}