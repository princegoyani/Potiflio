import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { COLORS } from "../../theme";

interface ChapterProps {
  headline: string;
  text: string;
  imageSrc: string;
  index: number;
  totalChapters: number;
}

const Chapter: React.FC<ChapterProps> = ({ headline, text, imageSrc, index, totalChapters }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center p-8 relative overflow-hidden chapter-section py-20 md:py-32"
      id={`chapter-${index}`}
      style={{
        backgroundColor: index % 2 === 0 ? COLORS.background : "#EFEFE8",
        borderBottom: `1px solid ${COLORS.primary}20`
      }}
    >
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${COLORS.text} 1px, transparent 1px),
            linear-gradient(to bottom, ${COLORS.text} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Content Side */}
      <motion.div 
        className="flex-1 max-w-xl z-10 space-y-6 md:pr-12"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span 
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-current"
            style={{ color: COLORS.accent, borderColor: COLORS.accent }}
          >
            {index + 1}
          </span>
          <span 
            className="uppercase tracking-widest text-xs font-semibold"
            style={{ color: COLORS.text }}
          >
            Chapter {index + 1}
          </span>
        </div>

        <h2 
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ color: COLORS.primary }}
        >
          {headline}
        </h2>
        
        <p 
          className="text-lg md:text-xl leading-relaxed"
          style={{ color: COLORS.text }}
        >
          {text}
        </p>

        <motion.div
          className="h-1 w-20 rounded-full mt-8"
          style={{ backgroundColor: COLORS.accent }}
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </motion.div>

      {/* Visual Side */}
      <motion.div 
        className="flex-1 w-full max-w-xl mt-10 md:mt-0 relative z-10"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-[4/3]"
          style={{ borderColor: `${COLORS.accent}40`, backgroundColor: COLORS.surface }}
        >
          <img 
            src={imageSrc} 
            alt={headline}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          
          {/* Overlay gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
          />
        </div>
        
        {/* Floating animated elements */}
        <motion.div
          className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg border backdrop-blur-sm"
          style={{ backgroundColor: `${COLORS.surface}E6`, borderColor: COLORS.accent }}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Milestone</span>
            <span className="text-xl font-bold" style={{ color: COLORS.primary }}>Verified</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Chapter;
