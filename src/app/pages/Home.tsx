import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Terminal,
  BarChart3,
  Database,
} from "lucide-react";
import Chapter from "../components/home/Chapter";
import ScrollProgress from "../components/ScrollProgress";
import { ProjectCard } from "../components/ProjectCard";
import { MetricChip } from "../components/MetricChip";
import { COLORS } from "../theme";

const chapters = [
  {
    headline: "It started with boredom.",
    text: "In 8th grade, I was bored, so I started coding and built a small game that got famous at my school.",
    imageSrc:
      "https://images.unsplash.com/photo-1759171052927-83f3b3a72b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHBpeGVsJTIwYXJjYWRlJTIwZ2FtZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzEzNjIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    headline: "I found my direction.",
    text: "I joined a small company as an unpaid intern and learned HTML, CSS, JavaScript, React, React Native, and Python.",
    imageSrc:
      "https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldHdvcmslMjBub2RlcyUyMHNraWxsJTIwdHJlZXxlbnwxfHx8fDE3NzEzNjIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    headline: "I started building apps.",
    text: "In 9th grade I learned to make apps with React Native and kept shipping small projects.",
    imageSrc:
      "https://images.unsplash.com/photo-1767354987491-20bbb34f05b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9ja3VwcyUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMzYyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    headline: "Automation clicked.",
    text: "In 10th grade I learned Python and started thinking in systems and efficiency.",
    imageSrc:
      "https://images.unsplash.com/photo-1701294112182-7377453894e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtZWNoYW5pc20lMjBhYnN0cmFjdCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzEzNjIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    headline: "From learning to impact.",
    text: "Soon after high school, I earned a paid SWE internship delivering real outcomes, and completed Harvard CS50 certifications while building 6 major projects.",
    imageSrc:
      "https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGdyYXBoc3xlbnwxfHx8fDE3NzEzNjIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    headline: "Adaptivity is Key.",
    text: "I stepped into the professional world as a developer who bridges the gap—bringing tech to tech companies and automation to non-tech businesses. My focus is increasing efficiency through adaptivity.",
    imageSrc:
      "https://images.unsplash.com/photo-1605868587355-5acbe10a8fab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGFwdGFiaWxpdHklMjB0ZWNobm9sb2d5JTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBjb25uZWN0aW9ufGVufDF8fHx8MTc3MTM2MzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const projects = [
  {
    title: "PTS Scheduling + Inventory Tools",
    description:
      "Automated scheduling and inventory management for improved operations.",
    tags: ["Automation", "Scheduling", "Ops"],
  },
  {
    title: "Wells Fargo Automation + Monitoring",
    description:
      "High-scale automation and monitoring systems ensuring reliability.",
    tags: ["Scale", "Reliability", "Monitoring"],
  },
  {
    title: "News Aggregator (MERN)",
    description:
      "A full-stack news aggregation platform built with the MERN stack.",
    tags: ["React", "Node", "MongoDB"],
  },
];

export function Home() {
  return (
    <div className="relative pt-32 font-sans text-cool-gray-800">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 py-12 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#C9A961] mb-2">
                Prince Goyani
              </h2>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 text-[#1A4D2E]">
                Building Efficiency.
              </h1>
              <p className="text-xl text-cool-gray-600 font-medium mb-6">
                Full-stack • Automation • Data systems
              </p>
              <p className="text-lg leading-relaxed text-cool-gray-700 max-w-xl">
                I'm a developer who loves turning chaos into
                code. Whether it's automating boring tasks or
                building scalable web apps, I focus on
                efficiency and reliability.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <MetricChip value="50+ staff hours/month saved" />
              <MetricChip value="20,000+ hourly logs processed" />
              <MetricChip value="200+ servers automated" />
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: COLORS.primary }}
              >
                Let's Talk
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="../photos/profilephoto.png"
                alt="Prince Goyani"
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-6 -left-6 bg-cream-base p-4 rounded-xl shadow-lg border border-gold-accent/30 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-forest-green/10 rounded-lg text-forest-green">
                  <Terminal size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-cool-gray-500 uppercase">
                    Status
                  </p>
                  <p className="font-bold text-forest-green">
                    Building Solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto bg-white/50 rounded-3xl my-12 border border-subtle-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-forest-green mb-4">
            Featured Work
          </h2>
          <p className="text-cool-gray-600 max-w-2xl mx-auto">
            A selection of projects where I've applied systems
            thinking to solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* My Journey (Compressed Chapters) */}
      <div className="flex flex-col relative">
        <div className="text-center pt-16 pb-8">
          <h2 className="text-3xl font-bold text-forest-green">
            My Journey
          </h2>
        </div>
        {chapters.map((chapter, index) => (
          <Chapter
            key={index}
            index={index}
            totalChapters={chapters.length}
            headline={chapter.headline}
            text={chapter.text}
            imageSrc={chapter.imageSrc}
          />
        ))}
      </div>

      {/* Footer / Contact CTA */}
      <div className="py-24 px-8 text-center bg-cream-base">
        <h2 className="text-3xl font-bold mb-6 text-forest-green">
          Ready to build something efficient?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 text-white shadow-lg hover:shadow-xl"
          style={{ backgroundColor: COLORS.primary }}
        >
          Let's Talk
        </Link>
      </div>
    </div>
  );
}