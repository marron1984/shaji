import type { Shrine } from "@/types";
import ShrineCard from "@/components/shrine/ShrineCard";

interface ShrineListProps {
  shrines: Shrine[];
}

export default function ShrineList({ shrines }: ShrineListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {shrines.map((shrine) => (
        <ShrineCard key={shrine.slug} shrine={shrine} />
      ))}
    </div>
  );
}
