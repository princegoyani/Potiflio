interface MetricChipProps {
  value: string;
}

export function MetricChip({ value }: MetricChipProps) {
  return (
    <div 
      className="inline-flex items-center px-4 py-2 rounded-full border border-[#C9A961] bg-[#FEFCF7] text-[#1A4D2E]"
    >
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}