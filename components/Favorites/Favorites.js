import Image from "next/image";
import Favorite from "./Favorite";

export default function Favorites({ favorites }) {
  return (
    <section id="favorites" className="bg-gray-50 rounded-b-xl p-2 sm:p-4">
      <div className="flex text-center justify-center">
        <h1 className="mt-4 text-gray-700 font-playfair font-black text-5xl mb-2 border-b-4 inline-block border-yellow-400">
          Some of our favorites
        </h1>
      </div>
      <div id="favoritecontainer" className="mt-16 lg:w-4/5 mx-auto">
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
