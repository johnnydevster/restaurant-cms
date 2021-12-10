import Layout from "../components/Layout";
import Chefs from "../components/About/Chefs";

export default function About({ menu, chefs }) {
  return (
    <Layout menu={menu}>
      <div className="main">
        <Chefs chefs={chefs} />
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
            data {
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

  const menu = await menuRequest.json();
  const chefs = await chefsRequest.json();

  return {
    props: {
      menu: menu.data.category.posts.nodes,
      chefs: chefs.data.chefs.nodes,
    },
    revalidate: 10,
  };
};
