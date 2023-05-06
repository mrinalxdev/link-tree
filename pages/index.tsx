import Image from "next/image";
import data from "../data.json";

function LinkCard({
  url,
  title,
  image,
}: {
  url: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={url}
      className="flex items-center p-1 w-full text-cente rounded-md shadow-sm hover:scale-105 transition-all border border-gray-300 mt-6"
    >
      <div className="flex items-center text-center w-full">
        {image && (
            <Image className="rounded-lg" alt={data.name} src={image} width={40} height={40} />
        )}
        <h2 className="font-semibold text-center w-full">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center mx-auto flex-col w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full "
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.url} {...link} />
      ))}
    </div>
  );
}
