interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-darker rounded-xl border border-gray-800 p-6 transition-all ${hover ? 'hover:border-neonBlue hover:scale-[1.02]' : ''} ${className}`}>
      {children}
    </div>
  );
}