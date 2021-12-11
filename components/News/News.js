import Preview from "./Preview";

export default function News({ news }) {
  return (
    <section id="news" className="pt-10 px-2 mx-auto bg-gray-50">
      <div className="text-gray-600 pt-6 sm:p-8 text-lg text-center">
        <h1 className="text-gray-700 font-playfair font-black text-3xl sm:text-4xl mb-2 border-b-4 inline-block border-yellow-400">
          News
        </h1>
        <div className="mt-10 previews max-w-3xl mx-auto">
          {news.length > 0 &&
            news.map((newspost, i) => {
              return (
                <Preview
                  key={`${i} ${newspost.title}`}
                  title={newspost.title}
                  excerpt={newspost.customExcerpt.excerpt}
                  image={newspost.featuredImage.node.sourceUrl}
                  author={newspost.featuredImage.node.author.node.name}
                  date={newspost.date}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
