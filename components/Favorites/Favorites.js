import Image from "next/image";
import Favorite from "./Favorite";

export default function Favorites() {
  return (
    <section id="favorites" className="bg-gray-50 rounded-b-xl p-2 sm:p-4">
      <h1 className="text-gray-700 font-playfair font-black text-4xl mb-2 border-b-4 inline-block border-yellow-400">
        Some of our favorites
      </h1>
      <Favorite />
    </section>
  );
}
