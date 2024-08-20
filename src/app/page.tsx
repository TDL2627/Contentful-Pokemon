import { getAllCards, getSingleCard } from "./queries";
import Link from "next/link";

export default async function Home() {
  const cards = await getAllCards();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Contentful Pokemon Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards &&
          cards.map((card: any) => (
            <Link key={card.id} href={`/pokemon/${card.title}`}>
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
