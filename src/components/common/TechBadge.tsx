import type { Tech } from '@/types/techStack.types';

interface TechBadgeProps {
  tech: Tech;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <div className="flex items-center gap-2.5 rounded-md border border-border-subtle px-3 py-2 hover:-translate-y-px hover:border-border-default transition-all duration-200 cursor-default">
      {tech.icon ? (
        <img
          src={tech.icon}
          className="flex h-[18px] w-[18px] items-center justify-center rounded-sm text-[8px] font-bold shrink-0 font-dm-mono"
          alt=""
        />
      ) : (
        <span
          className="flex h-[18px] w-[18px] items-center justify-center rounded-sm text-[8px] font-bold shrink-0 font-dm-mono"
          style={{ color: tech.iconColor, backgroundColor: tech.iconBg }}
        >
          {tech.initials}
        </span>
      )}
      <span className="font-dm-sans text-[12px] font-medium text-text-primary">
        {tech.name}
      </span>

      <div className="ml-auto flex gap-1">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-1 w-1 rounded-full ${
              i <= tech.level ? 'bg-text-secondary' : 'bg-border-default'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
