import Layout from "../../components/Layout";
import News from "../../components/News/News";

export default function Posts({ news, menu }) {
  return (
    <Layout menu={menu}>
      <div className="main bg-gray-50 pt-24">
        <div className="flex">
          <h1 className="text-gray-700 font-playfair font-black text-2xl sm:text-3xl mb-2 border-b-4 inline-block border-yellow-400 mx-auto">
            Whats happening at Deli Delights?
          </h1>
        </div>
        <News news={news} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const newsRequest = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query MyQuery {
        allNews {
          nodes {
            title
            content
            date
            slug
            featuredImage {
              node {
                author {
                  node {
                    name
                  }
                }
                sourceUrl
              }
            }
            customExcerpt {
              excerpt
            }
          }
        }
      }`,
    }),
  });

  const menuRequest = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query HomePageQuery {
        category(id: "Lunch Menu", idType: NAME) {
          posts {
            nodes {
              title
              excerpt
              content
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      }`,
    }),
  });

  const news = await newsRequest.json();
  const menu = await menuRequest.json();
  return {
    props: {
      news: news.data.allNews.nodes,
      menu: menu.data.category.posts.nodes,
    },
  };
};
