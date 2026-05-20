interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBorder({ children, className = '' }: GradientBorderProps) {
  return (
    <div className={`relative p-[1px] rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple ${className}`}>
      <div className="bg-dark rounded-xl h-full">{children}</div>
    </div>
  );
}