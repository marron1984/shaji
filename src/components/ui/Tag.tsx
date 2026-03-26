type TagVariant = "shrine" | "temple" | "gold" | "gray";

interface TagProps {
  label: string;
  variant?: TagVariant;
}

const variantClasses: Record<TagVariant, string> = {
  shrine: "bg-[var(--color-shrine-light)] text-[var(--color-shrine)]",
  temple: "bg-[var(--color-temple-light)] text-[var(--color-temple)]",
  gold: "bg-[var(--color-gold-light)] text-[var(--color-gold)]",
  gray: "bg-gray-100 text-gray-600",
};

export default function Tag({ label, variant = "gray" }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
