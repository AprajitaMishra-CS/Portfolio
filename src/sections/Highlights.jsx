import { motion } from "motion/react";
import { GraduationCap, Trophy, Code2, Rocket, ArrowUpRight, Sparkles } from "lucide-react";

const highlights = [
    {
        icon: GraduationCap,
        number: "2024-2027",
        title: "BCA Student",
        description: "Pursuing Bachelor of Computer Applications with a focus on software development and computer science.",
        accent: "from-violet-500/20 to-purple-500/5",
    },
    {
        icon: Trophy,
        number: "8.20",
        title: "Academic Performance",
        description: "CGPA achieved through Semester III, reflecting consistent academic progress.",
        accent: "from-blue-500/20 to-cyan-500/5",
    },
    {
        icon: Code2,
        number:"02",
        title: "Completed Projects",
        description: "Built IntelliPhoenix and Havenova, demonstrating full-stack development and practical problem-solving.",
        accent: "from-fuchsia-500/20 to-pink-500/5",
    },
    {
        icon: Rocket,
        number: "Full Stack",
        title: "Development Focus",
        description: "Building responsive web applications and exploring backend development, APIs and AI Integration.",
        accent: "from-indigo-500/20 to-blue-500/5",
    },
];

export default function Highlights() {
    return (
        <section id="highlights" className="relative overflow-hidden bg-[#09090B] px-5 py-24 sm:px-8 lg:px-16">
            <div className="pointer-events-none absolute -left-40 top-200 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y:25 }} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
                    <div className="mb-4 flex items-center gap-2 tex-sm font-medium text-violet-400">
                        <Sparkles size={16} />
                        MY PROGRESS
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Milestones & {" "}
                        <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Highlights</span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                        A snapshot of my academic journey, development work, and growing experience in technology.
                    </p>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index*0.12, }} className="group relative oerflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.accent} opacity:40 transition duration-300 group-hover:opacity-100`} />

                                <div className="relative">
                                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-400">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="text-3xl font-bold tracking-tight text-white">
                                        {item.number}
                                    </h3>

                                    <h4 className="mt-3 text-base font-semibold text-zinc-200">
                                        {item.title}
                                    </h4>

                                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="text-xs font-medium text-zinc-500">
                                            HIGHLIGHT {String(index+1).padStart(2, "0")}
                                        </span>

                                        <ArrowUpRight size={17} className="text-zinc-500 transition group-hover:text-violet-400"/>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}