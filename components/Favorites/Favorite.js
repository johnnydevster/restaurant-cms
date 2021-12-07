import Image from "next/image";

export default function Favorite({ name, description, price, image }) {
  return (
    <div className="mt-7 sm:mt-0 mx-auto items-center bg-gray-100 bg-opacity-80 rounded">
      <div className="h-60 sm:h-72 w-full relative flex-shrink-0">
        <Image
          src={image.sourceUrl}
          className="object-cover rounded-t"
          layout="fill"
          priority
        />
      </div>
      <div className="text-gray-500 px-2 text-lg">
        <div className="mt-3 sm:flex items-center justify-between">
          <h1 className="text-gray-600 font-black text-xl sm:text-2xl">
            {name}
          </h1>
          <h3 className="text-base sm:text-lg">{price}</h3>
        </div>
        <p className="mt-3 text-base">{description}</p>
        <div className="mt-5 flex items-center"></div>
      </div>
    </div>
  );
}
