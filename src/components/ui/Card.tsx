interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-[var(--color-background-card)] border border-[var(--color-border)] transition-all hover:border-white/10 ${className}`}
    >
      {children}
    </div>
  );
}
