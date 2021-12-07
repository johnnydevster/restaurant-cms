import Image from "next/image";
import Favorite from "./Favorite";

export default function Favorites({ favorites }) {
  return (
    <section id="favorites" className="bg-gray-50 rounded-b-xl p-2 sm:p-4">
      <div className="flex text-center justify-center">
        <h1 className="mt-6 text-gray-700 font-playfair font-black text-3xl sm:text-4xl mb-2 border-b-4 inline-block border-yellow-400">
          Some of our favorites
        </h1>
      </div>

      <div
        id="favoritecontainer"
        className="mb-10 mt-12 max-w-3xl mx-auto sm:grid grid-cols-2 gap-3 sm:gap-5"
      >
        {favorites.map((favorite) => {
          return (
            <Favorite
              key={favorite.data.title}
              name={favorite.data.name}
              description={favorite.data.description}
              price={favorite.data.price}
              image={favorite.data.image}
            />
          );
        })}
      </div>
    </section>
  );
}
