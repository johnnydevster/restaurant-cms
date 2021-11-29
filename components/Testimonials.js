import Testimonial from "./Testimonial";

export default function Testimonials() {
  const text1 =
    "Me and my boyfriend went here for our 10th anniversary, such a romantic atmosphere and they even took song requests when they learned it was our anniversary. Absolutely loved it!";
  const text2 =
    "Easily the best Italian place in town. Can heartily recommend for families or your SO. Their service is beyond this world!";
  const text3 =
    "Took my family here for my mom's birthday, service was outstanding and the food was delicious, truly the perfect place for a family dinner.";
  return (
    <section
      id="testimonials"
      className="text-white p-2 mt-5 sm:p-5 text-center"
    >
      <h1 className="text-3xl border-b-4 inline-block border-yellow-500">
        Some of our testimonials
      </h1>
      <div id="testimonial-container" className="my-24 grid grid-cols-3 gap-9">
        <Testimonial text={text1} className="transform scale-90 opacity-70" />
        <Testimonial text={text2} className="transform scale-125 shadow-xl" />
        <Testimonial text={text3} className="transform scale-90 opacity-70" />
      </div>
    </section>
  );
}
