import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean; // додано
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  type = 'button', 
  onClick, 
  className = '', 
  disabled = false 
}: ButtonProps) {
  const base = `px-6 py-3 rounded-lg font-bold transition-all duration-300 inline-block text-center ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  const variants = {
    primary: 'bg-gradient-to-r from-red to-red-dark hover:shadow-lg hover:shadow-red/50 text-white',
    secondary: 'border border-red text-red hover:bg-red/10',
  };
  const classes = `${base} ${variants[variant]}`;
  
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}