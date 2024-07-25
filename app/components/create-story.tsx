"use client";

import { generateStory } from "../actions";

export default function CreateStory() {
  return (
    <button
      onClick={() => generateStory()}
      className="border border-slate-600 shadow-md m-2 p-2 rounded-lg text-slate-600"
    >
      Gerar História
    </button>
  );
}
