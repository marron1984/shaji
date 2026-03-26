import type { Shrine } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ShrineList from "@/components/shrine/ShrineList";

interface FeaturedShrinesProps {
  shrines: Shrine[];
}

export default function FeaturedShrines({ shrines }: FeaturedShrinesProps) {
  return (
    <section>
      <SectionHeading>注目の神社・お寺</SectionHeading>
      <div className="mt-6">
        <ShrineList shrines={shrines} />
      </div>
    </section>
  );
}
