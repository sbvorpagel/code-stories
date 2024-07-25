"use server";

import { revalidatePath } from "next/cache";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

type Story = {
  title: string;
  question: string;
  answer: string;
};

export async function generateStory(): Promise<Story> {
  const model = openai("gpt-3.5-turbo");

  const textResponse = await generateText({
    model,
    prompt:
      'Gere um objeto no formato { "title": string, "question": string, "answer": string }. Esse objeto deve conter uma história similar ao jogo black stories. O título deve ter relação com a história. A question deve conter uma história de mistério. E a answer deve conter a solução do mistério.',
  });

  const story: Story = JSON.parse(textResponse.text);

  return story;
}
