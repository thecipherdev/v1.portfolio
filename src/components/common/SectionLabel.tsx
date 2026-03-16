interface SectionLabelProps {
  label: string;
}

function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="w-full border-b border-border-subtle pb-3 mb-8">
      <span className="font-dm-mono text-[11px] uppercase tracking-wider text-text-tertiary">
        // {label}
      </span>
    </div>
  );
}

export default SectionLabel;
