export default function Testimonial({ className, text, user, stars }) {
  // Create star elements based on 'stars'-prop
  var starElements = [];
  for (var i = 0; i < stars; i++) {
    starElements.push(
      <span key={i} className="material-icons text-3xl sm:text-2xl">
        star
      </span>
    );
  }
  return (
    <figure
      className={`${className} testimonial relative col-span-1 bg-yellow-500 rounded p-5 sm:p-3 text-gray-50 flex flex-col justify-center`}
    >
      <span className="material-icons text-yellow-400 text-7xl absolute -top-9 left-0">
        format_quote
      </span>
      <blockquote className="text-center my-1">"{text}"</blockquote>
      <footer className="text-center mt-1 text-lg font-semibold">
        <cite>{user}</cite>
      </footer>
      <div
        id="starcontainer"
        className="text-yellow-300 flex justify-center mt-1"
      >
        {starElements}
      </div>
    </figure>
  );
}
