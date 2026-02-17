import React from 'react';
import { GraduationCap, Briefcase, Code, MapPin, Calendar } from 'lucide-react';
import { COLORS } from '../theme';
import { motion } from 'motion/react';

const TimelineItem = ({ 
  title, 
  subtitle, 
  date, 
  location, 
  description, 
  tags, 
  isLast = false 
}: {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string[];
  tags?: string[];
  isLast?: boolean;
}) => (
  <motion.div 
    className="relative pl-8 md:pl-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="md:grid md:grid-cols-[1fr_2px_1fr] gap-8">
      {/* Left side (Date/Location for desktop) */}
      <div className="hidden md:flex flex-col items-end text-right pt-2">
        <span className="text-sm font-bold tracking-wider uppercase mb-1" style={{ color: COLORS.primary }}>{date}</span>
        {location && <span className="text-xs text-gray-500">{location}</span>}
      </div>

      {/* Timeline Line */}
      <div className="absolute left-0 md:relative md:left-auto flex flex-col items-center h-full">
        <div 
          className="w-4 h-4 rounded-full border-4 z-10"
          style={{ borderColor: COLORS.accent, backgroundColor: COLORS.background }}
        />
        {!isLast && (
          <div 
            className="w-0.5 flex-1 my-2"
            style={{ backgroundColor: `${COLORS.primary}20` }}
          />
        )}
      </div>

      {/* Right side (Content) */}
      <div className="pb-12 pt-1">
        {/* Mobile Date */}
        <div className="md:hidden flex items-center gap-2 mb-2 text-sm font-bold" style={{ color: COLORS.primary }}>
          <Calendar size={14} />
          <span>{date}</span>
        </div>

        <div 
          className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
          style={{ 
            backgroundColor: COLORS.surface, 
            borderColor: `${COLORS.primary}15`
          }}
        >
          <h3 className="text-xl font-bold mb-1" style={{ color: COLORS.textDark }}>{title}</h3>
          <p className="text-md font-medium mb-4" style={{ color: COLORS.accent }}>{subtitle}</p>
          
          <ul className="space-y-2 mb-4">
            {description.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: COLORS.text }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.primary }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{ 
                    backgroundColor: `${COLORS.primary}08`, 
                    color: COLORS.primary,
                    borderColor: `${COLORS.primary}10`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
  <motion.div 
    className="p-6 rounded-2xl border bg-white shadow-sm"
    style={{ borderColor: `${COLORS.primary}10` }}
    whileHover={{ y: -5 }}
  >
    <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: COLORS.text }}>{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
          style={{ 
            backgroundColor: COLORS.background, 
            color: COLORS.textDark,
            border: `1px solid ${COLORS.primary}10`
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export function CV() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-12" style={{ backgroundColor: COLORS.background }}>
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: COLORS.primary }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Curriculum Vitae
          </motion.h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.text }}>
            A timeline of my educational journey, professional experience, and technical capabilities.
          </p>
        </div>

        {/* Education */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.primary }}>
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>Education</h2>
          </div>
          
          <div className="space-y-0">
             <TimelineItem 
              title="Bachelor of Science in Computer Science"
              subtitle="Arizona State University"
              date="May 2026 (Expected)"
              location="Tempe, AZ"
              description={[
                "Minor in Business",
                "CS GPA: 3.75 | Business GPA: 4.0",
                "Dean's List (All Semesters)"
              ]}
              isLast={true}
            />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.primary }}>
              <Briefcase className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>Work Experience</h2>
          </div>

          <div className="space-y-0">
            <TimelineItem 
              title="Technical & Automation Assistant"
              subtitle="ASU Parking and Transit Services"
              date="Dec 2023 – Present"
              description={[
                "Developed automated scheduling tools reducing manual scheduling time by 50+ hours per month",
                "Built inventory management system streamlining asset tracking across departments",
                "Created automation pipeline processing 20,000+ hourly logs for data analysis",
                "Implemented Python-based solutions improving operational efficiency and reporting accuracy"
              ]}
              tags={["Python", "Automation", "Data Analysis"]}
            />
            <TimelineItem 
              title="Software Engineer Intern"
              subtitle="Wells Fargo"
              date="Jun 2025 – Aug 2025"
              description={[
                "Deployed automation scripts across 200+ servers using PowerShell and scripting frameworks",
                "Designed monitoring and alerting systems improving incident detection and resolution time",
                "Enhanced infrastructure reliability through automated health checks and reporting",
                "Collaborated with cross-functional teams to identify automation opportunities at scale"
              ]}
              tags={["PowerShell", "Infrastructure", "Monitoring"]}
            />
            <TimelineItem 
              title="Software Developer Intern"
              subtitle="Qsek Solutions"
              date="Aug 2021 – Jan 2022"
              description={[
                "Optimized API endpoints reducing average latency by 35% through query optimization",
                "Implemented secure authentication flows using OAuth 2.0 and JWT standards",
                "Developed comprehensive unit and integration tests improving code coverage to 85%",
                "Contributed to full-stack development using React, Node.js, and PostgreSQL"
              ]}
              tags={["React", "Node.js", "PostgreSQL", "OAuth"]}
              isLast={true}
            />
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.primary }}>
              <Code className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <SkillCategory 
              title="Languages" 
              skills={["Java", "Python", "C/C++", "JavaScript", "TypeScript", "Swift", "PowerShell", "SQL"]} 
            />
            <SkillCategory 
              title="Frameworks & Tools" 
              skills={["React", "Node.js", "Express", "Next.js", "Docker", "AWS", "Git", "Linux", "Firebase"]} 
            />
            <SkillCategory 
              title="Databases" 
              skills={["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"]} 
            />
          </div>
        </section>
      </div>
    </div>
  );
}
