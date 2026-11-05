import { motion } from "motion/react";
import { Code2, Monitor, Server, Database, Wrench, Braces } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        subtitle: "Building responsive user interfaces",
        icon: Monitor,
        skills: [
            "HTML5",
            "CSS",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "Bootstrap",
        ],
    },
    {
        title: "Backend Development",
        subtitle: "Building server-side applications",
        icon: Server,
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication",
        ],
    },
    {
        title: "Database Management",
        subtitle: "Working with structured and NoSQL data",
        icon: Database,
        skills: [
            "MongoDB",
            "MySQL",
        ],
    },
    {
        title: "Programming Languages",
        subtitle: "Programming fundamentals and problem solving",
        icon: Braces,
        skills: [
            "Java",
            "Python",
            "C++",
        ],
    },
    {
        title: "Tools & Technologies",
        subtitle: "Development workflow and collaboration",
        icon: Wrench,
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Hoppscotch",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden bg-[#09090B] px-6 py-24 lg:px-16">
            <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"/>

            <div className="relative mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 25}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                        My Expertise
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                        Technical <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Skills.</span>
                    </h2>

                    <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
                        Technologies and tools I use to design, develop and build modern web applications.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <motion.div key={category.title} initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{ duration: 0.6, delay: index*0.1, }} className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.03]">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-white">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-500">
                                    {category.subtitle}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div initial={{ opacity: 0, y: 25}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-5">
                    <Code2 className="shrink-0 text-violet-400" size={24} />

                    <p className="text-sm leading-7 text-zinc-400">
                        Continuously learning, experimenting and improving my development skills through hands-on projects and consistent practice.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}