interface BentoGridProps {
  children: React.ReactNode;
}

function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export default BentoGrid;
