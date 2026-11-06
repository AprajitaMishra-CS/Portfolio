import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink, HeartPulse, ShieldCheck, CalendarDays, BrainCircuit, FileText, Bell, Users, } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const technologies = [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "JWT",
    "Gemini API",
];

const features = [
    {
        icon: BrainCircuit,
        title: "AI Symptom Assistance",
        description: "Integrates Gemini API to provide AI-assisted symptom guidance to users.",
    },
    {
        icon: CalendarDays,
        title: "Appointment Management",
        description: "Allows patients to book appointments and manage their healthcare interactions.",
    },
    {
        icon: ShieldCheck,
        title: "Role-Based Authentication",
        description: "JWT-based authentication with separate access for patients, doctors, and administrators.",
    },
    {
        icon: FileText,
        title: "Medical Records",
        description: "Supports digital medical records and prescription management.",
    },
    {
        icon: Bell,
        title: "Notifications",
        description: "Provides notifications to keep users informed about relevant activities.",
    },
    {
        icon: Users,
        title: "Multiple User Roles",
        description: "Provides dedicated experiences for patients, doctors, and administrators.",
    },
];

export default function IntelliPhoenix() {
    return (
        <main className="min-h-screen bg-[#09090B] px-5 py-10 text-white sm:px-8 lg:px-16">
            <div className="mx-auto max-w-6xl">
                <Link to="/#projects" className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-400" >
                    <ArrowLeft size={17} />
                    Back to Projects
                </Link>

                <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
                        <HeartPulse size={15} />
                        AI-POWERED HEALTHCARE PLATFORM
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        IntelliPhoenix
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                        A smart healthcare platform combining AI-assisted
                        symptom guidance, appointment management, doctor
                        recommendations, and digital healthcare services.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="https://intelliphoenix.onrender.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold transition hover:bg-violet-600" >
                            Live Demo <ExternalLink size={16} />
                        </a>

                        <a href="https://github.com/AprajitaMishra-CS/intelliphoenix" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-violet-400">
                            <FaGithub size={17} /> Source Code
                        </a>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-violet-950/20">
                        <img src="/images/intelliphoenix/Preview.png" alt="IntelliPhoenix AI-Powered Healthcare Platform" className="h-auto w-full rounded-2xl object-cover" />
                    </div>
                </motion.div>

                <section className="mt-24 grid gap-10 md:grid-cols-[1fr_0.7fr]">
                    <div>
                        <p className="mb-3 text-sm font-medium text-violet-400">
                            PROJECT OVERVIEW
                        </p>

                        <h2 className="text-3xl font-bold">
                            About the Project
                        </h2>

                        <p className="mt-6 leading-8 text-zinc-400">
                            IntelliPhoenix is a full-stack healthcare application
                            designed to simplify interactions between patients,
                            doctors, and administrators. It brings essential
                            healthcare workflows together in one platform while
                            integrating AI-assisted symptom guidance.
                        </p>

                        <p className="mt-4 leading-8 text-zinc-400">
                            The project focuses on practical healthcare workflows,
                            secure user access, and an accessible digital experience.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">
                        <h3 className="text-lg font-semibold">Project Details</h3>

                        <div className="mt-6 space-y-5 text-sm">
                            <div>
                                <p className="text-zinc-500">Project Type</p>
                                <p className="mt-1 text-zinc-200">Full-Stack Web Application</p>
                            </div>

                            <div>
                                <p className="text-zinc-500">Domain</p>
                                <p className="mt-1 text-zinc-200">Healthcare Technology</p>
                            </div>

                            <div>
                                <p className="text-zinc-500">AI Integration</p>
                                <p className="mt-1 text-zinc-200">Google Gemini API</p>
                            </div>

                            <div>
                                <p className="text-zinc-500">Deployment</p>
                                <p className="mt-1 text-zinc-200">Render</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-24">
                    <p className="mb-3 text-sm font-medium text-violet-400">
                        CORE FUNCTIONALITY
                    </p>

                    <h2 className="text-3xl font-bold">Key Features</h2>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-[#111114] p-6 transition hover:border-violet-500/40">
                                    <Icon size={25} className="text-violet-400" />

                                    <h3 className="mt-5 font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                <section className="mt-24">
                    <p className="mb-3 text-sm font-medium text-violet-400">
                        TECHNOLOGY
                    </p>

                    <h2 className="text-3xl font-bold">Tech Stack</h2>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {technologies.map((tech) => (
                            <span key={tech} className="rounded-lg border border-white/10 bg-[#111114] px-4 py-3 text-sm text-zinc-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mt-24 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-blue-500/5 p-8 sm:p-12">
                    <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="text-2xl font-bold">
                                Explore IntelliPhoenix
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-zinc-400">
                                Explore the live application or review its source code.
                            </p>
                        </div>

                        <a href="https://github.com/AprajitaMishra-CS/intelliphoenix" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white">
                            View on GitHub <ArrowUpRight size={17} />
                        </a>
                    </div>
                </section>

                <div className="mt-16 border-t border-white/10 pt-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
                        <ArrowLeft size={16} />
                        Return to Portfolio
                    </Link>
                </div>

            </div>
        </main>
    );
}