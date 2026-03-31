export interface OhenroTemple {
  num: number;
  name: string;
  yomikata: string;
  pref: string;
  address: string;
  honzon: string;
  shuha: string;
  origin: string;
  goen: string;
  yukari: string[];
  trivia: string;
  access: string;
  hours: string;
  admission: string;
}

const ohenroData: OhenroTemple[] = [];

export function getOhenroTemple(num: number): OhenroTemple | null {
  return ohenroData.find((t) => t.num === num) ?? null;
}

export function getAllOhenroTemples(): OhenroTemple[] {
  return ohenroData;
}
