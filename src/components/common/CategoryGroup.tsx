import type { TechStack } from '@/types/techStack.types';

import { TechBadge } from './TechBadge';

interface CategoryGroupProps {
  category: TechStack;
}

export function CategoryGroup({ category }: CategoryGroupProps) {
  return (
    <div className="rounded-lg border border-border-subtle overflow-hidden">
      <div className="flex items-center justify-between bg-secondary px-4 py-2.5 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full shrink-0"
            style={{ backgroundColor: category.color }}
          />
          <span className="font-dm-mono text-[11px] font-medium text-text-primary">
            {category.name}
          </span>
        </div>

        <span className="font-dm-mono text-[10px] text-text-tertiary">
          {category.techs.length} tools
        </span>
      </div>

      <div className="flex flex-wrap gap-2 p-4">
        {category.techs.map((tech) => (
          <TechBadge key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}
