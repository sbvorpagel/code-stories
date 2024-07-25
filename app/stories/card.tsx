"use client";

import { useState } from "react";

type Card = {
  title: string;
  question: string;
  answer: string;
};

export default function Card({
  title,
  question,
  answer,
}: Readonly<Card>) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <button onClick={() => setShowAnswer((prev) => !prev)}>
      <div className="bg-slate-50 ">
        <h1>{title}</h1>
        <h2>{showAnswer ? 'Resposta' : 'Desafio'}</h2>
        <p>{showAnswer ? answer : question}</p>
      </div>
    </button>
  );
}
