interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="border-l-4 border-[var(--color-gold)] pl-4 text-2xl font-bold text-gray-800">
      {children}
    </h2>
  );
}
