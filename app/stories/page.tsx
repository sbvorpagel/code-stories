import { generateStory } from "../actions";
import Card from "./card";

export default async function Stories() {

  const story = await generateStory();

  console.log(story);

  return (
    <div>
      <Card title={story?.title} answer={story?.answer} question={story?.question} />
    </div>
  );
}
