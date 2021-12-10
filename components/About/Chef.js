import Image from "next/image";

export default function Chef({ name, intro, favoriteFood, picture, altText }) {
  console.log(picture);
  return (
    <article className="bg-gray-100 mt-4 p-0 sm:p-6 rounded sm:flex items-center text-gray-600 text-sm shadow">
      <div className="h-56 w-full mx-auto sm:h-64 sm:w-64 relative rounded-t sm:rounded-full sm:border-4 border-gray-300 flex-shrink-0">
        <Image
          layout="fill"
          src={picture}
          altText={altText}
          className="object-cover rounded-t sm:rounded-full"
        />
      </div>
      <div className="p-3 sm:px-6 h-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold border-b-4 inline-block border-yellow-400">
            {name}
          </h2>
          <div>
            <i className="transition-all hover:text-gray-300 cursor-pointer ml-10 text-gray-400 text-xl fab fa-facebook-square"></i>
            <i className="transition-all hover:text-gray-300 cursor-pointer ml-2 text-gray-400 text-xl fab fa-instagram-square"></i>
          </div>
        </div>
        <p className="mt-3 sm:mt-2">{intro}</p>
        <p className="mt-3 sm:mt-2 font-semibold">Favorite food</p>
        <p>{favoriteFood}</p>
      </div>
    </article>
  );
}
