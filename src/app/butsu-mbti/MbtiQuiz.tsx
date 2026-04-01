"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { mbtiQuestions, mbtiResults } from "@/data/mbti-butsu-data";

type Scores = { E: number; I: number; S: number; N: number; T: number; F: number; J: number; P: number };

function calculateMbti(scores: Scores): string {
  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const tf = scores.T >= scores.F ? "T" : "F";
  const jp = scores.J >= scores.P ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}

export default function MbtiQuiz() {
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
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2">
            あなたの仏様タイプは…
          </p>
          <div className="text-8xl my-6">{r.emoji}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            {r.deity}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Tag label={r.type} variant="gold" />
            <Tag label={r.typeName} variant="temple" />
          </div>
        </div>

        <Card className="mb-6">
          <div className="p-6">
            <h3 className="font-bold text-[var(--color-foreground)] mb-3">
              🔮 性格診断
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              {r.description}
            </p>
          </div>
        </Card>

        <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4 mb-8">
          <p className="text-sm text-[var(--color-gold)]">
            <span className="font-bold">🙏 {r.deity}からのメッセージ：</span>
            {r.advice}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/butsu-jiten/${r.deitySlug}`}
            className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white">
              {r.deity}について詳しく見る
            </span>
          </Link>
          <button
            onClick={reset}
            className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
          >
            もう一度診断する
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
            質問 {currentQ + 1} / {mbtiQuestions.length}
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
