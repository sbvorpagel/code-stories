import Link from "next/link";
import { getStories } from "../actions";
import CreateStory from "../components/create-story";

export default async function Stories() {
  const stories = await getStories();

  return (
    <div className="bg-slate-300 rounded-2xl shadow-2xl md:w-2/4 lg:1/4 w-full m-4 p-4 flex flex-col gap-2 justify-center items-center content-center">
      <CreateStory />
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link href={`/stories/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
