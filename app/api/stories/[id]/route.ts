import Prisma from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: Readonly<{ params: { id: string } }>
) {
  const id = Number(params.id);
  const story = await Prisma.story.findUnique({ where: { id } });
  return Response.json(story);
}
