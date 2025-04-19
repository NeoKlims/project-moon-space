import { getFood } from "./actions";

interface PageProps {
  params: Promise<{ foodId: string }>;
}

async function Page({ params }: PageProps) {
  const { foodId } = await params;
  const food = await getFood(foodId);

  if (!food) {
    return <div>Food not found</div>;
  }

  return <div>{JSON.stringify(food)}</div>;
}

export default Page;
