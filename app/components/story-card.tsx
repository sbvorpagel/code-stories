"use client";

import { useState } from "react";

type Card = {
  title: string;
  question: string;
  answer: string;
};

export default function StoryCard({ title, question, answer }: Readonly<Card>) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <button
      onClick={() => setShowAnswer((prev) => !prev)}
      className="group cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center content-center gap-2 h-96 p-6">
        <div className="flex flex-col grow-0 gap-2">
          <h1 className="text-2xl text-primary">{title}</h1>
          <h2 className="text-sm text-slate-400">
            {showAnswer ? "Resposta" : "Desafio"}
          </h2>
        </div>
        <div className="grow items-center justify-center content-center overflow-auto">
          <p className="text-slate-900 text-xl text-justify">
            {showAnswer ? answer : question}
          </p>
        </div>
      </div>
    </button>
  );
}
