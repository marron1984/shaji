type TagVariant = "shrine" | "temple" | "gold" | "gray";

interface TagProps {
  label: string;
  variant?: TagVariant;
}

const variantClasses: Record<TagVariant, string> = {
  shrine: "bg-[var(--color-shrine-light)] text-[var(--color-shrine)] border-[var(--color-shrine)]/20",
  temple: "bg-[var(--color-temple-light)] text-[var(--color-temple)] border-[var(--color-temple)]/20",
  gold: "bg-[var(--color-gold-light)] text-[var(--color-gold)] border-[var(--color-gold)]/20",
  gray: "bg-white/5 text-[var(--color-muted)] border-white/10",
};

export default function Tag({ label, variant = "gray" }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
