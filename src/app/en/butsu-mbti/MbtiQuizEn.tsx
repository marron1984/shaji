"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { mbtiQuestions, mbtiResults } from "@/data/mbti-butsu-data";

type Scores = { E: number; I: number; S: number; N: number; T: number; F: number; J: number; P: number };

/** English display name for each MBTI type */
const mbtiTypeNameEn: Record<string, string> = {
  INTJ: "Architect",
  INTP: "Logician",
  ENTJ: "Commander",
  ENTP: "Debater",
  INFJ: "Advocate",
  INFP: "Mediator",
  ENFJ: "Protagonist",
  ENFP: "Campaigner",
  ISTJ: "Logistician",
  ISFJ: "Defender",
  ESTJ: "Executive",
  ESFJ: "Consul",
  ISTP: "Virtuoso",
  ISFP: "Adventurer",
  ESTP: "Entrepreneur",
  ESFP: "Entertainer",
};

/** English deity descriptions */
const deityNameEn: Record<string, string> = {
  "dainichi-nyorai": "Dainichi Nyorai (Cosmic Buddha)",
  "monju-bosatsu": "Monju Bosatsu (Manjushri)",
  "fudo-myoo": "Fudo Myoo (Immovable King)",
  benzaiten: "Benzaiten (Goddess of Arts)",
  "kannon-bosatsu": "Kannon Bosatsu (Avalokiteshvara)",
  "miroku-bosatsu": "Miroku Bosatsu (Maitreya)",
  "shaka-nyorai": "Shaka Nyorai (Shakyamuni Buddha)",
  "kujaku-myoo": "Kujaku Myoo (Peacock King)",
  shitenno: "Shitenno (Four Heavenly Kings)",
  "jizo-bosatsu": "Jizo Bosatsu (Ksitigarbha)",
  "bishamon-ten": "Bishamonten (Vaisravana)",
  "daikoku-ten": "Daikokuten (God of Wealth)",
  nio: "Nio (Temple Guardians)",
  "bato-kannon": "Bato Kannon (Horse-headed Kannon)",
  "aizen-myoo": "Aizen Myoo (Wisdom King of Love)",
  "taishaku-ten": "Taishakuten (Lord of Heaven)",
};

function calculateMbti(scores: Scores): string {
  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const tf = scores.T >= scores.F ? "T" : "F";
  const jp = scores.J >= scores.P ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}

export default function MbtiQuizEn() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Scores>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  });
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: "A" | "B") => {
    const q = mbtiQuestions[currentQ];
    const newScores = { ...scores };
    if (value === "A") {
      newScores[q.aValue] += 1;
    } else {
      newScores[q.bValue] += 1;
    }
    setScores(newScores);

    if (currentQ + 1 < mbtiQuestions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setResult(calculateMbti(newScores));
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResult(null);
  };

  // Result screen
  if (result && mbtiResults[result]) {
    const r = mbtiResults[result];
    const englishName = deityNameEn[r.deitySlug] || r.deity;
    const englishType = mbtiTypeNameEn[r.type] || r.typeName;
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2">
            Your Buddhist deity type is...
          </p>
          <div className="text-8xl my-6">{r.emoji}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            {r.deity}
          </h2>
          <p className="text-base text-[var(--color-muted)] mt-1">
            {englishName}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Tag label={r.type} variant="gold" />
            <Tag label={englishType} variant="temple" />
          </div>
        </div>

        <Card className="mb-6">
          <div className="p-6">
            <h3 className="font-bold text-[var(--color-foreground)] mb-3">
              🔮 Personality Analysis
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              {r.description}
            </p>
          </div>
        </Card>

        <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4 mb-8">
          <p className="text-sm text-[var(--color-gold)]">
            <span className="font-bold">🙏 Message from {r.deity}: </span>
            {r.advice}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/en/butsu-jiten/${r.deitySlug}`}
            className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white">
              View deity details
            </span>
          </Link>
          <button
            onClick={reset}
            className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  // Quiz screen
  const q = mbtiQuestions[currentQ];
  const progress = ((currentQ) / mbtiQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-[var(--color-muted)] mb-2">
          <span>
            Question {currentQ + 1} of {mbtiQuestions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-8">
        <p className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)] leading-relaxed">
          {q.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-4">
        <button
          onClick={() => handleAnswer("A")}
          className="w-full text-left"
        >
          <Card>
            <div className="p-5 flex items-center gap-4 group cursor-pointer hover:border-[var(--color-gold)]/40 transition-all">
              <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-[var(--color-shrine)] text-white">
                A
              </span>
              <p className="text-[var(--color-foreground)] group-hover:text-[var(--color-gold)] transition-colors">
                {q.optionA}
              </p>
            </div>
          </Card>
        </button>
        <button
          onClick={() => handleAnswer("B")}
          className="w-full text-left"
        >
          <Card>
            <div className="p-5 flex items-center gap-4 group cursor-pointer hover:border-[var(--color-gold)]/40 transition-all">
              <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-[var(--color-temple)] text-white">
                B
              </span>
              <p className="text-[var(--color-foreground)] group-hover:text-[var(--color-gold)] transition-colors">
                {q.optionB}
              </p>
            </div>
          </Card>
        </button>
      </div>
    </div>
  );
}
