import Image from "next/image";

export default function Favorites() {
  return (
    <section
      id="favorites"
      className="sm:flex mx-auto p-2 sm:p-4 items-center bg-gray-50 rounded-b-xl"
    >
      <div className="h-96 w-full sm:w-4/5 relative shadow-xl">
        <Image
          src="/../public/article-image-1.jpg"
          className="object-cover rounded "
          layout="fill"
          priority
        />
      </div>
      <div className="text-gray-500 p-8 text-lg">
        <h1 className="text-gray-700 font-playfair font-black text-4xl mb-2 border-b-4 inline-block border-yellow-400">
          Welcome to Italy
        </h1>
        <p className="mt-3">
          We have a life long love of making the taste of Italy come to life
          through delicious, carefully prepared meals.
        </p>
        <p className="mt-3">
          But where we come from, food isn't just about what you eat - it's who
          you eat with.
        </p>
        <p className="mt-3">
          Our cozy atmosphere will be sure to provide you with a memorable
          evening - be it with friends, family, or a special someone.
        </p>
        <div className="mt-5 flex items-center">
          <button className="cta-btn text-white w-34 h-11">Read More</button>
          <i
            aria-hidden
            class="transition-all hover: hover:text-gray-300 cursor-pointer ml-10 text-gray-400 text-xl fab fa-facebook-square"
          ></i>
          <i
            aria-hidden
            class="transition-all hover: hover:text-gray-300 cursor-pointer ml-3 text-gray-400 text-xl fab fa-instagram-square"
          ></i>
        </div>
      </div>
    </section>
  );
}
