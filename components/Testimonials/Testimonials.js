import Testimonial from "./Testimonial";
import Slider from "./Slider";

export default function Testimonials() {
  const testimonialsArray = [
    {
      text: "Me and my boyfriend went here for our 10th anniversary, such a romantic atmosphere and they even took song requests when they learned it was our anniversary. Absolutely loved it!",
      user: "Marie",
      stars: 5,
    },
    {
      text: "Easily the best Italian place in town. Can heartily recommend for families or your SO. Their service is beyond this world!",
      user: "Johnny",
      stars: 5,
    },
    {
      text: "Took my family here for my mom's birthday, service was outstanding and the food was delicious, truly the perfect place for a family dinner.",
      user: "Robert",
      stars: 5,
    },
    {
      text: "Loved every second of it!",
      user: "Mary",
      stars: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="text-white p-2 my-5 sm:p-5 text-center"
    >
      <h1 className="text-3xl border-b-4 inline-block border-yellow-500 text-gray-50">
        Some of our testimonials
      </h1>
      <Slider elements={testimonialsArray} />
    </section>
  );
}
