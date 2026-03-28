interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold text-[var(--color-foreground)] flex items-center gap-3">
      <span className="h-6 w-1 rounded-full bg-gradient-to-b from-[var(--color-shrine)] to-[var(--color-gold)]" />
      {children}
    </h2>
  );
}
