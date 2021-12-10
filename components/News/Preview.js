import Image from "next/image";

export default function Preview({ title, excerpt, image, date, author }) {
  return (
    <div className="mt-5 sm:flex text-left bg-gray-100 hover:bg-white sm:rounded-l-full rounded-r cursor-pointer border hover:shadow transform hover:-translate-x-1 hover:-translate-y-1 transition-all">
      <div className="relative sm:w-48 h-60 w-full flex-shrink-0">
        <Image
          layout="fill"
          src={image}
          className="object-cover sm:rounded-l-full"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between text-sm">
          <h2 className="text-base sm:text-xl font-bold">{title}</h2>
          <h3 className="ml-3 text-xs flex-shrink-0">{date.slice(0, 10)}</h3>
        </div>
        <article className="text-base mt-3">{excerpt}</article>
        <button className="cta-btn text-white text-sm w-28 h-8 mt-3">
          Read more
        </button>
      </div>
    </div>
  );
}
