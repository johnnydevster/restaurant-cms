import Preview from "./Preview";

export default function News({ news }) {
  return (
    <section id="news" className="px-2 mx-auto bg-gray-50 relative z-30">
      <div className="text-gray-600 pt-6 sm:p-6 text-lg text-center">
        <div className="previews max-w-sm sm:max-w-3xl mx-auto">
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
                  slug={newspost.slug}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
