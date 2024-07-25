import { getStory } from "@/app/actions";
import StoryCard from "@/app/components/story-card";

export default async function Story({
  params,
}: Readonly<{
  params: { storyId: string };
}>) {
  const { storyId } = params;

  const story = await getStory(Number(storyId));

  return (
    <div className="bg-slate-300 rounded-2xl shadow-2xl md:w-2/4 lg:1/4 w-full m-4 p-4 flex flex-col gap-2 justify-center items-center content-center">
      <StoryCard
        title={story?.title ?? ""}
        question={story?.question ?? ""}
        answer={story?.answer ?? ""}
      />
    </div>
  );
}
