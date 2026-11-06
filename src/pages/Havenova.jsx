import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Home, Search, MapPin, SlidersHorizontal, ShieldCheck, LayoutDashboard, CheckCircle2, } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const features = [
    {
        icon: Search,
        title: "Property Discovery",
        description: "Explore accommodation listings through a clean and intuitive browsing experience.",
    },
    {
        icon: SlidersHorizontal,
        title: "Search & Filtering",
        description: "Find relevant stays more easily using the platform's search and filtering interface.",
    },
    {
        icon: MapPin,
        title: "Location-Based Listings",
        description: "Present property information in a way that helps users understand where a stay is located.",
    },
    {
        icon: ShieldCheck,
        title: "User Authentication",
        description: "Provide account-based access to platform features.",
    },
    {
        icon: LayoutDashboard,
        title: "Listing Management",
        description: "Organize property information through listing-related functionality.",
    },
    {
        icon: Home,
        title: "Accommodation Platform",
        description: "Bring property discovery and listing information together in one web application.",
    },
];

const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "EJS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
];

export default function Havenova() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#09090B] text-white">
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />

                <div className="absolute -left-40 top-[55%] h-96 w-96 rounded-full bg-violet-500/10 blur-[130px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
                <Link to="/#projects" className="mb-14 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
                    <ArrowLeft size={16} />
                    Back to Projects
                </Link>

                <section className="grid items-center gap-12 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                            <Home size={15} />
                            Accommodation Discovery Platform
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Havenova
                            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                Find a place to belong.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                            Havenova is an accommodation discovery platform inspired by
                            modern property marketplaces. It brings property listings,
                            location information, and search functionality together in a
                            user-friendly web experience.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a href="https://github.com/AprajitaMishra-CS/havenova" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
                                <FaGithub size={18} />
                                View Source Code
                                <ArrowUpRight size={16} />
                            </a>

                            <Link to="/#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition hover:border-blue-400/50 hover:bg-white/5">
                                Explore More Projects
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-blue-950/20">
                            <img src="/images/havenova/Preview.png" alt="Havenova Accommodation Discovery Platform" className="h-auto w-full rounded-2xl object-cover" />
                        </div>
                    </motion.div>
                </section>

                <section className="mt-28">
                    <div className="mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                            Project Overview
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            About the project
                        </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
                            <p className="leading-8 text-zinc-400">
                                Havenova was developed to create a streamlined experience for
                                discovering accommodation options. The application focuses on
                                presenting property listings clearly and making it easier for
                                users to explore available information.
                            </p>

                            <p className="mt-5 leading-8 text-zinc-400">
                                Building Havenova provided practical experience in developing
                                a full-stack web application, connecting frontend views with
                                backend routes, handling application data, and structuring
                                reusable web functionality.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                            <h3 className="mb-6 text-lg font-semibold">Project Details</h3>

                            <div className="space-y-5">
                                {
                                    [
                                        ["Project Type", "Full-Stack Web Application"],
                                        ["Domain", "Travel & Accommodation"],
                                        ["Architecture", "Client–Server"],
                                        ["Database", "MongoDB"],
                                    ].map(([label, value]) => (
                                        <div key={label} className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-0">
                                            <span className="text-xs uppercase tracking-wider text-zinc-500">
                                                {label}
                                            </span>

                                            <span className="text-sm font-medium text-zinc-200">
                                                {value}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-28">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Core Functionality
                    </p>

                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Key features
                    </h2>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
                                    <div className="mb-5 inline-flex rounded-xl border border-blue-400/20 bg-blue-400/10 p-3 text-blue-300">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="text-lg font-semibold">
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

                <section className="mt-28">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Technologies
                    </p>

                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Built with
                    </h2>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {technologies.map((technology) => (
                            <span key={technology} className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-blue-400/40 hover:text-white">
                                {technology}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mt-28 rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent p-8 text-center sm:p-14">
                    <CheckCircle2 className="mx-auto mb-5 text-blue-300" size={32} />

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Interested in the implementation?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
                        Explore the source code to see how Havenova is structured and
                        implemented.
                    </p>

                    <a href="https://github.com/AprajitaMishra-CS/havenova" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
                        <FaGithub size={18} />
                        View on GitHub
                        <ArrowUpRight size={16} />
                    </a>
                </section>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-zinc-500">
                    <Link to="/" className="transition hover:text-white">
                        ← Return to Portfolio
                    </Link>

                    <span>Havenova · Project Case Study</span>
                </div>
            </div>
        </main>
    );
}