export default function Testimonial({ className, text }) {
  return (
    <figure
      className={`${className} relative col-span-1 bg-yellow-500 rounded p-5 text-gray-50`}
    >
      <span class="material-icons text-yellow-400 text-7xl absolute -top-9 left-0">
        format_quote
      </span>
      <blockquote className="text-center my-2">"{text}"</blockquote>
      <footer className="text-center mt-3 text-lg font-semibold">
        <cite>Johnny, M.D</cite>
      </footer>
      <div
        id="starcontainer"
        className="text-yellow-300 flex justify-center mt-1"
      >
        <span class="material-icons text-3xl">star</span>
        <span class="material-icons text-3xl">star</span>
        <span class="material-icons text-3xl">star</span>
        <span class="material-icons text-3xl">star</span>
        <span class="material-icons text-3xl">star</span>
      </div>
    </figure>
  );
}
