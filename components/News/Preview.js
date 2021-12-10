import Image from "next/image";

export default function Preview({ title, excerpt, image, date, author }) {
  return (
    <div className="mt-5 flex text-left bg-gray-100 hover:bg-white rounded-l-full rounded-r cursor-pointer shadow hover:shadow-md transform hover:-translate-x-1 hover:-translate-y-1 transition-all">
      <div className="relative w-48 flex-shrink-0">
        <Image
          layout="fill"
          src={image}
          className="object-cover rounded-l-full"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center text-sm">
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className="ml-3">{date.slice(0, 10)}</h3>
        </div>
        <article className="text-base mt-3">{excerpt}</article>
        <button className="cta-btn text-white text-sm w-32 h-10 mt-3">
          Read more
        </button>
      </div>
    </div>
  );
}
