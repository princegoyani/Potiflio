import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div 
      className="p-6 rounded-2xl border border-[#E8E5DC] bg-[#FEFCF7] transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
    >
      <h3 className="text-xl mb-3 text-[#1A4D2E]" style={{ fontWeight: 600 }}>
        {title}
      </h3>
      <p className="mb-4 leading-relaxed text-[#718096]">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 rounded-full text-xs text-[#1A4D2E] bg-[#1A4D2E]/8"
            style={{ fontWeight: 500 }}
          >
            {tag}
          </span>
        ))}
      </div>
      <button 
        className="flex items-center gap-2 text-sm transition-all hover:gap-3 text-[#1A4D2E]"
        style={{ fontWeight: 500 }}
      >
        View details
        <ArrowRight size={16} />
      </button>
    </div>
  );
}