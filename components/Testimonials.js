import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <section id="testimonials" className="text-white p-2 mt-3 sm:p-5">
      <h1 className="text-2xl border-b-4 inline-block border-yellow-500">
        Some of our testimonials
      </h1>
      <div id="testimonial-container" className="my-5 grid grid-cols-3">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}
