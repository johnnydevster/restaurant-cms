import Layout from "../components/Layout";
import Chefs from "../components/About/Chefs";
import News from "../components/News/News";

export default function About({ menu, chefs, news }) {
  return (
    <Layout menu={menu}>
      <div className="main bg-gray-50">
        <Chefs chefs={chefs} />
        <div className="flex mt-10">
          <h1 className="text-gray-700 font-playfair font-black text-3xl sm:text-4xl mb-2 border-b-4 inline-block border-yellow-400 mx-auto">
            News
          </h1>
        </div>
        <News news={news} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
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

  const chefsRequest = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query HomePageQuery {
        chefs {
          nodes {
            chefs {
              name
              intro
              favoriteFood
              picture {
                sourceUrl
                altText
              }
            }
          }
        }
      }`,
    }),
  });

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

  const menu = await menuRequest.json();
  const chefs = await chefsRequest.json();
  const news = await newsRequest.json();

  return {
    props: {
      menu: menu.data.category.posts.nodes,
      chefs: chefs.data.chefs.nodes,
      news: news.data.allNews.nodes,
    },
    revalidate: 10,
  };
};
