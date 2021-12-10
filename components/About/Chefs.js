import Chef from "./Chef";

export default function Chefs({ chefs }) {
  return (
    <section id="chefs" className="pt-10 px-5 mx-auto bg-gray-50">
      <div className="mt-10 text-gray-500 pt-6 sm:p-8 text-lg text-center">
        <h1 className="text-gray-700 font-playfair font-black text-3xl sm:text-4xl mb-2 border-b-4 inline-block border-yellow-400">
          Meet our chefs
        </h1>
      </div>
      <div className="chefs mt-10 sm:mt-0 max-w-sm sm:max-w-2xl mx-auto">
        {chefs.length > 0 &&
          chefs.map((chef) => {
            return (
              <Chef
                name={chef.chefs.name}
                intro={chef.chefs.intro}
                favoriteFood={chef.chefs.favoriteFood}
                picture={chef.chefs.picture.sourceUrl}
                altText={chef.chefs.picture.altText}
              />
            );
          })}
      </div>
    </section>
  );
}
