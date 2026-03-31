export interface MbtiResult {
  type: string;
  typeName: string;
  deity: string;
  deitySlug: string;
  emoji: string;
  description: string;
  advice: string;
}

export interface MbtiQuestion {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  aValue: "E" | "S" | "T" | "J";
  bValue: "I" | "N" | "F" | "P";
}

export const mbtiResults: Record<string, MbtiResult> = {
  // DATA_PLACEHOLDER - agent generating
};

export const mbtiQuestions: MbtiQuestion[] = [
  // DATA_PLACEHOLDER - agent generating
];
