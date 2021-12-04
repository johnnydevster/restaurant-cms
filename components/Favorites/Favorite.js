import Image from "next/image";

export default function Favorite({ name, description, price, image }) {
  return (
    <div className="mt-10 sm:flex mx-auto items-center">
      <div className="h-72 w-full sm:w-1/2 relative sm:shadow-lg flex-shrink-0">
        <Image
          src={image.sourceUrl}
          className="object-cover rounded "
          layout="fill"
          priority
        />
      </div>
      <div className="text-gray-500 px-6 text-lg">
        <div className="mt-4 sm:mt-0 flex items-center justify-between">
          <h1 className="text-gray-700 font-playfair font-black text-3xl mb-2">
            {name}
          </h1>
          <h3>{price}</h3>
        </div>
        <p className="mt-3">{description}</p>
        <div className="mt-5 flex items-center"></div>
      </div>
    </div>
  );
}
