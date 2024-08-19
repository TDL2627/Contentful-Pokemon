import { getAllCards, getSingleCard } from "./queries";
export default async function Home() {
  console.log("ayee 1");

  const cards = await getAllCards();
  const card = await getSingleCard("Charmander");
  console.log(cards,"ayee");
  // console.log(card,"aye single");

  return (
    <div className="w-full flex justify-center items-center  h-screen">
      <h1>Contentful</h1>
    </div>
  );
}
