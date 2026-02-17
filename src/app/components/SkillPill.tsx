interface SkillPillProps {
  skill: string;
}

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <span 
      className="px-4 py-2 rounded-full text-sm inline-block bg-[#FEFCF7] text-[#4A5568] border border-[#E8E5DC]"
      style={{ fontWeight: 500 }}
    >
      {skill}
    </span>
  );
}