import Chef from "./Chef";

export default function Chefs({ chefs }) {
  console.log(chefs);
  return (
    <section id="chefs" className="sm:pt-10 px-5 mx-auto bg-gray-50">
      <div className="mt-10 text-gray-500 pt-6 sm:p-8 text-lg sm:w-2/3">
        <h1 className="text-gray-700 font-playfair font-black text-3xl sm:text-4xl mb-2 border-b-4 inline-block border-yellow-400">
          Meet our chefs
        </h1>
        <p className="mt-3">
          Our amazing chefs are the ones who make us who we are.
        </p>
        <p className="mt-3">
          Hear some of their stories and their own personal favorites!
        </p>
        <div className="mt-5 flex items-center">
          <button className="cta-btn text-white w-34 h-11">Read More</button>
          <i className="transition-all hover:text-gray-300 cursor-pointer ml-10 text-gray-400 text-xl fab fa-facebook-square"></i>
          <i className="transition-all hover:text-gray-300 cursor-pointer ml-3 text-gray-400 text-xl fab fa-instagram-square"></i>
        </div>
      </div>
      <div className="chefs">
        {chefs &&
          chefs.map((chef) => {
            return (
              <Chef
                name={chef.data.name}
                intro={chef.data.intro}
                favoriteFood={chef.data.favoriteFood}
                picture={chef.data.picture.sourceUrl}
                altText={chef.data.picture.altText}
              />
            );
          })}
      </div>
    </section>
  );
}
