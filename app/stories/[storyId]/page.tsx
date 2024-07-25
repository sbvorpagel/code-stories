import Link from "next/link";

export default async function Story({
    params,
  }: Readonly<{
    params: { storyId: string };
  }>) {
    const { storyId } = params;



  return (
    <div>
     <h1>{`História ${storyId}`}</h1>
     <Link href="/stories/1" />
    </div>
  );
}
