import { getSingleCard } from "@/app/queries";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface CardPageProps {
  params: {
    title: string;
  };
}

export default async function CardPage({ params }: CardPageProps) {
  const card = await getSingleCard(params.title);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">{card?.title}</h1>
        <Image
          alt="placeholder"
          className=" object-cover w-full"
          height="263"
          src={card?.picture.url}
          width="350"
        />
        <div className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
          {documentToReactComponents(card?.description.json)}
        </div>
      </div>
      {!card && <>No card with that title</>}
    </div>
  );
}
