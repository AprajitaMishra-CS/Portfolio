import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Sparkles, } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
    {
        number: "01",
        name: "IntelliPhoenix",
        category: "AI-Powered Healthcare Platform",
        description: "A smart healthcare platform that combines AI-assisted symptom guidance with appointment management, doctor recommendations, digital health reports, and notifications.",
        image: "/images/intelliphoenix/Preview.png",
        technologies: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Gemini API",
        ],
        features: [
            "AI-assisted symptom analysis",
            "Doctor recommendations",
            "Appointment booking",
            "Role-based authentication",
        ],
        live: "https://intelliphoenix.onrender.com",
        github: "https://github.com/AprajitaMishra-CS/IntelliPhoenix",
        caseStudy: "/projects/intelliphoenix",
        featured: true,
    },
    {
        number: "02",
        name: "Havenova",
        category: "Full-Stack Property Listing Platform",
        description: "A property discovery and rental platform where users can explore listings, create and manage properties, and share reviews through an interactive interface.",
        image: "/images/havenova/Preview.png",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "EJS",
            "Bootstrap",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        features: [
            "Property listing management",
            "Search and property discovery",
            "User authentication",
            "Reviews and ratings",
        ],
        live: "https://havenova.onrender.com",
        github: "https://github.com/AprajitaMishra-CS/Havenova",
        caseStudy: "/projects/havenova",
        featured: false,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-[#09090B] px-5 py-24 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
                    <div className="mb-4 flex items-center gap-2 text-sm font-medium text-violet-400">
                        <Sparkles size={16} />
                        WHAT I'VE BUILT
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                        A selection of projects where I turn ideas into functional, user-focused web applications.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article key={project.name} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111114] transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                        
                            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-violet-950 via-[#171326] to-blue-950">
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                                    <span className="text-4xl font-bold text-white/80">
                                        {project.name}
                                    </span>
                                    
                                    <span className="text-sm text-white/50">
                                        Project Preview
                                    </span>
                                </div>

                                <img src={project.image} alt={`${project.name} website preview`} onError={(event) => { event.currentTarget.style.display = "none"; }} className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />

                                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    {project.category}
                                </div>

                                {project.featured && (
                                    <div className="absolute right-5 top-5 rounded-full bg-violet-500/20 px-3 py-2 text-xs font-semibold text-violet-200 backdrop-blur-md">
                                        Featured Project
                                    </div>
                                )}
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-sm font-medium text-violet-400">
                                        PROJECT {project.number}
                                    </span>
                                    <ArrowUpRight size={20} className="text-zinc-500 transition group-hover:text-violet-400" />
                                </div>

                                <h3 className="text-2xl font-bold text-white">
                                    {project.name}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-zinc-400">
                                    {project.description}
                                </p>

                                <div className="mt-6">
                                    <h4 className="mb-3 text-sm font-semibold text-zinc-200">
                                        Key Features
                                    </h4>

                                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                        {project.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
                                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                            {feature}
                                        </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-7">
                                    <h4 className="mb-3 text-sm font-semibold text-zinc-200">
                                        Technologies
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-600">
                                            Live Demo
                                            <ExternalLink size={15} />
                                        </a>
                                    )}

                                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/50 hover:text-violet-300">
                                        <FaGithub size={16} />
                                        GitHub
                                    </a>

                                    <Link to={project.caseStudy} className="inline-flex items-center gap-1 text-sm font-medium text-zinc-400 transition hover:text-white" >
                                        Case Study
                                        <ArrowUpRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}