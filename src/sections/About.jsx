import { motion } from "motion/react";
import { GraduationCap, Code2, BrainCircuit, Rocket, ArrowUpRight, Lightbulb } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description: "Building responsive and functional web applications with modern frontend and backend technologies.",
    },
    {
        icon: BrainCircuit,
        title: "AI Integration",
        description: "Exploring intelligent applications by integrating AI capabilities into practical web solutions.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Strengthening programming fundamentals and data structures through consistent practice.",
    },
    {
        icon: Rocket,
        title: "Building Projects",
        description: "Turning ideas into real-world applications with a focus on usability and functionality.",
    },
];

const technologies = [
    "HTML",
    "React.js",
    "CSS",
    "Talwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git & GitHub",
];

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-[#09090B] px-6 py-24 lg:px-16">
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]"/>

            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                        Get to know me
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        About <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Me.</span>
                    </h2>

                    <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
                        A little about my background, what I do, and what drives me to build meaningful digital experiences.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-5">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9 lg:col-span-3">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                            <GraduationCap size={25}/>
                        </div>

                        <h3 className="mb-5 mt-2 text-2xl font-bold text-white">
                            My Journey
                        </h3>

                        <div className="space-y-4 leading-8 text-zinc-400">
                            <p>
                                I'm Aprajita Mishra, a Bachelor of Computer Application (BCA) student with the strong interest
                                in full-stack development and emerging technologies.
                            </p>

                            <p>
                                I enjoy transforming ideas into functional web applications, working across frontend and backend
                                development, and exploring how AI can make digital products more useful and intelligent.
                            </p>

                            <p>
                                Through hands-on projects, coding practice and continuous learning. I'm working towards becoming
                                a developer who builds practical solutions to real-world problems. 
                            </p>
                        </div>

                        <a href="#projects" className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-400 transition-colors hover:text-violet-300">
                            Explore my projects
                            <ArrowUpRight size={18} />
                        </a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/[0.03] p-7 lg:col-span-2">
                        <div>
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                                <GraduationCap size={25} />
                            </div>

                            <p className="text-sm font-medium text-zinc-400">
                                Academic Background
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white">
                                Bachelor of Computer Application
                            </h3>

                            <p className="mt-3 text-zinc-400">
                                BCA &bull; 2024 - 2027
                            </p>
                        </div>

                        <div className="mt-10 border-t border-white/10 pt-6">
                            <p className="text-sm text-zinc-500">
                                Current Academic CGPA
                            </p>

                            <p className="mt-2 text-4xl font-bold text-white"> 
                                8.20
                                <span className="ml-2 text-sm font-normal text-violet-400">
                                    / 10
                                </span>
                            </p>

                            <p className="mt-2 text-xs text-zinc-500">
                                Through Semester III
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-20">
                    <div className="mb-9">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                            My Interests
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-white">
                            What I <span className="text-violet-400">Do.</span>
                        </h3>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 25}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{ duration: 0., delay: index*0.1 }} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.04]">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                                        <Icon size={24} />
                                    </div>

                                    <h4 className="mb-3 text-lg font-semibold text-white">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm leading-7 text-zinc-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                        My Tech Stack
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                        Technologies I Work With
                    </h3>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {technologies.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}