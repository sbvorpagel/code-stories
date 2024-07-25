import Prisma from "@/lib/db";

export async function GET() {
  const stories = await Prisma.story.findMany();
  return Response.json(stories);
}
