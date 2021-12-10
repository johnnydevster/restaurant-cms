import Image from "next/image";

export default function Chef({ name, intro, favoriteFood, picture, altText }) {
  console.log(picture);
  return (
    <article className="bg-gray-100 mt-4 p-4 sm:p-6 rounded sm:flex items-center text-gray-600 text-sm shadow">
      <div className="h-60 w-60 mx-auto sm:h-64 sm:w-64 relative rounded-full border-4 border-gray-300 flex-shrink-0">
        <Image
          layout="fill"
          src={picture}
          altText={altText}
          className="object-cover rounded-full"
        />
      </div>
      <div className="px-6 flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold border-b-4 inline-block border-yellow-400">
            {name}
          </h2>
          <div>
            <i className="transition-all hover:text-gray-300 cursor-pointer ml-10 text-gray-400 text-xl fab fa-facebook-square"></i>
            <i className="transition-all hover:text-gray-300 cursor-pointer ml-3 text-gray-400 text-xl fab fa-instagram-square"></i>
          </div>
        </div>
        <p className="mt-2">{intro}</p>
        <p className="mt-2 font-semibold">Favorite food</p>
        <p>{favoriteFood}</p>
      </div>
    </article>
  );
}
