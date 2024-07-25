"use server";

import { revalidatePath } from "next/cache";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import Prisma from "@/lib/db";

type Story = {
  title: string;
  question: string;
  answer: string;
};

type StoryDB = {
  id: number;
  title: string;
  question: string;
  answer: string;
};

export async function getStories(): Promise<StoryDB[]> {
  const stories = await Prisma.story.findMany();

  return stories;
}

export async function getStory(id: number): Promise<StoryDB | null> {
  const story = await Prisma.story.findUnique({
    where: { id },
  });

  return story;
}

export async function generateStory(): Promise<StoryDB> {
  const model = openai("gpt-3.5-turbo");

  const textResponse = await generateText({
    model,
    prompt:
      'Gere um objeto no formato { "title": string, "question": string, "answer": string }. Esse objeto deve conter uma história similar ao jogo black stories. O título deve ter relação com a história. A question deve conter uma história de mistério. E a answer deve conter a solução do mistério.',
    temperature: 0.7,
  });

  const story: Story = JSON.parse(textResponse.text);

  const dbStory = await Prisma.story.create({
    data: story,
  });

  revalidatePath("/stories");

  return dbStory;
}
